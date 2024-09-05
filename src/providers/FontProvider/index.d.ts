import { ReactNode } from "react";

export type FontContextType = {
  font: File | null;
  setFont: (font: File) => void;
};

export interface FontProviderProps {
  children: ReactNode;
}
