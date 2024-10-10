import { TypographyVariant } from "@mui/material";
import { TypographyBase } from "../../../types/components";

type HeadingVariant = Extract<TypographyVariant, `h${number}`>;

export interface HeadingTextProps extends TypographyBase {
  variant?: HeadingVariant;
}
