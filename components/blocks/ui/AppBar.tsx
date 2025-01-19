
// pn dlx shadcn@latest avatar
// 'use client';
// css
import "./ui.css";
// midias 
import secureLocalStorage from "react-secure-storage";


type AppBarProps = {
   title?: string;
   children?: React.ReactNode;
   height?: string;
   bg?: string;
   relative?: boolean;
   absolute?: boolean;
   fixed?: boolean;
   className?: string;
}

export default function AppBar( { ...props }: AppBarProps ) {
   return( <>
      <nav style={{ background: props?.bg }} className={ 
         `w-full h-[${ props.height }] ${ props.className }`
         + 
         ` ${ props.relative ? 'relative' : '' }` 
         + 
         ` ${ props.absolute ? 'absolute' : '' }` 
         + 
         ` ${ props.fixed ? 'fixed' : '' }` 
      }>
         { props.children }
      </nav>
   </> );
}