import { Theme } from "@/providers/Theme";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};