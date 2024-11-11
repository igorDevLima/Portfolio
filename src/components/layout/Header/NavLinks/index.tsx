import LinkText from "../../../typografy/LinkText";
import useUuid from "../../../../hooks/utils/useUuid";
import { HeaderNavLinksProps } from "./types";

function HeaderNavLinks({ navLinks, ...props }: HeaderNavLinksProps) {
  const { uuidv4 } = useUuid();

  return (
    <div className="nav-links" {...props}>
      {navLinks?.map((navLink) => (
        <LinkText
          key={uuidv4()}
          href={navLink.href ?? "#"}
          sx={{
            textTransform: "capitalize",
            fontWeight: "var(--weight-text-bold) !important",
          }}
        >
          {navLink.label}
        </LinkText>
      ))}
    </div>
  );
}

export default HeaderNavLinks;
