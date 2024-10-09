import { useEffect, useMemo, useState } from "react";
import { Themes } from "../types";
import { ThemeContext } from "../contexts/ThemeContexts";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode; // Componente filho do ThemeProvider
}) => {
  // Estado para armazenar o tema atual
  const [currentTheme, setCurrentTheme] = useState<Themes>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Alterna entre os temas 'light' e 'dark'
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  // Memoização do valor do contexto para evitar renders desnecessários
  const value = useMemo(() => ({ currentTheme, toggleTheme }), [currentTheme]);

  // Sincroniza o tema com a preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setCurrentTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
