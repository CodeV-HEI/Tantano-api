import { CreationWallet, UpdateWallet, WalletAutomaticIncome } from "@clients";
import { v4 } from "uuid";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { WalletMapper } from "@/mappers";
import { ListFilters, NameFilter, WalletFilter } from "@/types";
import { filterIfNotNull } from "@/utilities";

export class WalletServices {
  static async create(accountId: string, wallet: CreationWallet) {
    const getWalletByName = await getPrismaClient().wallet.findFirst({ where: { name: wallet.name, accountId } });
    if (getWalletByName) throw new ApiError(`Wallet with name=${wallet.name} already exist`, 400);
    return await getPrismaClient().wallet.create({ data: WalletMapper.create(accountId, wallet) });
  }
  static async update(accountId: string, wallet: UpdateWallet) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id: wallet.id, accountId } });
    if (!getWalletById) throw new ApiError(`Wallet with id=${wallet.id} not found`, 404);

    const getWalletByName = await getPrismaClient().wallet.findFirst({ where: { name: wallet.name, accountId, id: { not: wallet.id } } });
    if (getWalletByName) throw new ApiError(`Wallet with name=${wallet.name} already exist`, 400);

    return await getPrismaClient().wallet.update({ data: WalletMapper.update(accountId, wallet), where: { id: wallet.id, accountId } });
  }
  static async updateAutomaticIncome(accountId: string, walletId: string, automaticIncome: WalletAutomaticIncome) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id: walletId, accountId } });
    if (!getWalletById) throw new ApiError(`Wallet with id=${walletId} not found`, 404);

    getWalletById.automaticIncomeAmount = automaticIncome.amount;
    getWalletById.automaticIncomeDay = automaticIncome.paymentDay;
    getWalletById.isActive = automaticIncome.type === "MENSUAL";

    return await getPrismaClient().wallet.update({ data: getWalletById, where: { id: walletId, accountId } });
  }

  static async getOneById(accountId: string, id: string) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id, accountId } });
    if (!getWalletById || getWalletById.isArchived) throw new ApiError(`Wallet with id=${id} not found`, 404);
    return getWalletById;
  }

  static async archiveOneById(accountId: string, id: string) {
    const getWalletById = await getPrismaClient().wallet.findFirst({ where: { id, accountId } });
    if (!getWalletById || getWalletById.isArchived) throw new ApiError(`Wallet with id=${id} not found`, 404);
    getWalletById.isArchived = true;
    return await getPrismaClient().wallet.update({ data: getWalletById, where: { accountId, id } });
  }

  static async getAll(accountId: string, query: ListFilters & NameFilter & WalletFilter) {
    const { page, pageSize, name, isActive, walletType } = query;

    const where = { accountId, name: { contains: name }, ...filterIfNotNull("isActive", isActive), ...filterIfNotNull("type", walletType), isArchived: false };

    const values = await getPrismaClient().wallet.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where,
    });

    const count = await getPrismaClient().wallet.count({ where });
    return { values, count };
  }
}
