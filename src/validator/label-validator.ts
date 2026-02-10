import { Label as LabelRest } from "@clients";
import { Label as LabelPrisma } from "@prisma/client";
import z from "zod";

import { ApiError } from "@/errors";
import { LabelServices } from "@/services";

const createLabelSchema = z.object({
  name: z.string().min(1),
});

export class LabelValidator {
  public static create(createLabel: z.infer<typeof createLabelSchema>) {
    const result = createLabelSchema.safeParse(createLabel);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static update(accountId: string, createLabel: LabelPrisma) {
    if (createLabel.accountId !== accountId) throw new ApiError("Your account is not able to make change on this element", 403);
    const result = createLabelSchema.safeParse(createLabel);

    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static async list(accountId: string, labels: LabelRest[]) {
    const errors = [];
    const prismaLabelPromises = labels.map(async ({ id: labelId }) => {
      return LabelServices.getOneById(accountId, labelId).then((label) => ({ label, labelId }));
    });
    const prismaLabel = await Promise.all(prismaLabelPromises);
    prismaLabel.forEach(({ label, labelId }) => {
      if (!label) errors.push(`Label with id=${labelId} not found.`);
    });
    if (errors.length !== 0) throw new ApiError(errors.join(" "), 400);
    return prismaLabel.map((l) => ({ id: l.label.id }));
  }
}
