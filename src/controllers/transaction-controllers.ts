import { RequestHandler } from "express";

import { BadRequestError } from "@/errors";
import { TransactionMapper } from "@/mappers";
import { TransactionServices } from "@/services";
import { TransactionValidator } from "@/validator";

export class TransactionController {
  static readonly create: RequestHandler = async (req, res, _next) => {
    try {
      const { walletId, accountId } = req.params as Record<string, string>;

      TransactionValidator.create(req.body);
      const mappedCreateTransaction = TransactionMapper.create(accountId, walletId, req.body);
      const labels = req.body.labels;

      if (!labels || labels.length === 0) throw new BadRequestError("One label is expected at least");

      const data = await TransactionServices.create(accountId, walletId, mappedCreateTransaction, req.body.labels);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly update: RequestHandler = async (req, res, _next) => {
    try {
      const label = req.body;
      const accountId = (req as any).account.id;
      const { walletId, transactionId } = req.params as Record<string, string>;

      TransactionValidator.update(accountId, label);
      const mappedUpdateTransaction = TransactionMapper.update(accountId, walletId as string, req.body);
      const labels = req.body.labels;
      if (!labels || labels.length === 0) throw new BadRequestError("One label is expected at least");

      const data = await TransactionServices.update(accountId, walletId, transactionId, mappedUpdateTransaction, labels);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly getOne: RequestHandler = async (req, res, _next) => {
    try {
      const { walletId, accountId, transactionId } = req.params as Record<string, string>;
      const data = await TransactionServices.getOneById(accountId, walletId, transactionId);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly deleteOne: RequestHandler = async (req, res, _next) => {
    try {
      const { walletId, accountId, transactionId } = req.params as Record<string, string>;
      const data = await TransactionServices.deleteOneById(accountId, walletId, transactionId);
      res.json(TransactionMapper.toRest(data));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
  static readonly getAll: RequestHandler = async (req, res, _next) => {
    try {
      const { page, pageSize } = req as any;
      const { accountId } = req.params as Record<string, string>;
      TransactionValidator.filters(req.query as any);
      const data = await TransactionServices.getAll(accountId, { page, pageSize, ...req.query });
      res.json(data.map(TransactionMapper.toRest));
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  };
}
