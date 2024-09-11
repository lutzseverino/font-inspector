import { FiFont } from "@/lib/types.ts";

export type FontContextType = {
  fiFont: FiFont | null;
  setFiFont: (font: FiFont) => void;
};
