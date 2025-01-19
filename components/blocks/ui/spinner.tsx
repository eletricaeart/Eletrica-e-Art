

// import "./css/spinner.css";
import React from "react";


export type Spinner_props = {
   size?: string;
   color?: string;
   width?: string;
};

export default function Spinner( { ...props }: Spinner_props ) {
   return( <>
      <div className="loading_spinner relative w-full h-full animate-spin z-10 bg-[#29f0] flex items-center justify-center text-center">
         <div className={`spinner w-[${ props.size || "2/4" }] h-[${ props.size || "2/4" }] rounded-full border-solid border-[#0001] border-t-[ ${ props.color || "#369" } ]`}
            style={{ borderWidth: props.width || "4px" }}
         />
      </div>
   </> );
}
// `
// .spinner {
//    width: 50px;
//    height: 50px;
//    border: 8px solid rgba(0, 0, 0, 0.2);
//    border-top-color: #369;
//    border-radius: 50%;
//    animation: spin 1s linear infinite;
// }

// @keyframes spin {
//    0% {
//       transform: rotate(0deg);
//    }
//    100% {
//       transform: rotate(360deg);
//    }
// }
// `