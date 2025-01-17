interface ModalContainerProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-winterduvet w-96 p-6 relative">
        <button
          onClick={closeModal}
          className="bg-winterduvet border-0 absolute top-2 right-2 text-gray-400"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
