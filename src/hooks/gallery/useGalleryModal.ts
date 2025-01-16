import {useState} from "react";
import { ImageData } from "@/types/ImageData";

interface GalleryModalState {
  selectedItem: ImageData | null;
  openModal: (item: ImageData) => void;
  closeModal: () => void;
}

export default function useGalleryModal(): GalleryModalState {
  const [selectedItem, setSelectedItem] = useState<ImageData | null>(null);

  const openModal = (item: ImageData) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return {
    selectedItem,
    openModal,
    closeModal,
  };
}
