export function isFileOutOfRange(file: File, fileTypes: string[]): boolean {
  if (fileTypes.includes("any")) return false;
  const fileExtension = `.${file.name.split(".").pop()}`;
  return !fileTypes.includes(fileExtension);
}
