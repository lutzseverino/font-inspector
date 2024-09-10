import { FontProviderProps } from "./index.d";
import { FunctionComponent, useMemo, useState } from "react";
import FontContext from "src/contexts/Font";

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

export { FontProvider };
