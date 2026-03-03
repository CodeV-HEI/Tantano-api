import { CreationProject, Project as RestProject, ProjectStatistics, ProjectTransaction as RestProjectTransaction } from "@clients";
import { Project as PrismaProject, ProjectTransaction as PrismaProjectTransaction } from "@prisma/client";
import { v4 } from "uuid";

export class ProjectMapper {
  public static toRest(project: PrismaProject): RestProject {
    return {
      id: project.id,
      name: project.name,
      description: project.description || undefined,
      initialBudget: project.initialBudget,
      createdAt: project.createdAt || undefined,
      updatedAt: project.updatedAt || undefined,
      isArchived: project.isArchived,
      color: project.color,
      iconRef: project.iconRef || undefined,
      accountId: project.accountId,
    };
  }

  public static transactionToRest(transaction: PrismaProjectTransaction): RestProjectTransaction {
    return {
      id: transaction.id,
      name: transaction.name,
      description: transaction.description || undefined,
      estimatedCost: transaction.estimatedCost,
      realCost: transaction.realCost || 0,
      createdAt: transaction.createdAt || undefined,
      updatedAt: transaction.updatedAt || undefined,
      projectId: transaction.projectId,
      accountId: transaction.accountId,
      walletId: transaction.walletId || undefined,
    };
  }

  public static statisticsToRest(statistics: ProjectStatistics): ProjectStatistics {
    return {
      project: statistics.project ? this.toRest(statistics.project as any) : undefined,
      totalEstimatedCost: statistics.totalEstimatedCost,
      totalRealCost: statistics.totalRealCost,
      remainingBudget: statistics.remainingBudget,
      transactionCount: statistics.transactionCount,
    };
  }

  public static create(accountId: string, project: CreationProject): PrismaProject {
    return {
      id: v4(),
      name: project.name,
      description: project.description || null,
      initialBudget: project.initialBudget,
      createdAt: new Date(),
      updatedAt: new Date(),
      isArchived: false,
      color: project.color || "#00ff00",
      iconRef: project.iconRef || null,
      accountId,
    } as PrismaProject;
  }
}
