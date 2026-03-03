import { CreationProject, CreationProjectTransaction, ProjectStatistics } from "@clients";
import { Project as PrismaProject, ProjectTransaction as PrismaProjectTransaction } from "@prisma/client";

import { getPrismaClient } from "@/configs";
import { ApiError } from "@/errors";
import { ProjectFilters } from "@/types";
import { filterIfNotNull } from "@/utilities";

import { WalletServices } from "./wallet-services";

export class ProjectServices {
  // Project CRUD
  static async create(accountId: string, project: CreationProject): Promise<PrismaProject> {
    return await getPrismaClient().project.create({
      data: {
        name: project.name,
        description: project.description || null,
        initialBudget: project.initialBudget,
        color: project.color || "#00ff00",
        iconRef: project.iconRef || null,
        accountId,
      },
    });
  }

  static async getOneById(accountId: string, projectId: string): Promise<PrismaProject> {
    const project = await getPrismaClient().project.findFirst({
      where: { id: projectId, accountId },
    });
    if (!project || project.isArchived) throw new ApiError(`Project with id=${projectId} not found`, 404);
    return project;
  }

  static async update(accountId: string, projectId: string, project: Partial<CreationProject>): Promise<PrismaProject> {
    const existingProject = await this.getOneById(accountId, projectId);

    return await getPrismaClient().project.update({
      where: { id: projectId, accountId },
      data: {
        name: project.name || existingProject.name,
        description: project.description !== undefined ? project.description : existingProject.description,
        initialBudget: project.initialBudget || existingProject.initialBudget,
        color: project.color || existingProject.color,
        iconRef: project.iconRef !== undefined ? project.iconRef : existingProject.iconRef,
      },
    });
  }

  static async archiveOneById(accountId: string, projectId: string): Promise<PrismaProject> {
    const project = await this.getOneById(accountId, projectId);
    return await getPrismaClient().project.update({
      where: { id: projectId, accountId },
      data: { isArchived: true },
    });
  }

  static async deleteOneById(accountId: string, projectId: string): Promise<PrismaProject> {
    const project = await this.getOneById(accountId, projectId);
    return await getPrismaClient().project.delete({
      where: { id: projectId, accountId },
    });
  }

  static async getAll(accountId: string, query: ProjectFilters) {
    const { page, pageSize, name, isArchived = false, sort = "desc", sortBy = "createdAt" } = query;

    return await getPrismaClient().project.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
      where: {
        accountId,
        isArchived,
        ...filterIfNotNull("name", name, () => ({ contains: name, mode: "insensitive" })),
      },
      orderBy: {
        [sortBy]: sort,
      },
    });
  }

  // ProjectTransaction CRUD
  static async createTransaction(accountId: string, projectId: string, transaction: CreationProjectTransaction, walletId?: string): Promise<PrismaProjectTransaction> {
    const project = await this.getOneById(accountId, projectId);

    // Si un walletId est fourni et qu'il y a un coût réel, déduire du wallet
    if (walletId && transaction.realCost && transaction.realCost > 0) {
      const wallet = await WalletServices.getOneById(accountId, walletId);
      wallet.amount -= transaction.realCost;
      await getPrismaClient().wallet.update({
        data: { amount: wallet.amount },
        where: { id: walletId, accountId },
      });
    }

    return await getPrismaClient().projectTransaction.create({
      data: {
        name: transaction.name,
        description: transaction.description || null,
        estimatedCost: transaction.estimatedCost,
        realCost: transaction.realCost || 0,
        projectId,
        accountId,
        walletId: walletId || null,
      },
    });
  }

  static async getTransactionById(accountId: string, projectId: string, transactionId: string): Promise<PrismaProjectTransaction> {
    const transaction = await getPrismaClient().projectTransaction.findFirst({
      where: { id: transactionId, projectId, accountId },
    });
    if (!transaction) throw new ApiError(`Transaction with id=${transactionId} not found`, 404);
    return transaction;
  }

  static async updateTransaction(accountId: string, projectId: string, transactionId: string, transaction: Partial<CreationProjectTransaction>, walletId?: string): Promise<PrismaProjectTransaction> {
    const existingTransaction = await this.getTransactionById(accountId, projectId, transactionId);

    // Si le coût réel a changé et qu'un wallet est associé, ajuster le wallet
    const newRealCost = transaction.realCost !== undefined ? transaction.realCost : existingTransaction.realCost;
    const oldRealCost = existingTransaction.realCost || 0;
    const costDifference = (newRealCost || 0) - oldRealCost;

    // Déterminer quel wallet utiliser
    const targetWalletId = walletId !== undefined ? walletId : existingTransaction.walletId;

    if (targetWalletId && costDifference !== 0) {
      const wallet = await WalletServices.getOneById(accountId, targetWalletId);
      wallet.amount -= costDifference; // Soustraire la différence
      await getPrismaClient().wallet.update({
        data: { amount: wallet.amount },
        where: { id: targetWalletId, accountId },
      });
    }

    return await getPrismaClient().projectTransaction.update({
      where: { id: transactionId },
      data: {
        name: transaction.name || existingTransaction.name,
        description: transaction.description !== undefined ? transaction.description : existingTransaction.description,
        estimatedCost: transaction.estimatedCost || existingTransaction.estimatedCost,
        realCost: newRealCost,
        walletId: targetWalletId,
      },
    });
  }

  static async deleteTransaction(accountId: string, projectId: string, transactionId: string): Promise<PrismaProjectTransaction> {
    const transaction = await this.getTransactionById(accountId, projectId, transactionId);
    
    // Si une transaction avec un coût réel est liée à un wallet, rembourser le wallet
    if (transaction.walletId && transaction.realCost && transaction.realCost > 0) {
      const wallet = await WalletServices.getOneById(accountId, transaction.walletId);
      wallet.amount += transaction.realCost; // Rembourser le montant
      await getPrismaClient().wallet.update({
        data: { amount: wallet.amount },
        where: { id: transaction.walletId, accountId },
      });
    }

    return await getPrismaClient().projectTransaction.delete({
      where: { id: transactionId },
    });
  }

  static async getTransactionsByProject(accountId: string, projectId: string) {
    const project = await this.getOneById(accountId, projectId);

    return await getPrismaClient().projectTransaction.findMany({
      where: {
        projectId,
        accountId,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // Statistics
  static async getStatistics(accountId: string, projectId: string): Promise<ProjectStatistics> {
    const project = await this.getOneById(accountId, projectId);
    const transactions = await this.getTransactionsByProject(accountId, projectId);

    const totalEstimatedCost = transactions.reduce((sum, t) => sum + t.estimatedCost, 0);
    const totalRealCost = transactions.reduce((sum, t) => sum + (t.realCost || 0), 0);
    const remainingBudget = project.initialBudget - totalRealCost;

    return {
      project,
      totalEstimatedCost,
      totalRealCost,
      remainingBudget,
      transactionCount: transactions.length,
    };
  }
}
