import {APIResponse, UploadRequest, UploadResponse} from "@/types/upload";
import {httpRequest} from "@/utils/httpRequest";

export const uploadFile = async ({ file, tags }: UploadRequest): Promise<APIResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("tags", JSON.stringify(tags));

  try {
    const response = await httpRequest<UploadResponse>("/api/upload", {
      method: "POST",
      body: formData,
    });

    return {
      success: true,
      data: {
        url: response.url,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
};
