import * as express from "express";

import { SubscriptionControllers } from "@/controllers";

export const subscriptionRouter = express.Router({ mergeParams: true });

subscriptionRouter.post("/", SubscriptionControllers.subscribe);
subscriptionRouter.post("/token", SubscriptionControllers.createToken);
