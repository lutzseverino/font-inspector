import { useContext } from "react";

import FontContext from "@/contexts/Font";

const useFiFont = () => {
  const context = useContext(FontContext);
  if (!context) throw new Error("useFont must be used within a FontProvider");
  return context;
};

export default useFiFont;
