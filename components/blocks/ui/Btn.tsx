

import "./ui.css";

/**
 * Btn
 */

export type BtnProps = {
   label: string;
   onClick?: () => void;
   type?: 'button' | 'submit';
   bg?: string;
   id?: string;
   className?: string;
   size?: string;
   disabled?: boolean;
};

export function Btn( { ...props }: BtnProps ) {
   return( <>
      <div className="btn">
         <input className="" 
            value={ props.label }
            type={ props.type || "button" } 
            // { ...props }
            onClick={ props.onClick }
            disabled={ props.disabled ? true : false }
            style={{
               fontSize: props.size || "1.4em",
               // opacity: props.disabled ? ".3" : "1",
            }}
         />
      </div>
   </> );
}

/* const s = {
   .gradientBtn {
      background-image: linear-gradient(
         to right, #e64c93, #f7b5d4
      );
      border-radius: 55em;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 46px;
      gap: .5em;
      text-transform: uppercase;
      color: #fff;
      font-size: .8em;
      font-weight: 500;
   },
}; */