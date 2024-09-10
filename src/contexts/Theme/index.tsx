import { ThemeProviderState } from "./index.d";
import { createContext } from "react";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export default ThemeContext;
