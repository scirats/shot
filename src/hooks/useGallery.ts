import {useState} from "react";

interface GalleryModalState {
  selectedItem: string | null;
  openModal: (item: string) => void;
  closeModal: () => void;
}

export default function useGallery(): GalleryModalState {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const openModal = (item: string) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return {
    selectedItem,
    openModal,
    closeModal,
  };
}
