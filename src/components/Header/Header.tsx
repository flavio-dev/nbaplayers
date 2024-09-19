"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemContext";
import styles from "./Header.module.css";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={`default-wrapper-width ${styles.header}`}>
      <h1>⛹️ NBA Cards</h1>
      <button
        className={`${styles.headerButton} ${
          theme === "light" ? "dark" : "light"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
      </button>
    </header>
  );
};

export default Header;
