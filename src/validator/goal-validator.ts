import { Goal as GoalRest } from "@clients";
import { Goal as GoalPrisma } from "@prisma/client";
import z from "zod";

import { ApiError, BadRequestError } from "@/errors";
import { GoalServices, WalletServices } from "@/services";

const createGoalSchema = z
  .object({
    name: z.string().min(1),
    amount: z.number().min(1),
    startingDate: z.custom((value: string) => new Date(value as string).toString() !== "Invalid Date", "Starting Date invalid").transform((v: string) => new Date(v)),
    endingDate: z.custom((value: string) => new Date(value as string).toString() !== "Invalid Date", "Ending Date invalid").transform((v: string) => new Date(v)),
  })
  .refine(({ startingDate, endingDate }) => startingDate.getTime() <= endingDate.getTime(), "Starting date must be before ending date");

const filterSchema = z
  .object({
    name: z.string().optional(),
    walletId: z.string().optional(),
    startingDateBeginning: z.custom((value: string) => !value || new Date(value as string).toString() !== "Invalid Date", "Starting Date invalid"),
    startingDateEnding: z.custom((value: string) => !value || new Date(value as string).toString() !== "Invalid Date", "Starting Date invalid"),
    endingDateBeginning: z.custom((value: string) => !value || new Date(value as string).toString() !== "Invalid Date", "Ending Date invalid"),
    endingDateEnding: z.custom((value: string) => !value || new Date(value as string).toString() !== "Invalid Date", "Ending Date invalid"),
    minAmount: z.custom((value) => !value || /^-?\d+(\.\d+)?$/.test(String(value)), "Min amount must be a valid number"),
    maxAmount: z.custom((value) => !value || /^-?\d+(\.\d+)?$/.test(String(value)), "Max amount must be a valid number"),
    sortBy: z.refine(
      (sortBy: string) => !sortBy || ["startingDate", "endingDate", "amount", "createdAt", "name"].includes(sortBy),
      "SortBy should be one of : startingDate, endingDate, amount, createdAt",
    ),
    sort: z.refine((sort: string) => !sort || ["asc", "desc"].includes(sort), "SortBy should be one of : asc, desc"),
  })
  .refine(
    ({ startingDateBeginning, startingDateEnding }: any) =>
      !startingDateBeginning || !startingDateEnding || new Date(startingDateBeginning).getTime() <= new Date(startingDateEnding).getTime(),
    "In Starting date, beginning must be before ending",
  )
  .refine(
    ({ endingDateBeginning, endingDateEnding }: any) =>
      !endingDateBeginning || !endingDateEnding || new Date(endingDateBeginning).getTime() <= new Date(endingDateEnding).getTime(),
    "In Ending date, beginning must be before ending",
  )
  .refine(({ minAmount, maxAmount }) => !minAmount || !maxAmount || +minAmount <= +maxAmount, "Min amount must be lower than max amount");

export class GoalValidator {
  public static async create(accountId: string, walletId: string, createGoal: GoalRest) {
    const wallet = await WalletServices.getOneById(accountId, walletId);

    if (!wallet) throw new BadRequestError(`Wallet with id=${walletId} not found`);

    if (walletId !== createGoal.walletId) throw new BadRequestError("Wallet id does not match");

    const result = createGoalSchema.safeParse(createGoal);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }

  public static update(accountId: string, createGoal: GoalPrisma) {
    if (createGoal.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createGoalSchema.safeParse(createGoal);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }

  public static async list(accountId: string, goals: GoalRest[]) {
    const errors = [];
    const prismaGoalPromises = goals.map(async ({ id: goalId }) => {
      return GoalServices.getOneById(accountId, goalId).then((goal) => ({ goal, goalId }));
    });
    const prismaGoal = await Promise.all(prismaGoalPromises);
    prismaGoal.forEach(({ goal, goalId }) => {
      if (!goal) errors.push(`Goal with id=${goalId} not found.`);
    });
    if (errors.length !== 0) throw new BadRequestError(errors.join(" "));
    return prismaGoal.map((l) => ({ id: l.goal.id }));
  }

  public static filters(filters: Record<string, any>) {
    const result = filterSchema.safeParse(filters);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }
}
