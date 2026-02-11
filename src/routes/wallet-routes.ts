import * as express from "express";

import { WalletController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const walletRouter = express.Router();

walletRouter.post("/", WalletController.create);
walletRouter.get("/", paginationHandler, WalletController.getAll);
walletRouter.put("/:walletId", WalletController.update);
walletRouter.put("/:walletId/automaticIncome", WalletController.updateAutomaticIncome);
walletRouter.post("/:walletId/archive", WalletController.archiveOne);
walletRouter.get("/:walletId", WalletController.getOne);
