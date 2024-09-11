import { FontGuardProps } from "./index.d";

import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFiFont from "@/hooks/useFiFont.tsx";

const FontGuard: FunctionComponent<FontGuardProps> = ({ children }) => {
  const { fiFont } = useFiFont();
  const navigate = useNavigate();

  useEffect(() => {
    if (!fiFont) navigate("/"); // TODO: Grab route from configuration.
  }, [fiFont, navigate]);

  return children;
};

export default FontGuard;
