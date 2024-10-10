import { GridProps } from "@mui/material/Grid";
import { GridSpacing } from "@mui/material/Grid2";
import { Without } from "../../../types/globals";

export interface RowProps
  extends Without<
    GridProps,
    "columnSpacing" | "rowSpacing" | "columnGap" | "columns" | "rowGap"
  > {
  spacing?: GridSpacing | undefined;
}
