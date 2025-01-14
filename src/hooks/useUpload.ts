import { useFileUpload } from "./useFileUpload";
import { useDragAndDrop } from "./useDragAndDrop";
import {useTags} from "./useTags";

export const useUpload = () => {
  const { image, isFetching, isSuccess, uploadImage, resetUploadFileState } =
    useFileUpload();
  const { tags, handleTagsChange, resetTags } = useTags();

  const { getRootProps, getInputProps, isDragActive } =
    useDragAndDrop((file) => uploadImage(file, tags));

  const resetUploadState = () => {
    resetUploadFileState();
    resetTags();
  }

  return {
    image,
    isFetching,
    isSuccess,
    getRootProps,
    getInputProps,
    isDragActive,
    resetUploadState,
    tags,
    handleTagsChange
  };
};
