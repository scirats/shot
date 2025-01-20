'use client';

import useTagInput from '@/hooks/tagManager/useTagInput';
import TagField from './TagField';
import {useTagField} from '@/hooks/tagManager/useTagField';
import {FormEvent} from 'react';

const FormTagInput = () => {
  const MAX_TAGS = 5;
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS);
  const { inputValue, handleInputChange, handleInputKeyDown } = useTagField(tags, MAX_TAGS, handleAddTag);

  const handleSubmit = (e: FormEvent) => {
    // To-do: Handle the submit
    e.preventDefault();
    console.log(tags);
  }

  return (
    <section className='bg-winterduvet mb-4 p-4 gap-y-4'>
      <h2 className='text-xl font-black mb-4'>Shot is a place to upload and share your images.</h2>
      <p className='mb-1'>Search your images by tag</p>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <TagField 
          tags={tags}
          maxTags={MAX_TAGS}
          addTag={handleAddTag}
          removeTag={handleRemoveTag}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onInputKeyDown={handleInputKeyDown}
        />
        <button
          className='mt-4 w-32'
          type='submit'
        >
          Submit Tags
        </button>
      </form>
    </section>
  )
};

export default FormTagInput;
