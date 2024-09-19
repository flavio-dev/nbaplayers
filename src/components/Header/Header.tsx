"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemContext";
import styles from "./Header.module.css";

const toggleTheme = (theme, setTheme) => {
  console.log("clicking");

  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className={`default-wrapper-width ${styles.header}`}>
      <h1>⛹️ NBA Cards</h1>
      <button
        className={
          theme === "light"
            ? `${styles.headerButton} ${styles.headerButtonDark}`
            : `${styles.headerButton} ${styles.headerButtonLight}`
        }
        onClick={() => toggleTheme(theme, setTheme)}
      >
        {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
      </button>
    </header>
  );
};

export default Header;
