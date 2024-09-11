import { FiFontBuilder } from "@/lib/fifont/builders";
import { GlyphTransformer } from "@/lib/fifont/transformers/glyph.ts";
import { MetadataTransformer } from "@/lib/fifont/transformers/metadata.ts";

export class DefaultFiFontBuilder extends FiFontBuilder {
  constructor() {
    const glyphTransformer = new GlyphTransformer();
    const metadataTransformer = new MetadataTransformer();

    glyphTransformer.then(metadataTransformer);

    super(glyphTransformer);
  }
}
