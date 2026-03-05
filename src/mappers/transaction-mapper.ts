import { CreationTransaction as RestCreationTransaction, Transaction as RestTransaction } from "@clients";
import { Transaction as PrismaTransaction } from "@prisma/client";
import { v4 } from "uuid";

import { LabelMapper } from "./label-mapper";

export class TransactionMapper {
  public static toRest(transaction: any) {
    const result = {
      accountId: transaction.accountId,
      amount: transaction.amount,
      date: transaction.date.toISOString(),
      description: transaction.description,
      id: transaction.id,
      type: transaction.type,
      walletId: transaction.walletId,
      labels: transaction.labels.map(LabelMapper.toRest),
      goalId: transaction.goalId,
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
      goalId: transaction.goalId,
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
      goalId: transaction.goalId,
    };
    return mapped as PrismaTransaction;
  }
}
