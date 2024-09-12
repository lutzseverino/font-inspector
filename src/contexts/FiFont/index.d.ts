import { FiFont } from "@/lib/types.ts";

export type FiFontContextType = {
  fiFont: FiFont | null;
  setFiFont: (font: FiFont) => void;
};
