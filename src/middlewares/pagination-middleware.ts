import { ApiError } from "@/errors";

export const paginationHandler: any = (req, _res, _next) => {
  const { page = "1", pageSize = "10" } = req.query;

  const intPage = +page;
  const intPageSize = +pageSize;

  let message = "";

  if (isNaN(intPage)) message += "The page must be a valid number.";
  else if (page < 1) message += "Page must be >= 1.";

  if (isNaN(intPageSize)) message += "The pageSize must be a valid number.";
  else if (pageSize < 1) message += "PageSize must be >= 1.";

  if (message.length > 0) return _next(new ApiError(message, 400));

  req.page = intPage;
  req.pageSize = intPageSize;

  _next();
};
