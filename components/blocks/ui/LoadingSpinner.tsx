

// import "./ui.css";

export type View_props = {
   children?: React.ReactNode;
   className?: string;
   bg?: string;
   bgLinear?: string;
   pd?: string;
   mg?: string;
   gap?: string;
   border?: string;
   radius?: string;
   flex?: number;
   width?: string;
   height?: string;
   onPress?: () => void;
   opacity?: number;
   align?: "normal" | "left" | "right" | "center" | "justify" | "stretch";
   justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
};
export function View( { ...props }: View_props ) {
   return( <>
      <div className={ props.className || "" }
         style={{
            display: "flex",
            flexDirection: "column",
            flex: props.flex || "unset",
            backgroundColor: props.bg || "default",
            backgroundImage: props.bgLinear || "default",
            padding: props.pd || 0,
            margin: props.mg || 0,
            gap: props.gap || 0,
            border: props.border || "",
            borderRadius: props.radius || "",
            width: props.width || "100%",
            height: props.height || "auto",
            opacity: props.opacity || 1,
            alignItems: props.align || "normal",
            justifyContent: props.justify || "flex-start",
         }}
         onClick={ props.onPress }
      >
         { props.children }
      </div>
   </> );
}

export type Text_props = View_props & {
   color?: string;
   size?: string;
   weight?: string;
   align?: "left" | "right" | "center" | "justify" | "initial" | "unset";
};
export function Text( { ...props }: Text_props ) {
   return( <>
      <p className={ props.className || "" }
         style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: props.bg || "default",
            backgroundImage: props.bgLinear || "default",
            padding: props.pd || 0,
            margin: props.mg || 0,
            gap: props.gap || 0,
            width: props.width || "100%",
            height: props.height || "auto",
            opacity: props.opacity || 1,
            fontSize: props.size || ".75em",
            color: props.color || "#333",
            fontWeight: props.weight || 500,
            textAlign: props.align || "left",
            
            flex: props.flex || "unset",
            border: props.border || "",
            borderRadius: props.radius || "",
            alignItems: props.align || "normal",
            justifyContent: props.justify || "flex-start",
         }}
         onClick={ props.onPress }
      >
         { props.children }
      </p>
   </> );
}





/**
 * == [ loading spinner ]
 * 
 * == == == == == == == == == */
export type Spinner_props = {
   color?: string;
};
export function LoadingSpinner( { ...props }: Spinner_props ) {
   
   return(
      <div className="flex items-center justify-center text-rose-400" >
         <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
            style={ props.color ? { color: props.color  } : {} }
         >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
               Loading...
            </span>
         </div>
      </div>
   );
}