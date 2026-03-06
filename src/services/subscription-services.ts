import { v4 } from "uuid";

import { getPrismaClient } from "@/configs";
import { BadRequestError } from "@/errors";

import { ConfigurationServices } from "./configuration-services";

export class SubscriptionServices {
  public static async createSubscriptionToken(accountId: string) {
    const endingDate = new Date();
    endingDate.setMonth(endingDate.getMonth() + 1);
    return await getPrismaClient().subscription.create({ data: { accountId, token: v4(), endingDate } });
  }

  public static async addSubscriptionToAccount(account: string, token: string) {
    const subscription = await getPrismaClient().subscription.findFirst({ where: { token } });
    if (!subscription) throw new BadRequestError("Token=" + token + " does not exist.");
    const configuration: any = await ConfigurationServices.getOne(account);
    delete configuration.subscriptionId;
    return await getPrismaClient().configuration.update({
      data: { ...configuration, subscription: { connect: subscription } },
      where: { id: configuration.id },
      include: { subscription: true },
    });
  }
}
