import { FiFontAreaProps } from "./index.d";

import {
  Fragment,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import Dropzone from "@/components/ui/Dropzone/index.tsx";
import useFiFontManager from "@/hooks/useFiFontManager.tsx";

const FiFontDropzone: FunctionComponent<FiFontAreaProps> = ({ children }) => {
  const { handleFiFontChange, handleFileTypeOutOfRange, fileTypeArray } =
    useFiFontManager();

  const [dragging, setDragging] = useState(false);

  const handleDragEnter = useCallback((event: DragEvent) => {
    if (event.dataTransfer && event.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((event: DragEvent) => {
    if (event.relatedTarget === null) {
      setDragging(false);
    }
  }, []);

  const handleDrop = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, [handleDragEnter, handleDragLeave, handleDrop]);

  return (
    <Fragment>
      <div
        className={`absolute z-40 h-svh w-svw ${
          dragging ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Dropzone
          className="size-full"
          disableClick
          invisible
          fileTypes={fileTypeArray}
          onChange={handleFiFontChange}
          onFileTypeOutOfRange={handleFileTypeOutOfRange}
        />
      </div>

      {children}
    </Fragment>
  );
};

export default FiFontDropzone;
