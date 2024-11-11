import { ToolbarProps as LibToolbarProps } from "@mui/material";
import { AppBarProps } from "../types";

export interface ToolbarProps
  extends LibToolbarProps,
    Pick<AppBarProps, "menuItems"> {}
