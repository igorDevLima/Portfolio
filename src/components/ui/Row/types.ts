import { GridProps } from "@mui/material/Grid";
import { Without } from "../../../types";
import { GridSpacing } from "@mui/material/Grid2";

export interface RowProps
  extends Without<
    GridProps,
    "columnSpacing" | "rowSpacing" | "columnGap" | "columns" | "rowGap"
  > {
  spacing?: GridSpacing | undefined;
}
