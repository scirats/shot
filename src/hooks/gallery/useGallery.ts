import { useState, useEffect } from "react";
import { fetchImages } from "@/services/imageService";
import { ImageData } from "@/types/ImageData";

interface UseGalleryState {
  images: ImageData[];
  isLoading: boolean;
  error: string | null;
}

export default function useGallery(): UseGalleryState {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (err: any) {
        setError(err.message || "Error loading images");
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  return {
    images,
    isLoading,
    error,
  };
}
