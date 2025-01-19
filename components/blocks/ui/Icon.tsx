

import Image from "next/image";
import IconImg from "@/public/file.svg";
import _ from "@/lib/ceo";

type Icon_Props = {
   // img?: string;
   img?: {
      blurDataURL: null;
      blurHeight: number;
      blurWidth: number;
      height: number;
      src: string;
      width: number;
   };
   alt?: string;
   width?: number;
   height?: number;
   radius?: number;
   bg?: string;
   onPress?: () => void;
   id?: string;
   className?: string;
};
export default function Icon( { ...props }: Icon_Props ) {
   const 
      s = {
         placeholder: {
            // background: props
         },
      }
   ;
   _( {IconImg} );
   return( <>
      <div className={ props.className ? props.className + "Icon-placeholder" : "Icon-placeholder" } 
         id={ props.id ? props.id : "" }
         style={{
            background: props.bg || "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "55em",
            aspectRatio: 1,
            height: "100%",
            // padding: ".8em",
            padding: "0em",
            // position: "relative",
         }}
         onClick={ props.onPress }
      >
         {
            props.bg ? (
               <div className="IconHolder"
                  style={{
                     display: "flex",
                     // height: "90%",
                     height: "100%",
                     aspectRatio: 1,
                     position: "relative",
                     padding: ".5em",
                  }}
               >
                  {/* <Image alt={ props.alt || "icon" }
                     src={ props.img || 'file.svg' }
                     fill
                  /> */}
                  <img alt={ props.alt || "icon" }
                     src={ props.img!.src! || 'file.svg' }
                     style={{
                        width: "100%",
                        height: "100%",
                        color: "transparent",
                        position: "relative",
                     }}
                  />
               </div>
            ) : (
               // <Image alt={ props.alt || "icon" }
               //    src={ props.img || 'file.svg' }
               //    fill
               // />
               <img alt={ props.alt || "icon" }
                  src={ props.img!.src! || 'file.svg' }
                  style={{
                     width: "100%",
                     height: "100%",
                     color: "transparent",
                     position: "relative",
                  }}
               />
            )
         }
      </div>
   </> );
}
