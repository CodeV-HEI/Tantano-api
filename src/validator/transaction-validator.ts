import { CreationTransaction } from "@clients";
import { Transaction } from "@prisma/client";
import z from "zod";

import { ApiError } from "@/errors";

const createTransactionSchema = z.object({
  date: z.refine((value) => new Date(value as string).toString() !== "Invalid Date", "Date invalide"),
  labels: [],
  type: z.refine((type: string) => ["IN", "OUT"].includes(type), "Type should be one of : IN, OU"),
  amount: z.number().min(1),
});

export class TransactionValidator {
  public static create(createTransaction: z.infer<typeof createTransactionSchema>) {
    const result = createTransactionSchema.safeParse(createTransaction);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static update(accountId: string, createTransaction: CreationTransaction) {
    if (createTransaction.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createTransactionSchema.safeParse(createTransaction);

    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }
}
