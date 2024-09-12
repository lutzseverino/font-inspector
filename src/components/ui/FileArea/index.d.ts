import { ReactNode } from "react";

export interface FileAreaSectionProps {
  className?: string;
  invisible?: boolean;
  children?: ReactNode;
}

export interface FileAreaProps extends FileAreaSectionProps {
  onChange?: (files: File[]) => void;
  onFileTypeOutOfRange?: (file: File) => void;
  fileTypes?: string[];
  multiple?: boolean;
}
