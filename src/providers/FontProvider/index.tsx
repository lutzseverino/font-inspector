import { FontContextType, FontProviderProps } from "./index.d";
import { FunctionComponent, createContext, useMemo, useState } from "react";

const initialContext: FontContextType = {
  font: null,
  setFont: () => {},
};

const FontContext = createContext<FontContextType>(initialContext);

const FontProvider: FunctionComponent<FontProviderProps> = ({ children }) => {
  const [font, setFont] = useState<File | null>(null);

  const value = useMemo(
    () => ({
      font,
      setFont,
    }),
    [font, setFont],
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export { FontContext, FontProvider };
