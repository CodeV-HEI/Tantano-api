import { GetAllWallets200Response, Wallet as RestWallet, WalletTypeEnum } from "@clients";
import { Wallet as PrismaWallet } from "@prisma/client";
import { v4 } from "uuid";

import { PrismaPaginationInfo } from "@/types";
import { calculatePagination, copyObject } from "@/utilities";

export class WalletMapper {
  public static toRest(wallet: PrismaWallet) {
    const mapped: RestWallet = {
      id: wallet.id,
      name: wallet.name,
      amount: wallet.amount,
      isActive: wallet.isActive,
      accountId: wallet.accountId,
      description: wallet.description,
      type: wallet.type as WalletTypeEnum,
      walletAutomaticIncome: {
        amount: wallet.automaticIncomeAmount,
        paymentDay: wallet.automaticIncomeDay,
        type: wallet.haveAutomaticIncome ? "MENSUAL" : "NOT_SPECIFIED",
      },
    };
    return mapped;
  }

  public static toDomain(wallet: RestWallet): PrismaWallet {
    const mapped = {
      accountId: wallet.accountId || "",
      amount: wallet.amount || 0,
      description: wallet.description || "",
      id: wallet.id || "",
      name: wallet.name || "",
      isActive: !!wallet.isActive,
      type: wallet.type || "",
    };
    return mapped as PrismaWallet;
  }

  public static create(accountId: string, wallet: RestWallet): PrismaWallet {
    const mapped = {
      accountId,
      amount: wallet.amount || 0,
      description: wallet.description || "",
      id: v4(),
      name: wallet.name || "",
      isActive: !!wallet.isActive,
      type: wallet.type || "",
    };
    return mapped as PrismaWallet;
  }

  public static update(accountId: string, wallet: RestWallet): PrismaWallet {
    const mapped = copyObject(wallet);
    delete mapped.amount;
    mapped.accountId = accountId;
    return mapped as PrismaWallet;
  }

  public static toListResponse(wallets: PrismaWallet[], prismaPaginationInfo: PrismaPaginationInfo) {
    const mapped = wallets.map(this.toRest.bind(this));
    const listResponse: GetAllWallets200Response = {
      pagination: calculatePagination(prismaPaginationInfo),
      values: mapped,
    };

    return listResponse;
  }
}
