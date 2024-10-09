import { GridProps } from "@mui/material/Grid";
import { Without } from "../../../types";
import { GridSpacing } from "@mui/material/Grid2";
 
export interface ColumnProps extends Without<
    GridProps,
    "columnSpacing" | "rowSpacing" | "columnGap" | "rows" | "rowGap"
> {
    spacing?: GridSpacing | undefined;
}