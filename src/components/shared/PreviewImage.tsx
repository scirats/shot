type PreviewImageProps = {
  imageUrl: string;
};

const PreviewImage = ({imageUrl}: PreviewImageProps) => (
  <div className="w-full h-80 flex justify-center items-center">
    <img
      src={imageUrl}
      alt="Preview"
      className="max-h-50 object-contain border"
    />
  </div>
);

export default PreviewImage;
