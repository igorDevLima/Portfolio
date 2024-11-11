import { MenuProps as MuiMenuProps } from "@mui/material";
import { ToolbarProps } from "../types";

export interface MenuProps
  extends MuiMenuProps,
    Pick<ToolbarProps, "menuItems"> {}
