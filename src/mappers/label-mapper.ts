import { GetAllLabels200Response, Label as RestLabel } from "@clients";
import { Label as PrismaLabel } from "@prisma/client";
import { v4 } from "uuid";

import { PrismaPaginationInfo } from "@/types";
import { DEFAULT_COLOR, calculatePagination } from "@/utilities";

export class LabelMapper {
  public static toRest(label: PrismaLabel) {
    const mapped: RestLabel = {
      id: label.id,
      name: label.name,
      color: label.color || DEFAULT_COLOR,
      iconRef: label.iconRef,
    };
    return mapped;
  }

  public static update(accountId: string, label: RestLabel) {
    const mapped = {
      accountId,
      color: label.color || DEFAULT_COLOR,
      iconRef: label.iconRef,
      id: label.id,
      name: label.name || "",
    };

    return mapped as PrismaLabel;
  }

  public static create(accountId: string, label: RestLabel) {
    return this.update(accountId, { ...label, id: v4() });
  }

  public static toListResponse(labels: PrismaLabel[], prismaPaginationInfo: PrismaPaginationInfo) {
    const mapped = labels.map(this.toRest.bind(this));

    const listResponse: GetAllLabels200Response = {
      pagination: calculatePagination(prismaPaginationInfo),
      values: mapped,
    };

    return listResponse;
  }
}
