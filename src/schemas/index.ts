"use client"
 
import * as z from "zod"
 
export const categorySchema = z.object({
  title: z.string().min(2,{
    message:"Minium Chars Is 2"
  }).max(50,{
    message:"Maximum Chars Is 50"
  }),
})