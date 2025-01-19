

// app/auth/actions/server/authActions.tsx
"use server";
import { signIn, signOut } from "../../../api/auth"; 


export async function LoginWithGithub() {
   await signIn(
      "github",
      { redirectTo: "/" }
   );
}
export async function LoginWithGoogle() {
   await signIn(
      "google",
      { redirectTo: "/" }
   );
}

export async function LogOut() {
   await signOut(
      { redirectTo: "/" }
   );
}