import { useTheme } from "../../../hooks/style/useTheme";
import SvgLogo from "../../data-display/Svg/SvgLogo";
import ChangeThemeButton from "../../inputs/Button/ChangeThemeButton";
import Row from "../Row";
import "./index.css";
import HeaderNavLinks from "./NavLinks";
import { HeaderProps } from "./types";

function Header({ menuItems, ...props }: HeaderProps) {
  const { handleChangeTheme } = useTheme();

  return (
    <header {...props}>
      <Row>
        <SvgLogo />
      </Row>
      <Row gap={2}>
        {menuItems && <HeaderNavLinks navLinks={menuItems} />}
        <ChangeThemeButton onClick={handleChangeTheme} />
      </Row>
    </header>
  );
}

export default Header;
