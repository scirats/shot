import {UploadRequest, UploadResponse} from "@/types/upload";
import {httpRequest} from "@/utils/httpRequest";

export const uploadFile = ({ file, tags }: UploadRequest) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("tags", JSON.stringify(tags));

  return httpRequest<UploadResponse>("/api/upload", {
    method: "POST",
    body: formData,
  });
};
