
import * as cors from "cors";
import * as express from "express";

import { errorHandler, securityHandler } from "@/middlewares";
import {
  authRouter,
  configurationRouter,
  goalListRouter,
  goalRouter,
  labelRouter,
  projectRouter,
  subscriptionRouter,
  swaggerRouter,
  transactionListRouter,
  transactionRouter,
} from "@/routes";

import { walletRouter } from "./routes/wallet-routes";

export const server = async () => {
  try {
    const PORT = process.env.PORT || 8080;

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/auth", authRouter);

    app.use("/account/:accountId/wallet/:walletId/transaction", securityHandler, transactionRouter);
    app.use("/account/:accountId/transaction", securityHandler, transactionListRouter);

    app.use("/account/:accountId/label", securityHandler, labelRouter);
    app.use("/account/:accountId/wallet", securityHandler, walletRouter);
    app.use("/account/:accountId/wallet/:walletId/goal", securityHandler, goalRouter);
    app.use("/account/:accountId/goal", securityHandler, goalListRouter);
    app.use("/account/:accountId/project", securityHandler, projectRouter);
    app.use("/account/:accountId/configuration", securityHandler, configurationRouter);
    app.use("/account/:accountId/subscription", securityHandler, subscriptionRouter);
    app.use("/", swaggerRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use(errorHandler);
  } catch (err) {
    console.log(err);
  }
};
