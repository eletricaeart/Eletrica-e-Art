

// yarn add react-secure-storage
'use client';
import secureLocalStorage from "react-secure-storage";


/**
 * @description react-secure-storage
 * 
 * -- encripted localStorage
 */
const 
   cstore = {
      // save: async ( { name, data }: { name: string; data: any; } ) => {
      save: ( { ...props }: { name: string; data: any; } ) => {
         const 
            json = JSON.stringify( props.data )
         ;
         secureLocalStorage.setItem( props.name, json );
      }
      ,
      saveAsync: async ( { ...props }: { name: string; data: any; } ) => {
         const 
            json = JSON.stringify( props.data )
         ;
         secureLocalStorage.setItem( props.name, json );
      }
      ,
      get: ( name: string ) => {
         const 
            json: any = secureLocalStorage.getItem( name )
            ,
            data = JSON.parse( json )   
         ;
         return data;
         // const username = secureLocalStorage.getItem('username') as string;
         // const password = secureLocalStorage.getItem('password') as string;
      }
      ,
      getAsync: async ( name: string ) => {
         const 
            json: any = secureLocalStorage.getItem( name )
            ,
            data = JSON.parse( await json )   
         ;
         return await data;
      }
      ,
      remove: ( name: string ) => {
         secureLocalStorage.removeItem( name );
      }
   }
;

export default cstore;