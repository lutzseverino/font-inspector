import { FiFont } from "@/lib/types.ts";

export type FiFontContextType = {
  fiFont: FiFont | null;
  setFiFont: (font: FiFont) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  file: File | null;
  setFile: (file: File) => void;
};
