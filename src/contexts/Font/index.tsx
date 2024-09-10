import { FontContextType } from "./index.d";
import { createContext } from "react";

const initialContext: FontContextType = {
  font: null,
  setFont: () => {},
};

const FontContext = createContext<FontContextType>(initialContext);

export default FontContext;
