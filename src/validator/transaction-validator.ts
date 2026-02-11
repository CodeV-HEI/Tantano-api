import { CreationTransaction } from "@clients";
import z from "zod";

import { ApiError, BadRequestError } from "@/errors";
import { TransactionFilters } from "@/types";

const createTransactionSchema = z.object({
  date: z.refine((value) => new Date(value as string).toString() !== "Invalid Date", "Date invalide"),
  labels: z.array(z.object({ id: z.string() })).min(1),
  type: z.refine((type: string) => ["IN", "OUT"].includes(type), "Type should be one of : IN, OUT"),
  amount: z.number().min(1),
});

const filtersSchema = z.object({
  type: z.refine((type: string) => !type || ["IN", "OUT"].includes(type), "Type should be one of : IN, OUT"),
  sortBy: z.refine((sortBy: string) => !sortBy || ["date", "amount"].includes(sortBy), "SortBy should be one of : date, amount"),
  sort: z.refine((sort: string) => !sort || ["asc", "desc"].includes(sort), "SortBy should be one of : asc, desc"),
  startingDate: z.refine((value) => !value || new Date(value as string).toString() !== "Invalid Date", "Date invalide"),
  endingDate: z.refine((value) => !value || new Date(value as string).toString() !== "Invalid Date", "Date invalide"),
  minAmount: z.refine((value) => !value || /^-?\d+(\.\d+)?$/.test(String(value)), "Min amount must be a valid number"),
  maxAmount: z.refine((value) => !value || /^-?\d+(\.\d+)?$/.test(String(value)), "Max amount must be a valid number"),
});

export class TransactionValidator {
  public static create(createTransaction: z.infer<typeof createTransactionSchema>) {
    const result = createTransactionSchema.safeParse(createTransaction);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }

  public static update(accountId: string, createTransaction: CreationTransaction) {
    if (createTransaction.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createTransactionSchema.safeParse(createTransaction);

    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }

  public static filters(filters: TransactionFilters) {
    const result = filtersSchema.safeParse(filters);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }
}
