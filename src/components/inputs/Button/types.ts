import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Without } from "../../../types/globals";

export interface ButtonProps extends MuiButtonProps {
  label?: string;
  textColor?: string | "var(--color-text-primary)";
}

export interface ButtonPropsWithoutVariant
  extends Without<ButtonProps, "variant"> {}
