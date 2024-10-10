import { TypographyVariant } from "@mui/material";
import { TypographyBase } from "../../../types/components";

type BodyTextVariant = Extract<TypographyVariant, `body${number}`>;

export interface BodyTextProps extends TypographyBase {
  variant?: BodyTextVariant;
}
