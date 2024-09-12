import { FiFontProviderProps } from "./index.d";

import { FunctionComponent, useMemo, useState } from "react";

import FiFontContext from "@/contexts/FiFont";
import { FiFont } from "@/lib/types.ts";

const FiFontProvider: FunctionComponent<FiFontProviderProps> = ({
  children,
}) => {
  const [fiFont, setFiFont] = useState<FiFont | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const value = useMemo(
    () => ({
      fiFont,
      setFiFont,
      loading,
      setLoading,
      file,
      setFile,
    }),
    [fiFont, file, loading],
  );

  return (
    <FiFontContext.Provider value={value}>{children}</FiFontContext.Provider>
  );
};

export { FiFontProvider };
