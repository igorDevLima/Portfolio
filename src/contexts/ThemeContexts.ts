import { createContext } from "react";
import { Themes } from "../types/theme";

interface ThemeContextType {
    currentTheme: Themes;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    currentTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    toggleTheme: () => { return; }
})