import InputLink from "../shared/inputLink";
import PreviewImage from "../shared/PreviewImage";
import Dropzone from "./Dropzone";

type UploadContentProps = {
  isFetching: boolean;
  isSuccess: boolean;
  image: { secure_url: string } | null;
  getDropzoneProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
};

const UploadContent = ({
  isFetching,
  isSuccess,
  image,
  getDropzoneProps,
  getInputProps,
  isDragActive,
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
          <p>Uploaded Successfully!</p>
          {image &&  
            <>
              <PreviewImage imageUrl={image.secure_url} /> 
              <InputLink url={image.secure_url} />
            </>
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
        </>
      )}
    </div>
  );
};

export default UploadContent;
