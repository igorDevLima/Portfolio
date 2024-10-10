import { TypographyVariant } from "@mui/material";
import { TypographyBase } from "../../../types/components";

type LinkVariant = Extract<TypographyVariant, `body${number}`>;

export interface LinkTextProps extends TypographyBase {
  variant?: LinkVariant;
  href: string;
}
