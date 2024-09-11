import { Font } from "opentype.js";

import { FiFont } from "@/lib/types.ts";

/**
 * Abstract base class for transforming parts of a `FiFont` object.
 *
 * The `FiFontPartTransformer` class is designed to be used in a chain of responsibility.
 * Each transformer in the chain is responsible for transforming a specific part of a `FiFont`
 * from a given `Font` object, and it can pass control to the next transformer in the chain.
 *
 * To create a custom transformer, extend this class and implement the `apply` method,
 * which handles the transformation logic for that part of the `FiFont`.
 */
export abstract class FiFontPartTransformer {
  private nextTransformer: FiFontPartTransformer | null = null;

  /**
   * Chains the current transformer with the next transformer.
   *
   * This method allows you to chain multiple transformers together.
   * The next transformer in the chain will be called after the current transformer
   * has completed its transformation.
   *
   * @param transformer - The next `FiFontPartTransformer` to be called in the chain.
   * @returns The newly added `FiFontPartTransformer` to allow further chaining.
   *
   * @example
   * const glyphTransformer = new GlyphTransformer();
   * const metadataTransformer = new MetadataTransformer();
   * glyphTransformer.then(metadataTransformer);
   */
  then(transformer: FiFontPartTransformer): FiFontPartTransformer {
    this.nextTransformer = transformer;
    return transformer;
  }

  /**
   * Transforms the given `Font` into a partial `FiFont` object by applying the current
   * transformer's transformation logic and passing the result to the next transformer in the chain.
   *
   * This method first applies the transformation logic implemented in the `apply`
   * method, then forwards the result to the next transformer in the chain, if any.
   *
   * @param font - The `Font` object from which data is extracted to build the `FiFont`.
   * @param fiFont - The partial `FiFont` object being built, passed between transformers.
   * @returns The fully transformed `FiFont` object after all transformers in the chain have been applied.
   *
   * @example
   * const fiFont = glyphTransformer.transform(font, {});
   * console.log(fiFont.glyphs); // Access the transformed data
   */
  transform(font: Font, fiFont: Partial<FiFont>): FiFont {
    const transformedFiFont = this.apply(font, fiFont);

    if (this.nextTransformer) {
      return this.nextTransformer.transform(font, transformedFiFont);
    }

    return transformedFiFont as FiFont; // Cast to `FiFont` when the chain is done
  }

  /**
   * Abstract method to apply a specific part of the transformation to the `FiFont`.
   *
   * This method must be implemented by any subclass of `FiFontPartTransformer`.
   * It takes a `Font` and a partial `FiFont` object, and it returns the partially transformed
   * `FiFont`. Each subclass should be responsible for transforming one specific part
   * (e.g., glyphs, metadata, kerning) of the `FiFont`.
   *
   * @param font - The `Font` object to extract data from.
   * @param fiFont - The partially built `FiFont` object that will be modified by this transformer.
   * @returns A partially transformed `FiFont` object containing the added data.
   *
   * @example
   * protected apply(font: Font, fiFont: Partial<FiFont>): Partial<FiFont> {
   *   return {
   *     ...fiFont,
   *     names: font.names, // Example of adding names
   *   };
   * }
   */
  protected abstract apply(
    font: Font,
    fiFont: Partial<FiFont>,
  ): Partial<FiFont>;
}
