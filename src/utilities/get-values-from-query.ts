import { ApiError } from "@/errors";

export const boolean = (key: string, value: string): boolean | undefined => {
  if (value === undefined || value === null) return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new ApiError(`Expected boolean value for ${key} but got ${value}`, 400);
};

export const getValuesFromQuery = {
  boolean,
};
