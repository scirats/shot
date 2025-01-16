'use client';

import Gallery from '@/components/gallery/Gallery';
import GalleryModal from '@/components/gallery/GalleryModal';
import useGalleryModal from '@/hooks/gallery/useGalleryModal';

export default function Home() {
  const { openModal, selectedItem, closeModal } = useGalleryModal();
  return (
    <div>
      <Gallery openModal={openModal} />
      <GalleryModal selectedItem={selectedItem} closeModal={closeModal}/>
    </div>
  );
}
