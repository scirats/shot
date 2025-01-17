import React, { ChangeEvent, useState } from 'react';

interface inputTag {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  maxTags: number;
}


const TagInput = ({ tags, addTag, removeTag, maxTags}: inputTag) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        userInput.trim() !== "" &&
        userInput.length <= 12 &&
        tags.length < maxTags
      ) {
        addTag(userInput);
        setUserInput("");
      }
    }
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <input
        type="text"
        name="keyword_tags"
        placeholder={
          tags.length < maxTags
          ? "Press enter to add"
          : `Max. Of ${maxTags} tags`
        }
        className='w-64 h-10 md:w-96 border border-gray-300 px-4 py-2 mr-4'
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags}
      />
      <div>
        {tags.map((tag: string, index: number) => (
          <span
            key={`${index}-${tag}`}
            className='inline-flex px-2 py-1 border border-gray-400 rounded-3xl text-sm bg-valleyoftears mr-2 mt-1'
          >
            {tag}
            <button 
              className='border-0 pl-2 p-0'
              onClick={() => removeTag(tag)}
              title={`Remove ${tag}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
