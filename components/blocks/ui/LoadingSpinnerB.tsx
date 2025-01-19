

// import "./ui.css";
/**
 * == [ loading spinner ]
 * 
 * == == == == == == == == == */
export type Spinner_props = {
   color?: string;
};
export function LoadingSpinnerB( { ...props }: Spinner_props ) {
   
   return(
      <div className="flex items-center justify-center text-rose-400" >
         <div
            // className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#fa0] border-e-transparent border-s-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
            style={ props.color ? { color: props.color  } : {} }
         >
            {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            </span> */}
         </div>
      </div>
   );
}