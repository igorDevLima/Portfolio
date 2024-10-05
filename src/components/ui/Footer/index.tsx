import HeadingText from "../../typografy/HeadingText";
import "./index.css";
import { FooterProps } from "./types";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { MenuItemType } from "../../../types";
import useUuid from "../../../hooks/useUuid";
import SubtitleText from "../../typografy/SubtitleText";
import LinkText from "../../typografy/LinkText";
import SvgLogo from "../Svg/SvgLogo";

const contactsInfo = [
  {
    title: "+55 (27) 99731-7545",
    href: "/",
    icon: LocalPhoneIcon,
  },
  {
    title: "igorlimadeveloper@gmail.com",
    href: "/",
    icon: MailIcon,
  },
];

const navLinks: MenuItemType[] = [
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/",
  },
];

function Footer({ ...props }: FooterProps) {
  const { uuidv4 } = useUuid();

  return (
    <footer {...props}>
      <div className="footer-title">
        <HeadingText variant="h6">
          Quer levar seu projeto para o próximo nível?
        </HeadingText>
        <SubtitleText
          sx={{ fontWeight: "var(--weight-text-bold)" }}
          variant="subtitle1"
          className="gradient-text"
        >
          Vamos conversar!
        </SubtitleText>
      </div>
      <div className="footer-content">
        <div className="contact">
          <SvgLogo textColor="white" />
          {contactsInfo.map((contactInfo) => {
            const Icon = contactInfo.icon;

            return (
              <LinkText
                key={uuidv4()}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: "var(--weight-text-light) !important",
                  opacity: "30%",
                }}
                href={contactInfo.href}
              >
                <Icon sx={{ fontSize: "1.2rem" }} />
                {contactInfo.title}
              </LinkText>
            );
          })}
        </div>
        <div className="navigate">
          {navLinks.map((navLink) => (
            <LinkText
              key={uuidv4()}
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "var(--weight-text-bold) !important",
                gap: "0.5rem",
              }}
              href={navLink.href}
            >
              {navLink.label}
            </LinkText>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
