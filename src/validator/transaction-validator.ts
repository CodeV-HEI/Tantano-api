import { CreationTransaction } from "@clients";
import z from "zod";

import { ApiError, BadRequestError } from "@/errors";

const createTransactionSchema = z.object({
  date: z.refine((value) => new Date(value as string).toString() !== "Invalid Date", "Date invalide"),
  labels: z.array(z.object({ id: z.string() })).min(1),
  type: z.refine((type: string) => ["IN", "OUT"].includes(type), "Type should be one of : IN, OUT"),
  amount: z.number().min(1),
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
}
