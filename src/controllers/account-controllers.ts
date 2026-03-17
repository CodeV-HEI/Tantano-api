import { RequestHandler } from "express";
import { v4 } from "uuid";
import { OAuth2Client } from 'google-auth-library';

import { AccountServices } from "@/services";
import { errorWrapper } from "@/utilities";
import { AccountValidator } from "@/validator";

export class AccountController {
  static readonly signIn: RequestHandler = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      AccountValidator.signIn({ email, password });
      const data = await AccountServices.signIn(email, password);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
  static readonly signUp: RequestHandler = async (req, res, next) => {
    try {
      const account = req.body;
      AccountValidator.signUp(account);
      const createdUser = await AccountServices.singUp(v4(), account);
      res.json(createdUser);
    } catch (err) {
      next(err);
    }
  };
  static readonly googleSignIn: RequestHandler = async (req, res, next) => {
    try {
      const { idToken } = req.body;
      const data = await AccountServices.googleSignIn(idToken);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };

  static readonly forgotPassword: RequestHandler = async (req, res, next) => {
    try {
      const { email } = req.body;
      const token = await AccountServices.forgotPassword(email);
      res.json({ token });
    } catch (err) {
      next(err);
    }
  };

  static readonly resetPassword: RequestHandler = async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      await AccountServices.resetPassword(token, newPassword);
      res.json({ message: "Mot de passe mis à jour avec succès" });
    } catch (err) {
      next(err);
    }
  };
}
