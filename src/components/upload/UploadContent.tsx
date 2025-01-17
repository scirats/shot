import ModalContent from "../shared/ModalContent";
import Dropzone from "./Dropzone";

type UploadContentProps = {
  isFetching: boolean;
  isSuccess: boolean;
  image: { secure_url: string } | null;
  getDropzoneProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
  tags: string[];
  onTagsChange: (input: string) => void;
};

const UploadContent = ({
  isFetching,
  isSuccess,
  image,
  getDropzoneProps,
  getInputProps,
  isDragActive,
  tags,
  onTagsChange,
}: UploadContentProps) => {
  if (isFetching) {
    return (
      <div className="text-center">
        <p>Uploading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {isSuccess ? (
        <div className="text-center font-semibold">
          <p className="mb-4">Uploaded Successfully!</p>
          {image &&  
            <ModalContent url={image.secure_url} tags={tags}></ModalContent>
          }
        </div>
      ) : (
        <>
          <h2 className="font-semibold">Upload your image</h2>
          <p className="text-sm text-gray-500">File should be Jpeg, Png</p>
          <Dropzone
              getRootProps={getDropzoneProps}
              getInputProps={getInputProps}
              isActive={isDragActive}
          />
          <div className="flex">
            <p className="p-2">Tags:</p>
            <input
              type="text"
              placeholder="nature, animals..."
              onChange={e => onTagsChange(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UploadContent;
