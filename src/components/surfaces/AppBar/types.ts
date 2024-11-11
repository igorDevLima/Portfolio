import { AppBarProps as LibAppBarProps } from "@mui/material";
import { MenuItemType } from "../../../types/components";

export interface AppBarProps extends LibAppBarProps {
  menuItems: MenuItemType[];
}
