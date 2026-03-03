import { RequestHandler } from "express";

import { ApiError } from "@/errors";
import { ProjectMapper } from "@/mappers";
import { ProjectServices } from "@/services";
import { ProjectValidator } from "@/validator";
import { PdfGeneratorService } from "@/utilities/pdf-generator";

export class ProjectController {
  // Project Management
  static readonly create: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      ProjectValidator.create(req.body);
      const data = await ProjectServices.create(accountId, req.body);
      res.json(ProjectMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly update: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      const { projectId } = req.params;
      ProjectValidator.create(req.body);
      const data = await ProjectServices.update(accountId, projectId as string, req.body);
      res.json(ProjectMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly getOne: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.getOneById(accountId, projectId as string);
      res.json(ProjectMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly getAll: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      const { page = 1, pageSize = 10 } = req.query;
      const data = await ProjectServices.getAll(accountId, {
        page: parseInt(page as string),
        pageSize: parseInt(pageSize as string),
        name: req.query.name as string,
        isArchived: req.query.isArchived ? req.query.isArchived === "true" : false,
      });
      res.json(data.map((p) => ProjectMapper.toRest(p)));
    } catch (err) {
      next(err);
    }
  };

  static readonly archiveOne: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.archiveOneById(accountId, projectId as string);
      res.json(ProjectMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly delete: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.deleteOneById(accountId, projectId as string);
      res.json(ProjectMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };

  // Project Transaction Management
  static readonly createTransaction: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const { walletId, ...transactionData } = req.body;
      ProjectValidator.createTransaction(transactionData);
      const data = await ProjectServices.createTransaction(accountId, projectId as string, transactionData, walletId);
      res.json(ProjectMapper.transactionToRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly updateTransaction: RequestHandler = async (req, res, next) => {
    try {
      const { projectId, transactionId } = req.params;
      const accountId = (req as any).account.id;
      const { walletId, ...transactionData } = req.body;
      ProjectValidator.updateTransaction(transactionData);
      const data = await ProjectServices.updateTransaction(accountId, projectId as string, transactionId as string, transactionData, walletId);
      res.json(ProjectMapper.transactionToRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly getTransaction: RequestHandler = async (req, res, next) => {
    try {
      const { projectId, transactionId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.getTransactionById(accountId, projectId as string, transactionId as string);
      res.json(ProjectMapper.transactionToRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly getTransactions: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.getTransactionsByProject(accountId, projectId as string);
      res.json(data.map((t) => ProjectMapper.transactionToRest(t)));
    } catch (err) {
      next(err);
    }
  };

  static readonly deleteTransaction: RequestHandler = async (req, res, next) => {
    try {
      const { projectId, transactionId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.deleteTransaction(accountId, projectId as string, transactionId as string);
      res.json(ProjectMapper.transactionToRest(data));
    } catch (err) {
      next(err);
    }
  };

  // Statistics & Reports
  static readonly getStatistics: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const data = await ProjectServices.getStatistics(accountId, projectId as string);
      res.json(ProjectMapper.statisticsToRest(data));
    } catch (err) {
      next(err);
    }
  };

  static readonly generateStatisticsPDF: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const statistics = await ProjectServices.getStatistics(accountId, projectId as string);
      const pdfStream = PdfGeneratorService.generateProjectStatisticsPDF(ProjectMapper.statisticsToRest(statistics));
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="statistics-${projectId}.pdf"`);
      pdfStream.pipe(res);
    } catch (err) {
      next(err);
    }
  };

  static readonly generateInvoicePDF: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const statistics = await ProjectServices.getStatistics(accountId, projectId as string);
      const transactions = await ProjectServices.getTransactionsByProject(accountId, projectId as string);
      const pdfStream = PdfGeneratorService.generateProjectInvoicePDF(
        ProjectMapper.statisticsToRest(statistics),
        transactions.map((t) => ProjectMapper.transactionToRest(t))
      );
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="invoice-${projectId}.pdf"`);
      pdfStream.pipe(res);
    } catch (err) {
      next(err);
    }
  };

  static readonly generateSummaryPDF: RequestHandler = async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const accountId = (req as any).account.id;
      const statistics = await ProjectServices.getStatistics(accountId, projectId as string);
      const pdfStream = PdfGeneratorService.generateProjectSummaryPDF(ProjectMapper.statisticsToRest(statistics));
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="summary-${projectId}.pdf"`);
      pdfStream.pipe(res);
    } catch (err) {
      next(err);
    }
  };
}
