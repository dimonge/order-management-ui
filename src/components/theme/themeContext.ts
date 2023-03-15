import defaultTheme from "./defaultTheme";
import { createContext } from "react";

export const ThemeContext = createContext({ theme: defaultTheme });
