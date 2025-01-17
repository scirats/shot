import React, { useEffect, useState } from 'react';
import {useUpload} from '@/hooks/upload/useUpload';
import UploadContent from './UploadContent';
import ModalContainer from '../shared/ModalContainer';

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
    <ModalContainer closeModal={closeModal}>
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
  </ModalContainer>
  );
};

export default UploadModal;
