import { useContext } from "react";

import { FontContext } from "@/contexts/FontContext";

const useFont = () => {
  const context = useContext(FontContext);

  if (context === undefined) {
    throw new Error("useFont must be used within a FontProvider");
  }

  return context;
};

export default useFont;
