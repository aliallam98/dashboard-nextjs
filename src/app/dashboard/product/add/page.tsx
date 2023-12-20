import InputWithLabel from "@/app/components/InputWithLabel";
import Button from "@/app/components/Button";

const AddProduct = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold mb-6">Add Product</h2>
      <form className="max-w-xl p-10 shadow-lg mx-auto border border-neutral-200 space-y-8">
        {/* User Name Input */}
        <InputWithLabel type="text" label="Name" name="name" />
        <div className="flex  gap-2">
          {/* Price Input */}
          <InputWithLabel type="text" label="Price" name="price" />
          {/* OnSale Select */}
          <div className="relative">
            <select
              id="is_on_sale"
              className="block w-[230px] border border-neutral-200 p-3"
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
        </div>

        {/* Image Div */}
        <div className="flex items-center">
          {/* Main Image */}
          <div className="flex flex-col">
          <label htmlFor="main_image">Main Image</label>
          <input type="file" name="main_image" id="main_image" />
          </div>
          {/* Sub Images */}
          <div className="flex flex-col">
          <label htmlFor="main_image">Sub Images(Max:5)</label>
          <input
            type="file" name="sub_images" id="sub_images" accept="image/*"
          />
          </div>

        </div>

        {/* Description Text Area */}
        <div className="relative">
          <textarea
            id="description"
            className="border border-neutral-200 focus:outline-none p-2 w-full resize-none"
          ></textarea>
          <label
            className="capitalize absolute left-6 -top-[14px] bg-white border-x-4 border-white"
            htmlFor={"description"}
          >
            description
          </label>  
        </div>

        <Button title="Add" className="py-2 px-4 block mx-auto border" />
      </form>
    </section>
  );
};

export default AddProduct;
