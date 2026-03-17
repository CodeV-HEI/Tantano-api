import { OAuth2Client } from "google-auth-library";
import { Account } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { getPrismaClient } from "@/configs";
import { v4 } from "uuid";
import { ApiError, BadRequestError } from "@/errors";

const googleClient = new OAuth2Client();

export class AccountServices {
  static async singUp(userId: string, account: Account) {
    const accountExistUsername = await getPrismaClient().account.findFirst({ where: { OR: [{ username: account.username }, { email: account.email }] } });

    if (accountExistUsername) {
      const isEmailExisting = account.email === accountExistUsername.email;
      throw new ApiError((isEmailExisting ? "Email" : "Username") + "=" + (isEmailExisting ? account.email : account.username) + " is already used", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(account.password, salt);
    const parsedAccount: Account = { ...account, id: userId, password: hashedPassword };

    const createdAccount = await getPrismaClient().account.create({
      data: { ...parsedAccount },
    });
    createdAccount.password = undefined;
    return createdAccount;
  }

  static async signIn(email: string, password: string) {
    const account = await getPrismaClient().account.findFirst({ where: { email } });

    if (!account) throw new ApiError(`Account with email=${email} not found`, 404);

    const validPassword = await bcrypt.compare(password, account.password);
    if (!validPassword) throw new ApiError(`Bad password`, 400);
    const token = jwt.sign({ id: account.id, username: account.username, email: account.email }, process.env.JWT_SECRET, { expiresIn: "10h" });
    account.password = undefined;
    return { token, account: account };
  }

  static async getOneById(accountId: string) {
    return await getPrismaClient().account.findUnique({ where: { id: accountId } });
  }

  static async googleSignIn(idToken: string) {
    const clientIds = [
      process.env.GOOGLE_CLIENT_ID_EXPO,
      process.env.GOOGLE_CLIENT_ID_ANDROID,
      process.env.GOOGLE_WEB_CLIENT_ID,
      process.env.GOOGLE_CLIENT_ID_IOS,
    ].filter(Boolean) as string[];

    if (clientIds.length === 0) {
      throw new ApiError("Aucun client ID Google configuré", 500);
    }

    let payload: any = null;
    let lastError: Error | null = null;

    for (const clientId of clientIds) {
      try {
        const ticket = await googleClient.verifyIdToken({
          idToken,
          audience: clientId,
        });
        payload = ticket.getPayload();
        if (payload) break;
      } catch (err) {
        lastError = err as Error;
      }
    }

    if (!payload || !payload.email) {
      console.error("Erreur de vérification Google:", lastError);
      throw new ApiError("Token Google invalide ou expiré", 400);
    }

    const { email, sub: googleId, name } = payload;

    let account = await getPrismaClient().account.findFirst({
      where: { email },
    });

    if (account) {
      if (!account.googleId) {
        account = await getPrismaClient().account.update({
          where: { id: account.id },
          data: { googleId },
        });
      }
    } else {
      const username = name || email.split("@")[0];
      const uniqueUsername = await this.generateUniqueUsername(username);
      account = await getPrismaClient().account.create({
        data: {
          id: v4(),
          username: uniqueUsername,
          email,
          googleId,
          password: "",
        },
      });
    }

    const token = jwt.sign(
      { id: account.id, username: account.username, email: account.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "10h" }
    );

    const { password, ...accountWithoutPassword } = account;
    return { token, account: accountWithoutPassword };
  }

  static async forgotPassword(email: string) {
    const account = await getPrismaClient().account.findFirst({
      where: { email },
    });
    if (!account) {
      throw new ApiError("Aucun compte avec cet email", 404);
    }

    await getPrismaClient().passwordResetToken.deleteMany({
      where: { accountId: account.id, used: false },
    });

    const token = v4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    await getPrismaClient().passwordResetToken.create({
      data: {
        token,
        accountId: account.id,
        expiresAt,
      },
    });

    return token;
  }

  static async resetPassword(token: string, newPassword: string) {
    const resetToken = await getPrismaClient().passwordResetToken.findUnique({
      where: { token },
      include: { account: true },
    });

    if (!resetToken) {
      throw new ApiError("Aucun compte avec cet email", 404);
    }

    if (resetToken.used) {
      throw new BadRequestError("Token déjà utilisé");
    }

    if (new Date() > resetToken.expiresAt) {
      throw new BadRequestError("Token expiré");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await getPrismaClient().account.update({
      where: { id: resetToken.accountId },
      data: { password: hashedPassword },
    });

    await getPrismaClient().passwordResetToken.update({
      where: { id: resetToken.id },
      data: { used: true },
    });
  }

  private static async generateUniqueUsername(base: string): Promise<string> {
    let username = base;
    let counter = 1;
    while (await getPrismaClient().account.findUnique({ where: { username } })) {
      username = `${base}${counter}`;
      counter++;
    }
    return username;
  }
}
