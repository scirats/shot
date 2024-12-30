'use client';

import Gallery from '@/components/Gallery';
import Modals from '@/components/Modals';
import useModalState from '@/hooks/useModalState';

export default function Home() {
  const {
    selectedItem,
    isUploadOpen,
    openModal,
    closeModal,
    toggleUploadModal,
  } = useModalState();

  return (
    <div>
      <button onClick={toggleUploadModal}>Open upload modal</button>
      <Gallery openModal={openModal} />
      <Modals
        selectedItem={selectedItem}
        isUploadOpen={isUploadOpen}
        closeModal={closeModal}
        toggleUploadModal={toggleUploadModal}
      />
    </div>
  );
}
