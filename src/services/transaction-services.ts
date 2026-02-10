import { Label } from "@clients";
import { Transaction as PrismaTransaction } from "@prisma/client";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { ListFilters } from "@/types";
import { LabelValidator } from "@/validator";

import { LabelServices } from "./label-services";
import { WalletServices } from "./wallet-services";

export class TransactionServices {
  static async create(accountId: string, walletId: string, transaction: PrismaTransaction, labels: Label[]) {
    const mappedLabelsIds = await LabelValidator.list(accountId, labels);

    if (new Date(transaction.date).getTime() <= new Date().getTime()) {
      const currentWallet = await WalletServices.getOneById(accountId, walletId);
      currentWallet.amount += transaction.amount * (transaction.type === "IN" ? 1 : -1);
      await getPrismaClient().wallet.update({ data: currentWallet, where: { accountId, id: walletId } });
    }

    return (await getPrismaClient().transaction.create({ data: { ...transaction, labels: { connect: mappedLabelsIds } } })) as PrismaTransaction;
  }

  static async update(accountId: string, walletId: string, transactionId: string, transaction: PrismaTransaction, labels: Label[]) {
    const getTransactionById = await getPrismaClient().transaction.findFirst({ where: { id: transactionId, accountId, walletId } });
    if (!getTransactionById) throw new ApiError(`Transaction with id=${transactionId} not found`, 404);

    if (new Date(transaction.date).getTime() <= new Date().getTime() && transaction.amount && transaction.amount !== getTransactionById.amount) {
      const diff = getTransactionById.amount - transaction.amount;
      const currentWallet = await WalletServices.getOneById(accountId, walletId);
      if (transaction.type === "IN") currentWallet.amount += diff;
      else currentWallet.amount -= diff;
      await getPrismaClient().wallet.update({ data: currentWallet, where: { accountId, id: walletId } });
    }

    const mappedLabelsIds = await LabelValidator.list(accountId, labels);

    return await getPrismaClient().transaction.update({ data: { ...transaction, labels: { set: mappedLabelsIds } }, where: { id: transactionId, accountId, walletId } });
  }

  static async getOneById(accountId: string, walletId: string, transactionId: string) {
    const getTransactionById = await getPrismaClient().transaction.findFirst({ where: { id: transactionId, walletId, accountId } });
    if (!getTransactionById) throw new ApiError(`Transaction with id=${transactionId} not found`, 404);
    return getTransactionById;
  }

  static async getAll(accountId: string, query: ListFilters) {
    const { page, pageSize } = query;

    return await getPrismaClient().transaction.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where: { accountId },
    });
  }
}
