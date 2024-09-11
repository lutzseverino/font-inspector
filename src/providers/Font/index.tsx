import { FontProviderProps } from "./index.d";

import { FunctionComponent, useMemo, useState } from "react";

import FontContext from "@/contexts/Font";
import { FiFont } from "@/lib/types.ts";

const FontProvider: FunctionComponent<FontProviderProps> = ({ children }) => {
  const [fiFont, setFiFont] = useState<FiFont | null>(null);

  const value = useMemo(
    () => ({
      fiFont: fiFont,
      setFiFont: setFiFont,
    }),
    [fiFont, setFiFont],
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export { FontProvider };
