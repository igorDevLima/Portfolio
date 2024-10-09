import { HTMLAttributes } from "react";
import { MenuItemType, ThemeChanger } from "../../../types";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement>, ThemeChanger {
    menuItems?: MenuItemType[];
}
