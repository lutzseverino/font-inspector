import { Font } from "opentype.js";

import { FiFontPartTransformer } from "@/lib/fifont/transformers/part.ts";
import { FiFont } from "@/lib/types.ts";

export class MetadataTransformer extends FiFontPartTransformer {
  protected apply(font: Font, fiFont: Partial<FiFont>): Partial<FiFont> {
    return {
      ...fiFont,
      metadata: {
        names: font.names,
      },
    };
  }
}
