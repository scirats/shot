import InputLink from "./inputLink";
import PreviewImage from "./PreviewImage";

interface ModalContentProps {
  url: string;
  tags: string[];
}

const ModalContent = ({ url, tags }: ModalContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <PreviewImage imageUrl={url} />
      <InputLink url={url} />

      {tags && tags.length > 0 && (
        <p className="text-sm text-gray-500">Tags: {tags.join(", ")}</p>
      )}
    </div>
  );
};

export default ModalContent;
