import InputWithLabel from '@/app/components/InputWithLabel';
import Button from "@/app/components/Button";


const AddOrder = () => {
  return (
    <section>
      <h2 className='text-center text-3xl font-semibold mb-6'>Add Category</h2>
      <form className='max-w-xl p-10 shadow-lg mx-auto border border-neutral-200 space-y-2'>
        {/* User Name Input */}
        <InputWithLabel
        type="text"
        label='Name'
        name='name'
        />
        {/* Price Input */}
        <InputWithLabel
        type="text"
        label='Price'
        name='price'
        />
        {/* Main Image */}
        <input type="file" name="main_image" id="main_image" accept='image/*'/>
        {/* Sub Images */}
        <input type="file" name="sub_images" id="sub_images" accept='image/*' multiple />
        {/* OnSale Select */}
          <div className="relative">
            <select
              id="is_on_sale"
              className="block w-[230px] border border-neutral-200 p-2"
            >
              <option value="">Select</option>
              <option value="">No</option>
              <option value="">Yes</option>
            </select>
            <label
              htmlFor="is_on_sale"
              className="capitalize absolute left-6 -top-[14px] bg-white border-x-4 border-white"
            >
              Is On Sale
            </label>
          </div>
        <Button
        title="Add"
        className="py-2 px-4 block mx-auto border"
        />
      </form>
    </section>
  );
};

export default AddOrder;
