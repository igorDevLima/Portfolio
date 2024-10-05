import "./index.css";
import { FooterContactsProps } from "./types";
import LinkText from "../../../../typografy/LinkText";
import SvgLogo from "../../../Svg/SvgLogo";
import useUuid from "../../../../../hooks/useUuid";

function FooterContacts({ contactsInfo, ...props }: FooterContactsProps) {
  const { uuidv4 } = useUuid();

  return (
    <div className="contact" {...props}>
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
  );
}

export default FooterContacts;
