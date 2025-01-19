

// import NextVideo from "next-video";
import Video from "next-video";
import Instaplay from 'player.style/instaplay/react';
import { transform } from "next/dist/build/swc/generated-native";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from 'react-player';
import Player from "./Player";
// css
import '@/lib/midias/player.css';
// midias
import LockedVidUrl from "@/public/pix/tests/locked-vid-overlay.webp";
import LockedVidBGUrl from "@/public/pix/tests/locked-vid-overlay1.webp";



/**
 * == [ CardSlider ]
 */
export type CardSlide_type = {
   url: string;
   isVideo: boolean;
}; 
type CardSliderProps = {
   slides: CardSlide_type[];
}
export function CardSlider( { ...props }: CardSliderProps ) {
   const 
      [ CurrentIndex, setCurrentIndex ] = useState<number>( 0 )
   ;
   const 
      s = {
         slider: {
            height: "100%",
            position: "relative",
         },
         slide: {
         },
         slide_pic: {
         },
         leftArrow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5px",
            position: "absolute",
            top: "50%",
            transform: "translate( 0, -50% )",
            left: "15px",
            fontSize: "45px",
            color: "#fff",
            zIndex: 1,
            cursor: "pointer",
            backgroundColor: "#fff1",
            filter: "drop-shadow(rgba(0, 0, 0 ) 0px 0px 0px)",
            borderRadius: "55em",
            aspectRatio: 1,
            width: "45px",
            height: "45px",
         },
         rightArrow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5px",
            position: "absolute",
            top: "50%",
            transform: "translate( 0, -50% )",
            right: "15px",
            fontSize: "45px",
            color: "#fff",
            zIndex: 1,
            cursor: "pointer",
            backgroundColor: "#fff1",
            filter: "drop-shadow(rgba(0, 0, 0 ) 0px 0px 0px)",
            borderRadius: "55em",
            aspectRatio: 1,
            width: "45px",
            height: "45px",
         },
      }
   ;

   const
      MoveSlide = {
         backwards: () => {
            const 
               isFirstSlidePic = CurrentIndex === 0
               ,
               nextIndex = isFirstSlidePic ? props.slides.length - 1 : CurrentIndex - 1
            ;
            setCurrentIndex( nextIndex );
         },
         foward: () => {
            const 
               isLastSlidePic = CurrentIndex === props.slides.length - 1
               ,
               nextIndex = isLastSlidePic ? 0 : CurrentIndex + 1
            ;
            setCurrentIndex( nextIndex );
         },
      },
      GoToSlide = ( slideIndex: number ) => {
         setCurrentIndex( slideIndex );
      }
   ;

   return( <>
      <div className="slider" 
         style={ {
            height: "100%", position: "relative",
         } }
      >
         {
            props.slides.length > 1 && <>
            <div className="left_arrow" 
               onClick={ MoveSlide.backwards }
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "5px",
                  position: "absolute",
                  top: "50%",
                  transform: "translate( 0, -50% )",
                  left: "15px",
                  fontSize: "45px",
                  color: "#fff",
                  zIndex: 6,
                  cursor: "pointer",
                  backgroundColor: "#fff1",
                  filter: "drop-shadow(rgba(0, 0, 0 ) 0px 0px 10px)",
                  boxShadow: "#7773 0 0 10px",
                  borderRadius: "55em",
                  aspectRatio: 1,
                  width: "45px",
                  height: "45px",
               }}
            >
               <Image alt="arrow"
                  src={ "/arrow_back.svg" }
                  width={32}
                  height={32}
               />
            </div>
            <div className="right_arrow" onClick={ MoveSlide.foward }
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "5px",
                  position: "absolute",
                  top: "50%",
                  transform: "translate( 0, -50% )",
                  right: "15px",
                  fontSize: "45px",
                  color: "#fff",
                  zIndex: 6,
                  cursor: "pointer",
                  backgroundColor: "#fff1",
                  filter: "drop-shadow(rgba(0, 0, 0 ) 0px 0px 10px)",
                  boxShadow: "#7773 0 0 10px",
                  borderRadius: "55em",
                  aspectRatio: 1,
                  width: "45px",
                  height: "45px",
               }}
            >
               <Image alt="arrow"
                  src={ "/arrow_forward.svg" }
                  width={32}
                  height={32}
               />
            </div>
            </>
         }
         <div className="slide_bg" 
            style={{
               width: "100%",
               height: "100%",
               backgroundPosition: "center",
               backgroundColor: "#f059",
               backgroundSize: "cover",
               backgroundImage: `url("${ 
                  props.slides[ CurrentIndex ].isVideo ? (
                     LockedVidBGUrl.src
                  ) : (
                     props.slides[ CurrentIndex ].url
                  )
               }")`, // if video?
               
               position: "relative",
               aspectRatio: 1,
            }}
         >
            <div className="slide_overlay" style={{
               display: "block",
               width: "100%",
               height: "100%",
               position: "absolute",
               top: 0,
               left: 0,
               backdropFilter: "blur(6px) opacity(80%)",
               zIndex: 0,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "50%",
               backgroundColor: "#0000",
            }}>
            </div>
            {
               props.slides[ CurrentIndex ].isVideo && props.slides[ CurrentIndex ].url.includes( "locked" ) ? (
                  <Image className="slide_pic" alt="image on slide"
                     src={ LockedVidUrl } // if video?
                     priority
                     unoptimized={ true }
                     width={100}
                     height={100}
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 5,
                     }}
                  />
               ) : props.slides[ CurrentIndex ].isVideo && !props.slides[ CurrentIndex ].url.includes( "locked" ) ? 
               ( <>
                  <Video src={ props.slides[ CurrentIndex ].url } />
               </> ) : (
                  <Image className="slide_pic" alt="image on slide"
                     src={ props.slides[ CurrentIndex ].url } // if video?
                     priority
                     unoptimized={ true }
                     width={100}
                     height={100}
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 5,
                     }}
                  />
               )// if video?
            }
            <div className="slider_dots" 
               style={{ 
                  display: "flex", 
                  width: "100%", 
                  height: "33px",
                  alignItems: "center", 
                  justifyContent: "center", 
                  transform: "translateY( 5px )",
                  gap: ".8em", 
                  position: "absolute",
                  bottom: 0,
                  zIndex: 6, 
               }}
            >
               { 
                  props.slides.length > 1 && 
                  props.slides.map( ( slide, slideIndex ) => (
                     <div className="slider_dot" key={ slideIndex } 
                        style={{ 
                           fontSize: CurrentIndex == slideIndex ? "2em" : "1.5em", 
                           background: CurrentIndex == slideIndex ? "#fffa" : "#fff7", 
                           boxShadow: "#0005 0 0 6px",
                           cursor: "pointer", 
                           transition: "all ease-in-out .2s",
                           width: CurrentIndex == slideIndex ? "16px" : "8px",
                           height: "8px",
                           borderRadius: "55em",
                        }}
                        onClick={ () => GoToSlide( slideIndex ) }
                     >
                     </div>
                  ) )
               }
            </div>
         </div>
      </div>
   </> );
}





/**
 * == [ ImageSlider ]
 */
type ImageSliderProps = {
   slides: string[];
}
export function ImageSlider( { ...props }: ImageSliderProps ) {
   const 
      [ CurrentIndex, setCurrentIndex ] = useState<number>( 0 )
   ;
   const 
      s = {
         slider: {
            height: "100%",
            position: "relative",
         },
         slide: {
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${ props.slides[ CurrentIndex ] }")`,
            
         },
         slide_pic: {
            width: "auto",
            height: "100%",
            margin: "0 auto",
         },
         leftArrow: {
         },
         rightArrow: {
         },
      }
   ;

   const
      MoveSlide = {
         backwards: () => {
            const 
               isFirstSlidePic = CurrentIndex === 0
               ,
               nextIndex = isFirstSlidePic ? props.slides.length - 1 : CurrentIndex - 1
            ;
            setCurrentIndex( nextIndex );
         },
         foward: () => {
            const 
               isLastSlidePic = CurrentIndex === props.slides.length - 1
               ,
               nextIndex = isLastSlidePic ? 0 : CurrentIndex + 1
            ;
            setCurrentIndex( nextIndex );
         },
      },
      GoToSlide = ( slideIndex: number ) => {
         setCurrentIndex( slideIndex );
      }
   ;

   return( <>
      <div className="slider" 
         style={ {
            height: "100%", position: "relative",
         } }
      >
         <div className="left_arrow" onClick={ MoveSlide.backwards }
            style={{
               position: "absolute",
               top: "50%",
               transform: "translate( 0, -50% )",
               left: "32px",
               fontSize: "45px",
               color: "#fff",
               zIndex: 1,
               cursor: "pointer",
            }}
         >
            &lt;
         </div>
         <div className="right_arrow" onClick={ MoveSlide.foward }
            style={{
               position: "absolute",
               top: "50%",
               transform: "translate( 0, -50% )",
               right: "32px",
               fontSize: "45px",
               color: "#fff",
               zIndex: 1,
               cursor: "pointer",
            }}
         >
            &gt;
         </div>
         <div className="slide_bg" style={ s.slide }>
            <Image className="slide_pic" alt="image on slide"
               src={ props.slides[ CurrentIndex ] }
               priority
               unoptimized
               width={100}
               height={100}
               style={ s.slide_pic }
            />
         </div>
         <div className="slider_dots" style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: ".5em", }}>
            { 
               props.slides.map( ( slide, slideIndex ) => (
                  <div className="slider_dot" key={ slideIndex } 
                     style={{ 
                        fontSize: "1.5em", 
                        color: "#7777", 
                        cursor: "pointer", 
                     }}
                     onClick={ () => GoToSlide( slideIndex ) }
                  >
                     •
                  </div>
               ) )
            }
         </div>
      </div>
   </> );
}