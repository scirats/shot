import {useState} from "react";

interface ModalState {
  selectedItem: string | null;
  isUploadOpen: boolean;
  openModal: (item: string) => void;
  closeModal: () => void;
  toggleUploadModal: () => void;
}

export default function useModalState(): ModalState {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);

  const openModal = (item: string) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const toggleUploadModal = () => setIsUploadOpen((prev) => !prev);

  return {
    selectedItem,
    isUploadOpen,
    openModal,
    closeModal,
    toggleUploadModal
  };
}
