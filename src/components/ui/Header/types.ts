import { HTMLAttributes } from "react";
import { MenuItemType } from "../../../types";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    menuItems?: MenuItemType[];
}
