import { FiFontContextType } from "./index.d";

import { createContext } from "react";

const initialContext: FiFontContextType = {
  fiFont: null,
  setFiFont: () => {},
};

const FiFontContext = createContext<FiFontContextType>(initialContext);

export default FiFontContext;
