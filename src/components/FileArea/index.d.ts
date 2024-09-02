export interface FileAreaSectionProps {
  className?: string;
  invisible?: boolean;
  children: React.ReactNode;
}

export interface FileAreaProps extends FileAreaSectionProps {
  onChange?: (files: File[]) => void;
  onFileTypeOutOfRange?: (file: File) => void;
  fileTypes?: string[];
  multiple?: boolean;
}
