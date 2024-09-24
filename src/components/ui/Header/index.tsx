import useUuid from "../../../hooks/useUuid";
import LinkText from "../../typografy/LinkText";
import "./index.css";
import { HeaderProps } from "./types";

function Header({ menuItems, ...props }: HeaderProps) {
  const { uuidv4 } = useUuid();

  return (
    <header {...props}>
      <div>Logo</div>
      <div className="nav-links">
        {menuItems?.map((menuItem) => (
          <LinkText
            key={uuidv4()}
            href={menuItem.href}
            sx={{
              textTransform: "capitalize",
              fontWeight: "var(--weight-text-bold) !important",
            }}
          >
            {menuItem.label}
          </LinkText>
        ))}
      </div>
    </header>
  );
}

export default Header;
