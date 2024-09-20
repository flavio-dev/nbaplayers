import { Dispatch, SetStateAction } from "react";

export type tThemeContextProviderProps = {
  children: React.ReactNode;
};

export type tTheme = "dark" | "light";

export type tThemeContext = {
  theme: tTheme;
  setTheme: Dispatch<SetStateAction<tTheme>>;
};
