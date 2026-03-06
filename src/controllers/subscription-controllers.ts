import { RequestHandler } from "express";

import { ConfigurationMapper, SubscriptionMapper } from "@/mappers";
import { SubscriptionServices } from "@/services";

export class SubscriptionControllers {
  static readonly subscribe: RequestHandler = async (req, res, next) => {
    try {
      const { token } = req.body || {};
      const accountId = (req as any).account.id;
      const configuration = await SubscriptionServices.addSubscriptionToAccount(accountId, token);
      const mappedData = ConfigurationMapper.toRest(configuration);
      res.json(mappedData);
    } catch (err) {
      next(err);
    }
  };
  static readonly createToken: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      const subscription = await SubscriptionServices.createSubscriptionToken(accountId);
      const mappedData = SubscriptionMapper.toRest(subscription);
      res.json(mappedData);
    } catch (err) {
      next(err);
    }
  };
}
