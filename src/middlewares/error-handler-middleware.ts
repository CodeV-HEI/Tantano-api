import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const statusCode = isNaN(error.status) ? 500 : error.status;
  console.log(error);

  res.status(statusCode).json({
    code: error.status,
    message: error.message || "Internal Server Error",
  });
};
