import { useTheme } from "../../../hooks/style/useTheme";
import ChangeThemeButton from "../Button/ChangeThemeButton";
import SvgLogo from "../Svg/SvgLogo";
import "./index.css";
import HeaderNavLinks from "./NavLinks";
import { HeaderProps } from "./types";

function Header({ menuItems, ...props }: HeaderProps) {
  const { handleChangeTheme } = useTheme();

  return (
    <header {...props}>
      <div>
        <SvgLogo />
      </div>
      {menuItems && <HeaderNavLinks navLinks={menuItems} />}
      <ChangeThemeButton onClick={handleChangeTheme} />
    </header>
  );
}

export default Header;
