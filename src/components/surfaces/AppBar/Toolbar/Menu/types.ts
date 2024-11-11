import { MenuProps as LibMenuProps } from "@mui/material";
import { ToolbarProps } from "../types";

export interface MenuProps
  extends LibMenuProps,
    Pick<ToolbarProps, "menuItems"> {}
