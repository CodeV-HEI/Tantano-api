import * as express from "express";

import { ConfigurationControllers } from "@/controllers";

export const configurationRouter = express.Router({ mergeParams: true });

configurationRouter.get("/", ConfigurationControllers.getConfiguration);
configurationRouter.put("/", ConfigurationControllers.updateBasicConfiguration);
configurationRouter.put("/transaction", ConfigurationControllers.updateTransactionConfiguration);
