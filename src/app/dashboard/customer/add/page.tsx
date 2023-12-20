import InputWithLabel from '@/app/components/InputWithLabel';
import Button from "@/app/components/Button";
import MultiInput from '@/app/components/MultiInput';


const AddCustomer = () => {
  return (
    <section>
      <h2 className='text-center text-3xl font-semibold mb-6'>Add Customer</h2>
      <form className='max-w-xl p-10 shadow-lg mx-auto border border-neutral-200 space-y-6'>
        {/* User Name Input */}
        <InputWithLabel
        type="text"
        label='Name'
        name='name'
        />
        {/* Address Input */}
        <InputWithLabel
        type="text"
        label='Address'
        name='address'
        />
        <InputWithLabel
        type="text"
        label='Email'
        name='email'
        />
        {/* Status Select */}
          <div className="relative">
            <select
              id="user_status"
              className="block w-[230px] border border-neutral-200 p-2"
            >
              <option value="">Select</option>
              <option value="For Rent">Active</option>
              <option value="For Sale">Blocked</option>
            </select>
            <label
              htmlFor="user_status"
              className="capitalize absolute left-6 -top-[12px] bg-white border-x-4 border-white"
            >
              Status
            </label>
          </div>
        {/* Phone Input */}
        <MultiInput
        placeholder='Enter Phone Numbers'
        />
        {/* Email Input */}
        <Button
        title="Add"
        className="py-2 px-4 block mx-auto border"
        />
      </form>
    </section>
  );
};

export default AddCustomer;
