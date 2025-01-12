interface GalleryModalsProps {
  selectedItem: string | null;
  closeModal: () => void;
}

const GalleryModal: React.FC<GalleryModalsProps> = ( {selectedItem, closeModal }:  GalleryModalsProps) => (
  <>
    { selectedItem && (
      <div>
        <div>
          <p>Selected Item: {selectedItem}</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    )}
  </>
);

export default GalleryModal;
