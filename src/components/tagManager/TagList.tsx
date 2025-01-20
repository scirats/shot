import {FC} from "react";

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

const TagList : FC<TagListProps> = ({tags, onRemove}) => {
  return (
    <div>
       {tags.map((tag, index) => (
         <span key={`${index}-${tag}`}
         className="inline-flex px-2 py-1 border rounded-3xl text-sm bg-gray-200 mr-2 mt-1"
         >
          {tag}
          <button
            className="border-0 pl-2 p-0"
            onClick={() => onRemove(tag)}
            title={`Remove ${tag}`}
          >
            &times;
          </button>
         </span>
       ))}
    </div>
  );
};

export default TagList;
