import { MenuItemProps as LibMenuItemProps } from "@mui/material";
import { MenuItemType } from "../../../types/components";

export interface MenuItemProps extends LibMenuItemProps {
  item: MenuItemType;
}
