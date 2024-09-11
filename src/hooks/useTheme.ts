import { useEffect, useState } from "react";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const handleChangeTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return {
    currentTheme,
    handleChangeTheme,
  };
};
