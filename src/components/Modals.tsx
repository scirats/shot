import React from 'react';

interface ModalsProps {
  selectedItem: string | null;
  isUploadOpen: boolean;
  closeModal: () => void;
  toggleUploadModal: () => void;
}

const Modals: React.FC<ModalsProps> = ({
  selectedItem,
  isUploadOpen,
  closeModal,
  toggleUploadModal,
}) => (
  <>
    {selectedItem && (
      <div>
        <div>
          <p>Selected Item: {selectedItem}</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    )}

    {isUploadOpen && (
      <div>
        <div>
          <p>Upload Modal Open</p>
          <button onClick={toggleUploadModal}>Close upload modal</button>
        </div>
      </div>
    )}
  </>
)

export default Modals;
