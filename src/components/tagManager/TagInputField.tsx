import { ChangeEvent, FC, KeyboardEvent } from "react";

interface TagInputFieldProps {
  inputValue: string;
  maxTags: number;
  tags: string[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TagInputField: FC<TagInputFieldProps> = ({
  inputValue,
  maxTags,
  tags,
  onInputChange,
  onInputKeyDown,
}) => {
  return (
    <input
      type="text"
      name="keyword_tags"
      placeholder={
        tags.length < maxTags
          ? "Press enter to add"
          : `Max. of ${maxTags} tags reached`
      }
      className={`w-64 h-10 md:w-96 border px-4 py-2 mr-4 ${
        tags.length === maxTags ? "bg-gray-200" : ""
      }`}
      value={inputValue}
      onChange={onInputChange}
      onKeyDown={onInputKeyDown}
      disabled={tags.length === maxTags}
    />
  );
};

export default TagInputField;
