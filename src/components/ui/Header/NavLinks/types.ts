import { HTMLAttributes } from "react";
import { MenuItemType } from "../../../../types/components";

interface NavLink extends MenuItemType {}

export interface HeaderNavLinksProps extends HTMLAttributes<HTMLDivElement> {
  navLinks: NavLink[];
}
