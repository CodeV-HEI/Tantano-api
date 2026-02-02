import * as cors from "cors";
import * as express from "express";

import { errorHandler, securityHandler } from "@/middlewares";
import { authRouter, labelRouter, swaggerRouter } from "@/routes";

import { walletRouter } from "./routes/wallet-routes";

import { Request, Response } from "express";

export const server = async () => {
  try {
    const PORT = process.env.PORT || 8080;

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/auth", authRouter);

    app.use("/account/:accountId/label", securityHandler, labelRouter);
    app.use("/account/:accountId/wallet", securityHandler, walletRouter);
    app.get("/", (_req: Request, res: Response) => {
      res.redirect("/api-docs");
    });
    app.use("/", swaggerRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use(errorHandler);
  } catch (err) {
    console.log(err);
  }
};
