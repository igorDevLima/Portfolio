import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContexts";

export const useTheme = () => {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  return {
    currentTheme,
    handleChangeTheme: toggleTheme,
  };
};
