import { FiFont } from "@/lib/types.ts";

export type FontContextType = {
  font: FiFont | null;
  setFont: (font: FiFont) => void;
};
