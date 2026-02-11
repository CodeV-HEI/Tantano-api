import { RequestHandler } from "express";

import { ApiError } from "@/errors";
import { WalletMapper } from "@/mappers";
import { WalletServices } from "@/services";
import { getValuesFromQuery } from "@/utilities";
import { WalletValidator } from "@/validator";

export class WalletController {
  static readonly create: RequestHandler = async (req, res, next) => {
    try {
      const accountId = (req as any).account.id;
      WalletValidator.create(req.body);
      const data = await WalletServices.create(accountId, req.body);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly update: RequestHandler = async (req, res, next) => {
    try {
      const wallet = req.body;
      const accountId = (req as any).account.id;
      const { walletId } = req.params;
      WalletValidator.update(accountId, wallet);
      const data = await WalletServices.update(accountId, { ...wallet, id: walletId });
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly updateAutomaticIncome: RequestHandler = async (req, res, next) => {
    try {
      const walletAutomaticIncome = req.body;
      const accountId = (req as any).account.id;
      const { walletId } = req.params;
      WalletValidator.updateAutomaticIncome(walletAutomaticIncome);
      const data = await WalletServices.updateAutomaticIncome(accountId, walletId as string, walletAutomaticIncome);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly getOne: RequestHandler = async (req, res, next) => {
    try {
      const { walletId } = req.params;
      const accountId = (req as any).account.id;
      const data = await WalletServices.getOneById(accountId, walletId as string);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly archiveOne: RequestHandler = async (req, res, next) => {
    try {
      const { walletId } = req.params;
      const accountId = (req as any).account.id;
      const data = await WalletServices.getOneById(accountId, walletId as string);
      res.json(WalletMapper.toRest(data));
    } catch (err) {
      next(err);
    }
  };
  static readonly getAll: RequestHandler = async (req, res, next) => {
    try {
      const { page, pageSize } = req as any;
      const { isActive, name, walletType } = req.query as any;

      if (walletType && !["CASH", "MOBILE_MONEY", "BANK", "DEBT"].includes(walletType))
        throw new ApiError(`Expected "CASH", "MOBILE_MONEY", "BANK", "DEBT" for walletType but got ${walletType} instead`, 400);

      const accountId = (req as any).account.id;
      const data = await WalletServices.getAll(accountId, { page, pageSize, isActive: getValuesFromQuery.boolean("isActive", isActive), name, walletType });
      res.json(WalletMapper.toListResponse(data.values, { page, pageSize, elementCount: data.count }));
    } catch (err) {
      next(err);
    }
  };
}
