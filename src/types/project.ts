export interface ProjectFilters {
  page: number;
  pageSize: number;
  name?: string;
  isArchived?: boolean;
  sort?: "asc" | "desc";
  sortBy?: string;
}
