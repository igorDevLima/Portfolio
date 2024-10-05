import { HTMLAttributes } from "react";
import { MenuItemType } from "../../../../../types";

interface NavLink extends MenuItemType {}

export interface FooterNavigateProps extends HTMLAttributes<HTMLDivElement> {
  navLinks: NavLink[];
}
