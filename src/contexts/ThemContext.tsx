"use client";
import { createContext, useContext, useState } from "react";
import { tThemeContextProviderProps, tThemeContext, tTheme } from "./types";

export const ThemeContext = createContext<tThemeContext | null>(null);

const ThemeProvider = ({ children }: tThemeContextProviderProps) => {
  const [theme, setTheme] = useState<tTheme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemContext must be used within a ThemContextProvider");
  }

  return context;
};

export default ThemeProvider;
