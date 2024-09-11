import { GlyphBoundingBoxAttributesProps } from "./index.d";

import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { InlineCode } from "@/components/base/Typography/index.tsx";
import GlyphAttribute from "@/components/ui/Glyph/Attribute/index.tsx";

const GlyphBoundingBoxAttributes: FunctionComponent<
  GlyphBoundingBoxAttributesProps
> = ({ xMin, yMin, xMax, yMax }) => {
  const { t } = useTranslation("components/glyph");

  const renderAttribute = (label: string, value?: number) => (
    <GlyphAttribute attribute={label}>
      <InlineCode>{value ?? t("n-a")}</InlineCode>
    </GlyphAttribute>
  );

  return (
    <Fragment>
      <span>(</span>
      {renderAttribute(t("tooltips.x-min"), xMin)}
      <span>, </span>
      {renderAttribute(t("tooltips.y-min"), yMin)}
      <span>) - (</span>
      {renderAttribute(t("tooltips.x-max"), xMax)}
      <span>, </span>
      {renderAttribute(t("tooltips.y-max"), yMax)}
      <span>)</span>
    </Fragment>
  );
};

export default GlyphBoundingBoxAttributes;
