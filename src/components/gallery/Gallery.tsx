import React from 'react';

interface GalleryProps {
  openModal: (item: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ openModal }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => openModal(item)}
          className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-6 text-center"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
