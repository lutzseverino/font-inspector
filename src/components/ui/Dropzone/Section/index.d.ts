import { DragEvent, ReactNode } from "react";

export interface DropzoneSectionProps {
  className?: string;
  invisible?: boolean;
  disableClick?: boolean;
  onDrop?: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
  children?: ReactNode;
}
