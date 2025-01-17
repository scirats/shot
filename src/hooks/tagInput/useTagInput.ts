import { useEffect, useState } from "react";

const useTagInput = (maxTags: number = 5) => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    console.log(tags.length);
  }, []);

  const handleAddTag = (newTag: string) => {
    if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
      setTags([...tags, newTag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return { tags, handleAddTag, handleRemoveTag };
};

export default useTagInput;
