import * as express from "express";

import { AccountController } from "@/controllers";

export const authRouter = express.Router();

authRouter.post("/sign-up", AccountController.signUp);
authRouter.post("/sign-in", AccountController.signIn);
authRouter.post("/google", AccountController.googleSignIn);
authRouter.post("/forgot-password", AccountController.forgotPassword);
authRouter.post("/reset-password", AccountController.resetPassword);