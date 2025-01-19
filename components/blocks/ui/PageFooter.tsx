

import '@/lib/theme/globals.css';
import './css.css';
import Link from "next/link";


export interface PageFooter_i {

};
export default function PageFooter( props: PageFooter_i ) {
   return( <>
      <section className="page-footer">

         {/* <div className="bottom">Copyright 2024 © NadiaFans</div> */}
      </section>
      <footer className="main-footer">
         <div className="bottom">
            Copyright 2024 © NadiaFans
            <div className="center">
               <Link href={'/politicas/termos-e-condicoes'}>termos | privacidade</Link>
            </div>
         </div>
      </footer>
   </> );
}