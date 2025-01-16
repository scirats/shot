import { ImageData } from "@/types/ImageData";
import { httpRequest } from "@/utils/httpRequest";

export const fetchImages = (): Promise<ImageData[]> => {
  return httpRequest<ImageData[]>("/api/images", {
    method: "GET",
  });
};
