import { RequestHandler } from "express";
import { v4 } from "uuid";

import { TransactionMapper } from "@/mappers";
import { TransactionServices } from "@/services";
import { TransactionValidator } from "@/validator";

export class TransactionController {
  static readonly create: RequestHandler = async (req, res, _next) => {
    try {
      const accountId = (req as any).account.id;
      const { walletId } = req.params;

      TransactionValidator.create(req.body);
      const mappedCreateTransaction = TransactionMapper.create(accountId, walletId as string, req.body);

      const data = await TransactionServices.create(accountId, walletId as string, mappedCreateTransaction);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly update: RequestHandler = async (req, res, _next) => {
    try {
      const label = req.body;
      const accountId = (req as any).account.id;
      const { labelId } = req.params;

      TransactionValidator.update(accountId, label);

      const data = await TransactionServices.create(accountId, { ...label, id: labelId });
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly getOne: RequestHandler = async (req, res, _next) => {
    try {
      const { labelId } = req.params;
      const accountId = (req as any).account.id;
      const data = await TransactionServices.getOneById(accountId, labelId as string);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly getAll: RequestHandler = async (req, res, _next) => {
    try {
      const { page, pageSize } = req as any;
      const accountId = (req as any).account.id;

      const data = await TransactionServices.getAll(accountId, { page, pageSize });
      res.json(data.map(TransactionMapper.toRest));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
}
