import { DropzoneSection } from "./Section";
import { DropzoneProps } from "./index.d";
import { isFileOutOfRange } from "./utils.ts";

import { FunctionComponent, useEffect, useRef } from "react";

import useFileManager from "@/hooks/useFileDrop";

const useDropzone = (
  files: File[],
  fileTypes: string[],
  onChange: (files: File[]) => void,
  onFileTypeOutOfRange: (file: File) => void,
) => {
  const prevFilesRef = useRef(files);

  useEffect(() => {
    if (prevFilesRef.current !== files) {
      const outOfRangeFile = files.find((file) =>
        isFileOutOfRange(file, fileTypes),
      );
      if (outOfRangeFile) onFileTypeOutOfRange(outOfRangeFile);
      else onChange(files);

      prevFilesRef.current = files;
    }
  }, [files, fileTypes, onChange, onFileTypeOutOfRange]);
};

const Dropzone: FunctionComponent<DropzoneProps> = ({
  className,
  invisible = false,
  multiple = false,
  disableClick = false,
  onChange = () => {},
  onFileTypeOutOfRange = () => {},
  fileTypes = ["any"],
  children,
}) => {
  const { files, accept, handleFileChange, handleDrop, handleDragOver } =
    useFileManager(fileTypes);

  useDropzone(files, fileTypes, onChange, onFileTypeOutOfRange);

  return (
    <DropzoneSection
      className={className}
      invisible={invisible}
      disableClick={disableClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {!disableClick ? (
        <>
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
        </>
      ) : (
        children
      )}
    </DropzoneSection>
  );
};

export default Dropzone;
