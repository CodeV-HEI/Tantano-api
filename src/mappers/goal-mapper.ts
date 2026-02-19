import { GetAllGoals200Response, Goal as RestGoal } from "@clients";
import { Goal as PrismaGoal } from "@prisma/client";
import { v4 } from "uuid";

import { PrismaPaginationInfo } from "@/types";
import { DEFAULT_COLOR, calculatePagination } from "@/utilities";

export class GoalMapper {
  public static toRest(goal: PrismaGoal) {
    const mapped: RestGoal = {
      id: goal.id,
      name: goal.name,
      amount: goal.amount,
      endingDate: goal.endingDate,
      startingDate: goal.startingDate,
      walletId: goal.walletId,
      accountId: goal.accountId,
      color: goal.color || DEFAULT_COLOR,
      iconRef: goal.iconRef,
    };
    return mapped;
  }

  public static update(accountId: string, goal: RestGoal) {
    const mapped = {
      accountId,
      amount: goal.amount || 0,
      color: goal.color || DEFAULT_COLOR,
      endingDate: new Date(goal.endingDate),
      startingDate: new Date(goal.startingDate),
      id: goal.id,
      name: goal.name || "",
      walletId: goal.walletId,
      iconRef: goal.iconRef,
      isArchived: false,
    };

    return mapped as PrismaGoal;
  }

  public static create(accountId: string, goal: RestGoal) {
    return this.update(accountId, { ...goal, id: v4() });
  }

  public static toListResponse(goals: PrismaGoal[], prismaPaginationInfo: PrismaPaginationInfo) {
    const mapped = goals.map(this.toRest.bind(this));

    const listResponse: GetAllGoals200Response = {
      pagination: calculatePagination(prismaPaginationInfo),
      values: mapped,
    };

    return listResponse;
  }
}
