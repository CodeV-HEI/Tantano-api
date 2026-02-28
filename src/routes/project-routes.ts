import * as express from "express";

import { ProjectController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const projectRouter = express.Router({ mergeParams: true });

// Project routes
projectRouter.post("/", ProjectController.create);
projectRouter.get("/", paginationHandler, ProjectController.getAll);
projectRouter.put("/:projectId", ProjectController.update);
projectRouter.post("/:projectId/archive", ProjectController.archiveOne);
projectRouter.delete("/:projectId", ProjectController.delete);
projectRouter.get("/:projectId", ProjectController.getOne);

// Project Transaction routes
projectRouter.post("/:projectId/transaction", ProjectController.createTransaction);
projectRouter.get("/:projectId/transaction", ProjectController.getTransactions);
projectRouter.put("/:projectId/transaction/:transactionId", ProjectController.updateTransaction);
projectRouter.delete("/:projectId/transaction/:transactionId", ProjectController.deleteTransaction);
projectRouter.get("/:projectId/transaction/:transactionId", ProjectController.getTransaction);

// Statistics and Reports routes
projectRouter.get("/:projectId/statistics", ProjectController.getStatistics);
projectRouter.get("/:projectId/pdf/statistics", ProjectController.generateStatisticsPDF);
projectRouter.get("/:projectId/pdf/invoice", ProjectController.generateInvoicePDF);
projectRouter.get("/:projectId/pdf/summary", ProjectController.generateSummaryPDF);
