"use server"

export const AddNewCategory =  async (formData:FormData)=>{
    console.log(formData);
    console.log(formData.get("title"));
    console.log(formData.get("image"));
    
}