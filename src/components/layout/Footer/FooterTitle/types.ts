import { HTMLAttributes } from "react";

export interface FooterTitleProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  subTitle?: string;
}
