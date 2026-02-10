import { ApiError } from "./api-error";

const BadRequestErrorStatus = 400;
export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, BadRequestErrorStatus);
  }
}
