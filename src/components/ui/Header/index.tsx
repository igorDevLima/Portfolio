import SvgLogo from "../Svg/SvgLogo";
import "./index.css";
import HeaderNavLinks from "./NavLinks";
import { HeaderProps } from "./types";

function Header({ menuItems, ...props }: HeaderProps) {
  return (
    <header {...props}>
      <div>
        <SvgLogo />
      </div>
      {menuItems && <HeaderNavLinks navLinks={menuItems} />}
    </header>
  );
}

export default Header;
