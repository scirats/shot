import {UploadResponse} from "@/types/upload";
import {httpRequest} from "@/utils/httpRequest";

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return httpRequest<UploadResponse>("/api/upload", {
    method: "POST",
    body: formData,
  });
};
