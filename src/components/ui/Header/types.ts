import { HTMLAttributes } from "react";
import { MenuItemType } from "../../../types/components";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    menuItems?: MenuItemType[];
}
