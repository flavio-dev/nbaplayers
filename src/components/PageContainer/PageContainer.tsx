"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemContext";
import styles from "./PageContainer.module.css";

export const PageContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  console.log("theme from the context -= ", theme);

  return (
    <div className={theme === "light" ? styles.pageLight : styles.pageDark}>
      {children}
    </div>
  );
};

export default PageContainer;
