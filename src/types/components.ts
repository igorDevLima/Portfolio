import { TypographyProps } from "@mui/material";
import { Pathname } from "react-router-dom";
import { Without } from "./globals";

export type TypographyBase = Without<TypographyProps, "variant">;

export type MenuItemType = {
    label: string;
    href?: Pathname;
}