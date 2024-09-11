import { GlyphSVGProps } from "./index.d";

import { FunctionComponent } from "react";

const GlyphGraphic: FunctionComponent<GlyphSVGProps> = ({
  path,
  viewBoxWidth,
  viewBoxHeight,
  width,
  height,
}) => {
  let computedPath = path;
  const pathRegex = /<path d="|"\s*\/>/g;

  if (computedPath.match(pathRegex)) {
    computedPath = computedPath.replace(pathRegex, "");
  }

  return (
    <svg
      className="border border-border"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={width}
      height={height}
      transform="scale(1, -1)"
    >
      <path d={computedPath} fill="currentColor" />
    </svg>
  );
};

export default GlyphGraphic;
