import { DropzoneSectionProps } from "./index.d";

import { FunctionComponent } from "react";

import { cn } from "@/lib/utils.ts";

export const DropzoneSection: FunctionComponent<DropzoneSectionProps> = ({
  className,
  invisible = false,
  disableClick = false,
  onDrop,
  onDragOver,
  children,
}) => {
  return (
    <section
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={cn(className, "size-full rounded-md", {
        "cursor-pointer": !disableClick,
        "border border-dashed border-input": !invisible,
      })}
    >
      {children}
    </section>
  );
};
