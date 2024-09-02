export type FontContextType = {
  font: File | null;
  setFont: (font: File) => void;
};

export interface FontProviderProps {
  children: React.ReactNode;
}
