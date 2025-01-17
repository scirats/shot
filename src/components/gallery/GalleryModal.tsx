import React from "react";
import { ImageData } from "@/types/ImageData";
import ModalContainer from "../shared/ModalContainer";
import ModalContent from "../shared/ModalContent";

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
      <ModalContainer closeModal={closeModal}>
        <ModalContent
          url={selectedItem.url}
          tags={selectedItem.tags}
        ></ModalContent>
      </ModalContainer>
    )}
  </>
);

export default GalleryModal;
