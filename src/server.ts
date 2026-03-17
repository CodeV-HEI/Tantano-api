import cors from "cors";
import express,
{
  Request,
  Response
} from "express";

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

    const allowedOrigins = [
      'http://localhost:8081',
      'exp://localhost:19000',
      'http://localhost:19000',
      'https://tantano-api.onrender.com'
    ];

    const corsOptions = {
      origin: (origin: string | undefined, callback: any) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          console.log('CORS bloqué pour origine:', origin);
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
      credentials: true,
      optionsSuccessStatus: 200
    };

    app.use(express.json());
    app.use(cors(corsOptions));

    app.use("/auth", authRouter);

    app.use("/account/:accountId/wallet/:walletId/transaction", securityHandler, transactionRouter);
    app.use("/account/:accountId/transaction", securityHandler, transactionListRouter);

    app.use("/account/:accountId/label", securityHandler, labelRouter);
    app.use("/account/:accountId/wallet", securityHandler, walletRouter);

    app.get("/", (_req: Request, res: Response) => {
      res.redirect("/api-docs");
    });

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
