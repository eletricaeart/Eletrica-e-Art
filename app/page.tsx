

// templatePage.tsx
import Link from "next/link";
import AuthHandler_Btn from "./auth/actions/client/authHandler_Btn";
import { auth } from "./api/auth";
import AppBar from "@/components/EA/appbar";


export default async function HomePage() {
   const 
      session = await auth()
   ;
   
   return( <>
      <main className="relative w-full min-h-[100dvh] bg-slate-950">
         <AppBar />
         {/* <section relative title="oi" height="81px" className="bg-[#da2070]"> */}
         <section className="bg-[#da2070]">
            {
               session?.user ? ( <>
                  {/* <Avatar img={ session.user.image! } fallBack={ <Text align="center" weight="700">céo</Text> }/> */}
                  <section className="">oi { session.user.name }</section>
                  <img src={ session.user.image! } alt="" className="rounded-full" width={46} height={46}/>
                  <AuthHandler_Btn type="logout"/>
               </> ) : ( <>
                  <section>
                     <p className="text-white">not signed</p>
                     <AuthHandler_Btn type="github"/>
                     <AuthHandler_Btn type="google"/>
                  </section>
               </> )
            }
         </section>
         <section>
            { 
               session?.user && "oi"
            }
            <Link href={ '/user' } className="text-white">user</Link>
         </section>
      </main>
   </> );
}