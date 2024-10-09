import SvgLogo from "../Svg/SvgLogo";
import "./index.css";
import HeaderNavLinks from "./NavLinks";
import { HeaderProps } from "./types";

function Header({ menuItems, onChangeTheme, ...props }: HeaderProps) {
  return (
    <header {...props}>
      <div>
        <SvgLogo />
      </div>
      {menuItems && <HeaderNavLinks navLinks={menuItems} />}
      <button onClick={onChangeTheme}>mudar tema</button>
    </header>
  );
}

export default Header;
