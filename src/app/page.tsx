'use client';

import Gallery from '@/components/gallery/Gallery';
import GalleryModal from '@/components/gallery/GalleryModal';
import useGallery from '@/hooks/useGallery';

export default function Home() {
  const { openModal, selectedItem, closeModal } = useGallery();
  return (
    <div>
      <Gallery openModal={openModal} />
      <GalleryModal selectedItem={selectedItem} closeModal={closeModal}/>
    </div>
  );
}
