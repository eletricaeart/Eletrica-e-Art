

// app/api/auth.ts
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
// import { PrismaClient } from "@prisma/client"; 
// import { PrismaAdapter } from "@auth/prisma-adapter";


// const 
// prisma = new PrismaClient()
// ;
export const { auth, handlers, signIn, signOut, } = NextAuth( {
   providers: [ 
      Github, 
      Google( {
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      } ), 
      Facebook( {
         clientId: process.env.FACEBOOK_CLIENT_ID,
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      } ),
   ],
   // adapter: PrismaAdapter( prisma )
} );