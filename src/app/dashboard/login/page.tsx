"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import InputWithLabel from "@/app/components/InputWithLabel";
import { useState } from "react";

const Login = () => {
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>{session?.user?.name}</h1>
        <button onClick={()=>signOut()}>LogOut</button>
      </>
    )
  }

  const onSubmitHandler = (e:React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  return (
    <section className='p-10'>
      <h2 className='text-center font-semibold text-2xl'>Login</h2>
      <form className='max-w-lg py-10 px-5 mx-auto shadow-md border border-neutral-200'
      onSubmit={onSubmitHandler}
      >
        <InputWithLabel
        type='input'
        label='Email'
        name='email'
        onChange={(e)=>setUser({
          ...user,
          [e.target.name] : e.target.value
        })}
        />
        <InputWithLabel
        type='password'
        label='Password'
        name='password'
        />
        <button type='submit' className='block mx-auto py-2 px-4 bg-black text-white font-medium'
        onClick={()=>signIn("credentials",{...user})}
        >Login</button>
        <button type='submit' className='block mx-auto py-2 px-4 bg-black text-white font-medium'
        onClick={()=>signIn("google",{callbackUrl:"/dashboard"})}
        >Google</button>
      </form>
    </section>
  )
};

export default Login;
