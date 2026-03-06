import { email, z } from "zod";

import { ApiError } from "@/errors";

const signUp = z.object({
  password: z.string().min(8),
  username: z.string().min(4),
  email: z.email(),
});

const signIn = z.object({
  password: z.string().min(8),
  email: z.string().min(4),
});

type SignUp = z.infer<typeof signUp>;
type SignIn = z.infer<typeof signIn>;

export class AccountValidator {
  public static signUp(account: SignUp) {
    const result = signUp.safeParse(account);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }
  public static signIn(account: SignIn) {
    const result = signIn.safeParse(account);
    if (!result.success) throw new ApiError(z.prettifyError(result.error), 400);
  }
}
