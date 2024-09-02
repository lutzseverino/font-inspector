import { ChangeEvent, DragEvent, useState } from "react";

const useFileDrop = (fileTypes: string[]) => {
  const [files, setFiles] = useState<File[]>([]);

  const accept =
    fileTypes
      .map((fT) => (fT === "any" || fT.startsWith(".") ? fT : `.${fT}`))
      .join(",") || "any";

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFiles([]);
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    setFiles([]);
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return { files, accept, handleFileChange, handleDrop, handleDragOver };
};

export default useFileDrop;
