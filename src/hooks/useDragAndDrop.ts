import { useDropzone } from "react-dropzone";

export const useDragAndDrop = (onDrop: (file: File) => void) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => {
      if (files.length) onDrop(files[0]);
    },
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return { getRootProps, getInputProps, isDragActive };
};
