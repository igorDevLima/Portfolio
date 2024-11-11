import { ButtonProps as LibButtonProps } from "@mui/material/Button";
import { Without } from "../../../types/globals";

export interface ButtonProps extends LibButtonProps {
  label?: string;
  textColor?: string | "var(--color-text-primary)";
}

export interface ButtonPropsWithoutVariant
  extends Without<ButtonProps, "variant"> {}
