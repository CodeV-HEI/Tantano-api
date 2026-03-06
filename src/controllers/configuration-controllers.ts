import { RequestHandler } from "express";

import { ConfigurationMapper } from "@/mappers";
import { ConfigurationServices } from "@/services";
import { ConfigurationValidator } from "@/validator";

export class ConfigurationControllers {
  static readonly getConfiguration: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      const data = await ConfigurationServices.getOne(accountId);
      const mappedData = ConfigurationMapper.toRest(data);
      res.json(mappedData);
    } catch (err) {
      next(err);
    }
  };

  static readonly updateBasicConfiguration: RequestHandler = async (req, res, next) => {
    try {
      const basicConfiguration = req.body;
      const accountId = (req as any).account.id;
      ConfigurationValidator.basic(basicConfiguration);
      const data = await ConfigurationServices.updateBasicConfiguration(accountId, basicConfiguration);
      const mappedData = ConfigurationMapper.toRest(data);
      res.json(mappedData);
    } catch (err) {
      next(err);
    }
  };
  static readonly updateTransactionConfiguration: RequestHandler = async (req, res, next) => {
    try {
      const transactionConfiguration = req.body;
      const accountId = (req as any).account.id;
      ConfigurationValidator.transaction(transactionConfiguration);
      const data = await ConfigurationServices.updateTransactionConfiguration(accountId, transactionConfiguration);
      const mappedData = ConfigurationMapper.toRest(data);
      res.json(mappedData);
    } catch (err) {
      next(err);
    }
  };
}
