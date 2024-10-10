import { TypographyVariant } from "@mui/material";
import { TypographyBase } from "../../../types/components";

type SubtitleVariant = Extract<TypographyVariant, `subtitle${number}`>;

export interface SubtitleTextProps extends TypographyBase {
  variant?: SubtitleVariant;
}
