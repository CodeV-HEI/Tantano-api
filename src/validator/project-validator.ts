import { CreationProject, CreationProjectTransaction, ProjectTransaction } from "@clients";
import z from "zod";

import { ApiError } from "@/errors";

const createProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().nullable().optional(),
  initialBudget: z.number().min(0, "Initial budget must be positive"),
  color: z.string().optional(),
  iconRef: z.string().nullable().optional(),
});

const createProjectTransactionSchema = z.object({
  name: z.string().min(1, "Transaction name is required"),
  description: z.string().nullable().optional(),
  estimatedCost: z.number().min(0, "Estimated cost must be positive"),
  realCost: z.number().min(0, "Real cost must be positive or zero").optional(),
});

const updateProjectTransactionSchema = z.object({
  name: z.string().min(1, "Transaction name is required").optional(),
  description: z.string().nullable().optional(),
  estimatedCost: z.number().min(0, "Estimated cost must be positive").optional(),
  realCost: z.number().min(0, "Real cost must be positive or zero").optional(),
});

export class ProjectValidator {
  public static create(createProject: CreationProject) {
    const result = createProjectSchema.safeParse(createProject);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static createTransaction(transaction: CreationProjectTransaction) {
    const result = createProjectTransactionSchema.safeParse(transaction);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static updateTransaction(transaction: Partial<ProjectTransaction>) {
    const result = updateProjectTransactionSchema.safeParse(transaction);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }

  public static validateProjectExists(accountId: string, project: any) {
    if (project.accountId !== accountId) {
      throw new ApiError("Your account is not able to access this project", 403);
    }
  }
}
