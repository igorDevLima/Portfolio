import { ToolbarProps as MuiToolbarProps } from "@mui/material";
import { AppBarProps } from "../types";

export interface ToolbarProps
  extends MuiToolbarProps,
    Pick<AppBarProps, "menuItems"> {}
