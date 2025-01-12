import React from "react";

type DropzoneProps = {
  getRootProps: () => any;
  getInputProps: () => any;
  isActive: boolean;
};

const Dropzone = ({ getRootProps, getInputProps, isActive }: DropzoneProps) => (
  <div
    {...getRootProps()}
    className={`text-center border-dashed border-2 p-4 w-full h-32 flex items-center justify-center ${
      isActive ? "border-valleyoftears bg-valleyoftears" : "border-gray-300"
    }`}
  >
    <input {...getInputProps()} />
    <p className="text-sm text-gray-500">
      {isActive
        ? "Drop the image here ..."
        : "Drag 'n' drop your image here, or click to select files"}
    </p>
  </div>
);

export default Dropzone;
