import opentype from "opentype.js";
import { useState } from "react";

import { DefaultFiFontBuilder } from "@/lib/fifont/builders/default.ts";
import { FiFont } from "@/lib/types.ts";

const useFiFontBuilder = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const defaultFiFontBuilder = new DefaultFiFontBuilder();

  const buildFiFont = async (font: File): Promise<FiFont> => {
    setLoading(true);
    const arrayBuffer = await font.arrayBuffer();
    const fiFont = defaultFiFontBuilder.build(opentype.parse(arrayBuffer));
    console.log(fiFont);
    setLoading(false);
    return fiFont;
  };

  return { loading, buildFiFont };
};

export default useFiFontBuilder;
