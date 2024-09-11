import { AppBarProps as MuiAppBarProps } from "@mui/material";
import { MenuItemType } from "../../types";

export interface AppBarProps extends MuiAppBarProps {
  menuItems: MenuItemType[];
}
