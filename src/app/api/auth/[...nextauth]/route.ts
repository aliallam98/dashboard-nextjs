import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../libs/MongoAdaptor"


const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
  providers:[
    GoogleProvider({
        clientId: `${process.env.GOOGLE_ID}` ,
        clientSecret: `${process.env.GOOGLE_SECRET}` ,
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Email", type: "email", placeholder: "Ali Allam" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            console.log(credentials);

          
    
          // If no error and we have user data, return it
        //   if (res.ok && user) {
        //     return user
        //   }
          // Return null if user data could not be retrieved
          return null
        }
      })
  ]
})

export { handler as GET, handler as POST }











//In Case We Use Backend Not Server Actions 
// const res = await fetch("/your/endpoint", {
//     method: 'POST',
//     body: JSON.stringify(credentials),
//     headers: { "Content-Type": "application/json" }
//   })
//   const user = await res.json()