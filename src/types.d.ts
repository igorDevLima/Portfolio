import { TypographyProps } from "@mui/material";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

type TypographyBase = Without<TypographyProps, "variant">;

type MenuItemType = {
  label: string;
  href?: Pathname;
}
