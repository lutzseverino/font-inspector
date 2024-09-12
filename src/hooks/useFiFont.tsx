import { useContext } from "react";

import FiFontContext from "@/contexts/FiFont";

const useFiFont = () => {
  const context = useContext(FiFontContext);
  if (!context) throw new Error("useFont must be used within a FontProvider");
  return context;
};

export default useFiFont;
