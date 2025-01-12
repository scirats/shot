import { useFileUpload } from "./useFileUpload";
import { useDragAndDrop } from "./useDragAndDrop";

export const useUpload = () => {
  const { image, isFetching, isSuccess, uploadImage, resetUploadState } =
    useFileUpload();

  const { getRootProps, getInputProps, isDragActive } =
    useDragAndDrop(uploadImage);

  return {
    image,
    isFetching,
    isSuccess,
    getRootProps,
    getInputProps,
    isDragActive,
    resetUploadState,
  };
};
