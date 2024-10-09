import { AppBarProps as MuiAppBarProps } from "@mui/material";
import { MenuItemType, ThemeChanger } from "../../../types";

export interface AppBarProps extends MuiAppBarProps, ThemeChanger {
  menuItems: MenuItemType[];
}
