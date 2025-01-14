import { useState } from "react";

export function useTags() {
  const [tags, setTags] = useState<string[]>([]);

  const handleTagsChange = (input: string) => {
    const parsedTags = input
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    setTags(parsedTags);
  };

  const resetTags = () => {
    setTags([]);
  };

  return {
    tags,
    handleTagsChange,
    resetTags,
  };
}
