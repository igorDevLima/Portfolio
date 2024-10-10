import { GridProps } from "@mui/material/Grid";
import { GridSpacing } from "@mui/material/Grid2";
import { Without } from "../../../types/globals";
 
export interface ColumnProps extends Without<
    GridProps,
    "columnSpacing" | "rowSpacing" | "columnGap" | "rows" | "rowGap"
> {
    spacing?: GridSpacing | undefined;
}