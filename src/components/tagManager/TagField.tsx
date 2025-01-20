import TagInputField from "./TagInputField";
import TagList from "./TagList";

interface TagFieldProps {
  tags: string[];
  maxTags: number;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TagField = ({
  tags,
  removeTag,
  maxTags,
  inputValue,
  onInputKeyDown,
  onInputChange,
}: TagFieldProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <TagInputField
        inputValue={inputValue}
        maxTags={maxTags}
        tags={tags}
        onInputChange={onInputChange}
        onInputKeyDown={onInputKeyDown}
      />
      <TagList tags={tags} onRemove={removeTag} />
    </div>
  );
};

export default TagField;
