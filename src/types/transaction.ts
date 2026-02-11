import { AmountFilter, DateFilter, ListFilters, SortFilter } from "./global";

export type TransactionFilters = {
  type?: "IN" | "OUT";
  label?: string[];
  sortBy?: "date" | "amount";
  walletId?: string;
} & DateFilter &
  AmountFilter &
  SortFilter &
  ListFilters;
