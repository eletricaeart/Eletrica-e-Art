

// app/auth/actions/client/authHandler_Btn.tsx
"use client";
import { LoginWithGithub, LoginWithGoogle, LogOut } from "@/app/auth/actions/server/authActions";
// import { Btn } from "@/packages/components/widgets/ui/Btn";


export type AuthHandler_Btn_props = {
   type: "google" | "github" | "logout";
}
export default function AuthHandler_Btn( { type }: AuthHandler_Btn_props ) {
   return( <>
      {
         type == "github" ? (
            // <Btn 
            //    label={ "sign in with Github" } 
            //    onClick={ LoginWithGithub }
            // />
            <button 
               // label={ "sign in with Github" } 
               onClick={ LoginWithGithub }
            >sign in with Github</button>
         ) : type == "google" ? (
            // <Btn 
            //    label={ "sign in with Google" } 
            //    onClick={ LoginWithGoogle }
            // />
            <button 
               // label={ "sign in with Google" } 
               onClick={ LoginWithGoogle }
            >sign in with Google</button>
         ) : (
            // <Btn 
            //    label={ "logout" } 
            //    onClick={ LogOut }
            // />
            <button 
               // label={ "logout" } 
               onClick={ LogOut }
            >logout</button>
         )
      }
   </> );
}