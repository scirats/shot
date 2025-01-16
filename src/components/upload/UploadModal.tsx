import React, { useEffect, useState } from 'react';
import {useUpload} from '@/hooks/upload/useUpload';
import UploadContent from './UploadContent';

const UploadModal: React.FC = () => {
  const {
    image,
    isFetching,
    isSuccess,
    getRootProps,
    getInputProps,
    isDragActive,
    resetUploadState,
    tags,
    handleTagsChange
  } = useUpload();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen && isSuccess) {
      resetUploadState();
    }
  }, [isOpen, isSuccess, resetUploadState]);

  if (!isOpen) return <button onClick={openModal}>Upload image</button>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-winterduvet w-96 p-6 relative">
        <button onClick={closeModal} className="bg-winterduvet border-0 absolute top-2 right-2 text-gray-400">
            ✕
        </button>
        <UploadContent
            image={image}
            isFetching={isFetching}
            isSuccess={isSuccess}
            getDropzoneProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            tags={tags}
            onTagsChange={handleTagsChange}
        />
      </div>
    </div>
  );
};

export default UploadModal;
