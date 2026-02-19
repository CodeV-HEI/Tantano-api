import { Goal as RestGoal } from "@clients";
import { Goal as GoalPrisma } from "@prisma/client";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { GoalMapper } from "@/mappers";
import { GoalFilters } from "@/types";
import { filterIfNotNull, filterIfNotNullDate, filterIfNotNullNumber } from "@/utilities";

export class GoalServices {
  static async create(accountId: string, walletId: string, goal: GoalPrisma) {
    const getGoalByName = await getPrismaClient().goal.findFirst({ where: { name: goal.name, accountId, isArchived: false, walletId } });
    if (getGoalByName) throw new ApiError(`Goal with name=${goal.name} already exist`, 400);
    return await getPrismaClient().goal.create({ data: goal });
  }
  static async update(accountId: string, walletId: string, goal: RestGoal) {
    const getGoalById = await getPrismaClient().goal.findFirst({ where: { id: goal.id, accountId, walletId, isArchived: false } });
    if (!getGoalById || getGoalById.isArchived) throw new ApiError(`Goal with id=${goal.id} not found`, 404);

    const getGoalByName = await getPrismaClient().goal.findFirst({ where: { name: goal.name, accountId, walletId, id: { not: goal.id }, isArchived: false } });
    if (getGoalByName) throw new ApiError(`Goal with name=${goal.name} already exist`, 400);

    return await getPrismaClient().goal.update({ data: GoalMapper.update(accountId, goal), where: { id: goal.id, accountId, walletId } });
  }

  static async getOneById(accountId: string, id: string) {
    const getGoalById = await getPrismaClient().goal.findFirst({ where: { id, accountId } });
    if (!getGoalById || getGoalById.isArchived) throw new ApiError(`Goal with id=${id} not found`, 404);
    return getGoalById;
  }
  static async archiveOneById(accountId: string, id: string) {
    const getGoalById = await getPrismaClient().goal.findFirst({ where: { id, accountId } });
    if (!getGoalById) throw new ApiError(`Goal with id=${id} not found`, 404);
    getGoalById.isArchived = true;
    return await getPrismaClient().goal.update({ data: getGoalById, where: { id, accountId } });
  }
  static async getAll(accountId: string, query: GoalFilters) {
    const { page, pageSize, name = "", walletId, startingDateBeginning, endingDateBeginning, endingDateEnding, startingDateEnding, sort, sortBy, maxAmount, minAmount } = query;

    const where = {
      accountId,
      ...filterIfNotNull("walletId", walletId),
      name: { contains: name },
      endingDate: { ...filterIfNotNullDate("gte", startingDateBeginning), ...filterIfNotNullDate("lte", startingDateEnding) },
      startingDate: { ...filterIfNotNullDate("gte", endingDateBeginning), ...filterIfNotNullDate("lte", endingDateEnding) },
      amount: { ...filterIfNotNullNumber("gte", minAmount), ...filterIfNotNullNumber("lte", maxAmount) },
      isArchived: false,
    };

    const values = await getPrismaClient().goal.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where,
      orderBy: {
        [sortBy]: sort,
      },
    });

    const count = await getPrismaClient().goal.count({ where });

    return {
      values,
      count,
    };
  }
}
