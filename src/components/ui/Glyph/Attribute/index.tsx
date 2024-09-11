import { GlyphAttributeProps } from "./index.d";

import { FunctionComponent } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

const GlyphAttribute: FunctionComponent<GlyphAttributeProps> = ({
  attribute,
  children,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger className="cursor-default select-text">
        {children}
      </TooltipTrigger>
      <TooltipContent>{attribute}</TooltipContent>
    </Tooltip>
  );
};

export default GlyphAttribute;
