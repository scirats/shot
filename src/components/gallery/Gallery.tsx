import React from "react";
import useGallery from "@/hooks/gallery/useGallery";
import { ImageData } from "@/types/ImageData";

interface GalleryProps {
  openModal: (item: ImageData) => void;
}

const Gallery: React.FC<GalleryProps> = ({ openModal }) => {
  const { images, isLoading, error } = useGallery();

  if (isLoading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="masonry sm:masonry-sm md:masonry-md">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => openModal(image)}
          className="cursor-pointer bg-white hover:bg-gray-300 p-4 mb-4 text-center break-inside"
        >
          <img
            src={image.url}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
