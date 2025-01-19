

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import FullscreenZoomableImage from "./FullscreenZoomableImage"

// In a real application, replace these with actual image URLs
// const images = [
//   '/placeholder.svg?height=400&width=600',
//   '/placeholder.svg?height=400&width=600&text=Image+2',
//   '/placeholder.svg?height=400&width=600&text=Image+3',
// ]

export type MidiaSlider_props = {
   userName: string | React.ReactNode;
   images: string[];
};
// export default function MidiaCard({ userName }: { userName: string }) {
export default function MidiaSLider( { ...props }: MidiaSlider_props ) {
   const 
      [ CurrentMidiaIndex, setCurrentMidiaIndex ] = useState( 0 )
      ,
      [ IsLoading, setIsLoading ] = useState( false )
   ;

   const 
      Options = {
         goToPreviousImage: () => {
            setIsLoading( true );
            setCurrentMidiaIndex( prevIndex => 
               prevIndex > 0 ? prevIndex - 1 : props.images.length - 1
            );
         }
         ,
         goToNextImage: () => {
            setIsLoading( true );
            setCurrentMidiaIndex( prevIndex => 
               prevIndex < props.images.length - 1 ? prevIndex + 1 : 0
            );
         }
         ,
         handleImageLoad: () => {
            setIsLoading( false );
         }
      }
   ;
  return( <>
      <Card className="w-full max-w-md mx-auto overflow-hidden rounded-lg">
         <CardHeader className="h-[81px] flex items-center justify-center bg-primary text-primary-foreground">
         <h2 className="text-2xl font-bold">{ props.userName }</h2>
         </CardHeader>
         <CardContent className="p-0 relative">
         <div className="relative aspect-[3/2]"
            style={{
               backgroundImage: `url( "${ props.images[CurrentMidiaIndex] }" )`,
               backgroundColor: "#fff5",
               backgroundBlendMode: "overlay",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
         >
            {
               IsLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10"
                  >
                     <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
               )
            }
            {/* <img
               src={ props.images[CurrentMidiaIndex] }
               alt={`Image ${CurrentMidiaIndex + 1}`}
               className="w-auto h-full mx-auto my-0 object-cover"
               onLoad={ Options.handleImageLoad }
            /> */}
            <FullscreenZoomableImage
               // src="/placeholder.svg?height=300&width=400"
               src={ props.images[CurrentMidiaIndex] }
               alt={`Image ${CurrentMidiaIndex + 1}`}
               // className="w-full max-w-md mx-auto"
               className="w-auto h-full mx-auto my-0 object-cover"
               onLoad={ Options.handleImageLoad }
            />
         </div>
         <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={ Options.goToPreviousImage }
         >
            <ChevronLeft className="h-4 w-4" />
         </Button>
         <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={ Options.goToNextImage }
         >
            <ChevronRight className="h-4 w-4" />
         </Button>
         </CardContent>
      </Card>
   </> )
}

