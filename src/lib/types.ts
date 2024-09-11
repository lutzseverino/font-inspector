import { FontNames, Glyph } from "opentype.js";

export interface FiFont {
  metadata: {
    names: FontNames;
  };
  glyphs: Glyph[];
}
