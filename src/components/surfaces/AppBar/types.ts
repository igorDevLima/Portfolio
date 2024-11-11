import { AppBarProps as MuiAppBarProps } from "@mui/material";
import { MenuItemType } from "../../../types/components";

export interface AppBarProps extends MuiAppBarProps {
  menuItems: MenuItemType[];
}
