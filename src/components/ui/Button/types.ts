import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Without } from "../../../types";

export interface ButtonProps extends MuiButtonProps {
  label?: string;
  textColor?: string;
}

export interface ButtonPropsWithoutVariant
  extends Without<ButtonProps, "variant"> {}
