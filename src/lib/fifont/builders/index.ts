import { Font } from "opentype.js";

import { FiFontPartTransformer } from "@/lib/fifont/transformers/part.ts";
import { FiFont } from "@/lib/types.ts";

/**
 * `FiFontBuilder` is responsible for orchestrating the transformation of a `Font` object
 * into a `FiFont` object by applying a chain of `FiFontPartTransformer` instances.
 *
 * This builder class ensures that a series of transformations are applied in sequence,
 * allowing for flexibility and modularity when converting a `Font` to a `FiFont`.
 * The chain of responsibility pattern is used to build up the `FiFont` by passing
 * through various transformers that each handle different aspects of the transformation.
 */
export class FiFontBuilder {
  private firstTransformer: FiFontPartTransformer;

  /**
   * Creates an instance of `FiFontBuilder`.
   *
   * The builder starts the transformation process with the given `firstTransformer`.
   * Additional transformers can be chained using the `then` method on the transformers.
   *
   * @param firstTransformer - The first transformer in the chain, responsible for starting the transformation process.
   *
   * @example
   * const glyphTransformer = new GlyphTransformer();
   * const metadataTransformer = new MetadataTransformer();
   * glyphTransformer.then(metadataTransformer);
   *
   * const builder = new FiFontBuilder(glyphTransformer);
   * const fiFont = builder.build(font);
   */
  constructor(firstTransformer: FiFontPartTransformer) {
    this.firstTransformer = firstTransformer;
  }

  /**
   * Builds a `FiFont` object from the given `Font` object by passing it through the
   * chain of transformers.
   *
   * This method initiates the transformation process, starting from the first transformer
   * provided in the constructor, and passing the `Font` through the chain of responsibility
   * until the `FiFont` object is fully built.
   *
   * @param font - The `Font` object from which data is extracted to build the `FiFont`.
   * @returns The fully transformed `FiFont` object after all transformers have been applied.
   *
   * @example
   * const font: Font = getSomeOpentypeFont();
   * const fiFont = builder.build(font);
   * console.log(fiFont.glyphs);  // Access the transformed glyphs
   */
  build(font: Font): FiFont {
    return this.firstTransformer.transform(font, {});
  }
}
