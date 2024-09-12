import { FiFontProviderProps } from "./index.d";

import { FunctionComponent, useMemo, useState } from "react";

import FiFontContext from "@/contexts/FiFont";
import { FiFont } from "@/lib/types.ts";

const FiFontProvider: FunctionComponent<FiFontProviderProps> = ({
  children,
}) => {
  const [fiFont, setFiFont] = useState<FiFont | null>(null);

  const value = useMemo(
    () => ({
      fiFont: fiFont,
      setFiFont: setFiFont,
    }),
    [fiFont, setFiFont],
  );

  return (
    <FiFontContext.Provider value={value}>{children}</FiFontContext.Provider>
  );
};

export { FiFontProvider };
