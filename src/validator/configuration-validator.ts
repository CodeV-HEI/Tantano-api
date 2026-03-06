import { BasicConfiguration, TransactionConfiguration } from "@clients";
import z from "zod";

import { BadRequestError } from "@/errors";

const basicConfigurationShema = z.object({
  currency: z.custom((value) => ["MGA", "EUR", "USD"].includes(value as string), "Currency should be one of 'MGA', 'EUR', 'USD'."),
  loginWithoutPassword: z.boolean(),
});

const transactionConfigurationShema = z.object({
  reccurency: z.number().min(0).max(365),
  countDays: z.number().min(0).max(365),
});

export class ConfigurationValidator {
  public static basic(basicConfiguration: BasicConfiguration) {
    const result = basicConfigurationShema.safeParse(basicConfiguration);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }
  public static transaction(transactionConfiguration: TransactionConfiguration) {
    const result = transactionConfigurationShema.safeParse(transactionConfiguration);
    if (!result.success) throw new BadRequestError(z.prettifyError(result.error));
  }
}
