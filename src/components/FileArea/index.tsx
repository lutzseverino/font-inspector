import { FileAreaProps, FileAreaSectionProps } from "./index.d";
import { FunctionComponent, useEffect } from "react";

import useFileDrop from "@/hooks/useFileDrop.tsx";
import { cn } from "@/lib/utils.ts";

export const FileAreaSection: FunctionComponent<FileAreaSectionProps> = ({
  className,
  invisible = false,
  children,
}) => {
  return (
    <section
      className={`${cn(className, `cursor-pointer rounded-xl ${invisible ? "" : "border border-dashed border-neutral-300"} p-2`)}`}
    >
      {children}
    </section>
  );
};

const FileArea: FunctionComponent<FileAreaProps> = ({
  className,
  invisible = false,
  onChange = () => {},
  onFileTypeOutOfRange = () => {},
  fileTypes = ["any"],
  multiple = false,
  children,
}) => {
  const { files, accept, handleFileChange, handleDrop, handleDragOver } =
    useFileDrop(fileTypes);

  useEffect(() => {
    const outOfRangeFile = files.find((file) => {
      if (!fileTypes.includes("any")) {
        const fileExtension = `.${file.name.split(".").pop()}`;
        return !fileTypes.includes(fileExtension);
      }
      return false;
    });

    if (outOfRangeFile) {
      onFileTypeOutOfRange(outOfRangeFile);
    } else onChange(files);
  }, [fileTypes, files, onChange, onFileTypeOutOfRange]);

  return (
    <FileAreaSection className={className} invisible={invisible}>
      <div
        className="h-full w-full"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="browse"
          hidden
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
        <label htmlFor="browse" className="cursor-pointer">
          {children}
        </label>
      </div>
    </FileAreaSection>
  );
};

export default FileArea;
