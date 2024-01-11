'use client'

import InputWithLabel from "@/app/components/InputWithLabel";
import Button from "@/app/components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddNewCategory } from "@/libs/actions/category";

const schema = yup
  .object({
    title: yup.string().min(3).required(),
    // image: yup.mixed().required("File is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;



const AddCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
    const onSubmitHandler = (data: FormData) => {
      // console.log(data.image);
      

      // const formData = new FormData()
      // for (const key in data) {
      //   if (key === "image") {
      //     const image = data[key];
      //       formData.append("image", image);
      //   } else {
      //     formData.append(key, data[key]);
      //   }
      // }
    }
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold mb-6">Add Category</h2>
      <form className="max-w-xl p-10 shadow-lg mx-auto border border-neutral-200 space-y-2"
      action={AddNewCategory}
      >
        <InputWithLabel type="text"  {...register("title")}/>
        <p>{errors.title?.message}</p>


        <input type="file"  id="category_image" {...register("image")} />
        <p>{errors.image?.message}</p>
        <Button  title="Add" className="py-2 px-4 block mx-auto border" />


      </form>


    </section>
  );
};

export default AddCategory;



// <form action={AddNewCategory}>
// <input type="text" name="title" />
// <button type="submit">submit</button>
// </form>