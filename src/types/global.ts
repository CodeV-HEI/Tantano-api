export interface ListFilters {
  page: number;
  pageSize: number;
}

export interface NameFilter {
  name?: string;
}

export interface PrismaPaginationInfo {
  page: number;
  pageSize: number;
  elementCount: number;
}

export interface DateFilter {
  startingDate?: string;
  endingDate?: string;
}

export interface AmountFilter {
  minAmount?: string;
  maxAmount?: string;
}

export interface SortFilter {
  sort?: "asc" | "desc";
}
