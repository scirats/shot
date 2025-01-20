import { ChangeEvent, KeyboardEvent, useState } from "react";

export const useTagField = (
  tags: string[],
  maxTags: number,
  addTag: (tag: string) => void
) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (inputValue.length <= 12 && tags.length < maxTags) {
        addTag(inputValue.trim());
        setInputValue("");
      }
    }
  };

  return {
    inputValue,
    handleInputChange,
    handleInputKeyDown,
  };
};
