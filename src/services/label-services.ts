import { Label as RestLabel } from "@clients";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { LabelMapper } from "@/mappers";
import { ListFilters, NameFilter } from "@/types";

export class LabelServices {
  static async create(accountId: string, label: RestLabel) {
    const getLabelByName = await getPrismaClient().label.findFirst({ where: { name: label.name, accountId, isArchived: false } });
    if (getLabelByName) throw new ApiError(`Label with name=${label.name} already exist`, 400);
    return await getPrismaClient().label.create({ data: LabelMapper.create(accountId, label) });
  }
  static async update(accountId: string, label: RestLabel) {
    const getLabelById = await getPrismaClient().label.findFirst({ where: { id: label.id, accountId } });
    if (!getLabelById || getLabelById.isArchived) throw new ApiError(`Label with id=${label.id} not found`, 404);

    const getLabelByName = await getPrismaClient().label.findFirst({ where: { name: label.name, accountId, id: { not: label.id }, isArchived: false } });
    if (getLabelByName) throw new ApiError(`Label with name=${label.name} already exist`, 400);

    return await getPrismaClient().label.update({ data: LabelMapper.update(accountId, label), where: { id: label.id, accountId } });
  }

  static async getOneById(accountId: string, id: string) {
    const getLabelById = await getPrismaClient().label.findFirst({ where: { id, accountId } });
    if (!getLabelById || getLabelById.isArchived) throw new ApiError(`Label with id=${id} not found`, 404);
    return getLabelById;
  }
  static async archiveOneById(accountId: string, id: string) {
    const getLabelById = await getPrismaClient().label.findFirst({ where: { id, accountId } });
    if (!getLabelById) throw new ApiError(`Label with id=${id} not found`, 404);
    getLabelById.isArchived = true;
    return await getPrismaClient().label.update({ data: getLabelById, where: { id, accountId } });
  }
  static async getAll(accountId: string, query: ListFilters & NameFilter) {
    const { page, pageSize, name = "" } = query;

    const where = { accountId, name: { contains: name }, isArchived: false };

    const values = await getPrismaClient().label.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where,
    });

    const count = await getPrismaClient().label.count({ where });

    return {
      values,
      count,
    };
  }
}
