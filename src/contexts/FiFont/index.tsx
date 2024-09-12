import { FiFontContextType } from "./index.d";

import { createContext } from "react";

const initialContext: FiFontContextType = {
  fiFont: null,
  setFiFont: () => {},
  loading: false,
  setLoading: () => {},
  file: null,
  setFile: () => {},
};

const FiFontContext = createContext<FiFontContextType>(initialContext);

export default FiFontContext;
