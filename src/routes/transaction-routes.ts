import * as express from "express";

import { TransactionController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const transactionRouter = express.Router({ mergeParams: true });

transactionRouter.post("/", TransactionController.create);
transactionRouter.put("/:transactionId", TransactionController.update);
transactionRouter.get("/:transactionId", TransactionController.getOne);
transactionRouter.delete("/:transactionId", TransactionController.deleteOne);

export const transactionListRouter = express.Router({ mergeParams: true });
transactionListRouter.get("/", paginationHandler, TransactionController.getAll);
