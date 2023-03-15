import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "./themeContext";

interface ThemeProviderProps {
  children: ReactElement;
  theme?: any;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
