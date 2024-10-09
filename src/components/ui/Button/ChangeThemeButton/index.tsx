import Button from "..";
import { ChangeThemeButtonProps } from "./types";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../../../../hooks/style/useTheme";

function ChangeThemeButton({ children, ...props }: ChangeThemeButtonProps) {
  const { currentTheme } = useTheme();

  return (
    <Button {...props}>
      {currentTheme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
      {children}
    </Button>
  );
}

export default ChangeThemeButton;
