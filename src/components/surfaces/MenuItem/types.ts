import { MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { MenuItemType } from "../../../types/components";

export interface MenuItemProps extends MuiMenuItemProps {
  item: MenuItemType;
}
