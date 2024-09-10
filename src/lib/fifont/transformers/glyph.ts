import { Font, Glyph, GlyphSet } from "opentype.js";

import { FiFontPartTransformer } from "@/lib/fifont/transformers/part.ts";
import { FiFont } from "@/lib/types.ts";

export class GlyphTransformer extends FiFontPartTransformer {
  protected apply(font: Font, fiFont: Partial<FiFont>): Partial<FiFont> {
    return {
      ...fiFont,
      glyphs: this.getGlyphs(font.glyphs),
    };
  }

  private getGlyphs(glyphSet: GlyphSet): Glyph[] {
    const glyphs: Glyph[] = [];
    for (let i = 0; i < glyphSet.length; i++) glyphs.push(glyphSet.get(i));
    return glyphs;
  }
}
