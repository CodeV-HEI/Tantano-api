import * as express from "express";

import { LabelController } from "@/controllers";
import { paginationHandler } from "@/middlewares";

export const labelRouter = express.Router();

labelRouter.post("/", LabelController.create);
labelRouter.get("/", paginationHandler, LabelController.getAll);
labelRouter.put("/:labelId", LabelController.update);
labelRouter.get("/:labelId", LabelController.getOne);
labelRouter.post("/:labelId/archive", LabelController.archiveOne);
