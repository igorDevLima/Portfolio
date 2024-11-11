import { SvgIconComponent } from "@mui/icons-material";
import { HTMLAttributes } from "react";

interface ContactInfo {
  title: string;
  href: string;
  icon: SvgIconComponent;
}

export interface FooterContactsProps extends HTMLAttributes<HTMLDivElement>{
  contactsInfo: ContactInfo[];
}
