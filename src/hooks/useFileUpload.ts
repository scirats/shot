import {uploadFile} from "@/services/uploadService";
import {UploadResponse} from "@/types/upload";
import { useState } from "react";

export const useFileUpload = () => {
  const [image, setImage] = useState<UploadResponse | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const resetUploadState = () => {
    setImage(null);
    setIsFetching(false);
    setIsSuccess(false);
    setError(null);
  };

  const uploadImage = async (file: File) => {
    setIsFetching(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const data = await uploadFile(file);
      setImage(data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Upload failed:", error);
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsFetching(false);
    }
  };

  return {
    image,
    isFetching,
    isSuccess,
    uploadImage,
    resetUploadState,
    error,
  };
};
