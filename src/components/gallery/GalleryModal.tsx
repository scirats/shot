import React from "react";
import PreviewImage from "@/components/shared/PreviewImage";
import InputLink from "@/components/shared/inputLink";
import { ImageData } from "@/types/ImageData"; 

interface GalleryModalProps {
  selectedItem: ImageData | null;
  closeModal: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedItem,
  closeModal,
}) => (
  <>
    {selectedItem && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-winterduvet p-6 w-96 relative">
          <button
            onClick={closeModal}
            className="bg-winterduvet border-0 absolute top-2 right-2 text-gray-400"
          >
            ✕
          </button>

          <div className="mb-4">
            <PreviewImage imageUrl={selectedItem.url} />
          </div>

          <div className="mb-4">
            <InputLink url={selectedItem.url} />
          </div>

          {selectedItem.tags && selectedItem.tags.length > 0 && (
            <p className="text-sm text-gray-500">
              Tags: {selectedItem.tags.join(", ")}
            </p>
          )}
        </div>
      </div>
    )}
  </>
);

export default GalleryModal;
