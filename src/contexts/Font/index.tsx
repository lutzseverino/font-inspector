import { FontContextType } from "./index.d";

import { createContext } from "react";

const initialContext: FontContextType = {
  fiFont: null,
  setFiFont: () => {},
};

const FontContext = createContext<FontContextType>(initialContext);

export default FontContext;
