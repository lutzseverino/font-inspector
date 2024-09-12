import { DropzoneSectionProps } from "./Section/index.d";

export interface DropzoneProps extends DropzoneSectionProps {
  onChange?: (files: File[]) => void;
  onFileTypeOutOfRange?: (file: File) => void;
  fileTypes?: string[];
  multiple?: boolean;
}
