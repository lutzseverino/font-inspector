import { FontGuardProps } from "./index.d";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import useFont from "@/hooks/useFont.tsx";

const FontGuard: FunctionComponent<FontGuardProps> = ({ children }) => {
  const { font } = useFont();
  const navigate = useNavigate();
  if (!font) navigate("/"); // TODO: Grab route from configuration.

  return children;
};

export default FontGuard;
