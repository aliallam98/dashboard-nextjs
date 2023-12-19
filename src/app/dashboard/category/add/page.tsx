import React from "react";
import InputWithLabel from '@/app/components/InputWithLabel';
import Button from "@/app/components/Button";


const AddCategory = () => {
  return (
    <section>
      <h2 className='text-center text-3xl font-semibold'>Add Category</h2>
      <form className='max-w-xl p-10 shadow-lg mx-auto border border-neutral-200'>
        <InputWithLabel
        label='Title'
        name='title'
        />
        <input type="file" name="category_image" id="category_image" />
        <Button
        title="Add"
        className="py-2 px-4 block mx-auto border"
        />
      </form>
    </section>
  );
};

export default AddCategory;
