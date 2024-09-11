import { FileAreaProps, FileAreaSectionProps } from "./index.d";

import { FunctionComponent, useEffect, useRef } from "react";

import useFileDrop from "@/hooks/useFileDrop.tsx";
import { cn } from "@/lib/utils.ts";

export const FileAreaSection: FunctionComponent<FileAreaSectionProps> = ({
  className,
  invisible = false,
  children,
}) => {
  return (
    <section
      className={`${cn(
        className,
        `cursor-pointer rounded-md ${invisible ? "" : "border border-dashed border-input"} p-4`,
      )}`}
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

  const prevFilesRef = useRef(files);

  useEffect(() => {
    if (prevFilesRef.current !== files) {
      const outOfRangeFile = files.find((file) => {
        let execute = false;
        if (!fileTypes.includes("any")) {
          const fileExtension = `.${file.name.split(".").pop()}`;
          execute = !fileTypes.includes(fileExtension);
        }
        return execute;
      });
      if (outOfRangeFile) onFileTypeOutOfRange(outOfRangeFile);
      else onChange(files);
      prevFilesRef.current = files;
    }
  }, [files, fileTypes, onChange, onFileTypeOutOfRange]);

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
