

import Appbar from "../blocks/ui/AppBar";


export type AppBar_props = {
   children?: React.ReactNode;
};

export default function AppBar( { ...props }: AppBar_props ) {
   return( <>
      <Appbar className="sticky top-0 left-0 bg-[#296cb8]" height="81px"></Appbar>
   </> );
}