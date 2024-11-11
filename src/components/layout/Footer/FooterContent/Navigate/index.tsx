import "./index.css";
import LinkText from "../../../../typografy/LinkText";
import { FooterNavigateProps } from "./types";
import useUuid from "../../../../../hooks/utils/useUuid";

function FooterNavigate({ navLinks, ...props }: FooterNavigateProps) {
  const { uuidv4 } = useUuid();

  return (
    <div className="navigate" {...props}>
      {navLinks.map((navLink) => (
        <LinkText
          key={uuidv4()}
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "var(--weight-text-bold) !important",
            gap: "0.5rem",
          }}
          href={navLink.href ?? "#"}
        >
          {navLink.label}
        </LinkText>
      ))}
    </div>
  );
}

export default FooterNavigate;
