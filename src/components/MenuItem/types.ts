import { MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { MenuItemType } from "../../types";

export interface MenuItemProps extends MuiMenuItemProps {
  item: MenuItemType;
}
