'use client';

import useTagInput from '@/hooks/tagInput/useTagInput';
import TagInput from './TagInput';

const FormTagInput = () => {
  const MAX_TAGS = 5;
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS);
  const handleSubmit = () => {
    // To-do: Handle the submit
    console.log(tags);
  }

  return (
    <section className='bg-winterduvet mb-4 p-4 gap-y-4'>
      <h2 className='text-xl font-black mb-4'>Shot is a place to upload and share your images.</h2>
      <p className='mb-1'>Search your images by tag</p>
      <form className='flex flex-col'>
        <TagInput 
          tags={tags}
          addTag={handleAddTag}
          removeTag={handleRemoveTag}
          maxTags={MAX_TAGS}
        />
        <button
          onClick={handleSubmit}
          className='mt-4 w-32'
        >
          Submit Tags
        </button>
      </form>
    </section>
  )
};

export default FormTagInput;
