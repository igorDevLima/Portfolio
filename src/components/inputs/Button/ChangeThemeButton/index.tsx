import Button from "..";
import { ChangeThemeButtonProps } from "./types";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../../../../hooks/style/useTheme";
import Icon from "../../../data-display/Icon";

function ChangeThemeButton({ children, ...props }: ChangeThemeButtonProps) {
  const { currentTheme } = useTheme();

  return (
    <Button {...props}>
      {currentTheme === "light" ? <Icon iconElement={WbSunnyIcon}/> : <Icon iconElement={DarkModeIcon}/>}
      {children}
    </Button>
  );
}

export default ChangeThemeButton;
