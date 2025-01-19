

import React from "react";
import { Avatar as AvatarShad, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export type Avatar_props = {
   img?: string;
   fallBack?: string | React.ReactNode;
   bg?: string;
   bgLinear?: string;
   size?: string;
};
export function Avatar( { ...props }: Avatar_props ) {
   return( <>
      <AvatarShad style={{ width: props.size || undefined, height: props.size || undefined, }}>
         <AvatarImage src={ props.img } />
         <AvatarFallback 
            style={{
               backgroundImage: props.bgLinear || undefined,
               backgroundColor: props.bg || undefined,
            }}
         >
            { props.fallBack }
         </AvatarFallback>
      </AvatarShad>
   </> );
}
