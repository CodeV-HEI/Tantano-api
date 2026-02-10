import { CreationTransaction as RestCreationTransaction, Transaction as RestTransaction } from "@clients";
import { Transaction as PrismaTransaction } from "@prisma/client";
import { v4 } from "uuid";

export class TransactionMapper {
  public static toRest(transaction: PrismaTransaction) {
    const result = {
      accountId: transaction.accountId,
      amount: transaction.amount,
      date: transaction.date.toISOString(),
      description: transaction.description,
      id: transaction.id,
      walletId: transaction.walletId,
    };

    return result;
  }
  public static create(accountId: string, walletId: string, transaction: RestCreationTransaction): PrismaTransaction {
    const mapped: PrismaTransaction = {
      id: v4(),
      accountId,
      walletId,
      amount: transaction.amount,
      date: new Date(transaction.date),
      description: transaction.description,
      type: transaction.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return mapped as PrismaTransaction;
  }
  public static update(accountId: string, walletId: string, transaction: RestTransaction): PrismaTransaction {
    const mapped = {
      id: transaction.id,
      accountId,
      walletId,
      amount: transaction.amount,
      date: new Date(transaction.date),
      description: transaction.description,
      type: transaction.type,
    };
    return mapped as PrismaTransaction;
  }
}
