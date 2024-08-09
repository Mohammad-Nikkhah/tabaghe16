import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { RiPlayListFill } from "react-icons/ri";

function Hero() {
  return (
    <div className='pt-20 pb-10'>
      <div>
         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white'/>
         <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='#000'/>
         <Spotlight className="top-28 left-80 h-[80vh] w-[50w]" fill='#555555'/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div></div>
       <div className='flex justify-center relative my-20 '>
          <div className='max-w-[89vw] md:max-w-2x1 lg:max-w-[60vw]
           flex flex-col items-center justify-center
          '>          
            <div className='hero-box'>
                <img src='/hero.png'></img>
                <img className='pic-2' src='/hero-2.png'></img>
                <img className='pic-3' src='/hero-3.png'></img>
                <img className='pic-4' src='/hero-4.png'></img>
                <img className='equalizer' src='/equalizer.png'></img>
            </div>

            
             <TextGenerateEffect
               className='text-center text-[100px] md:text-10xl lg:text-10xl'
               words='Available on YouTube, Apple, Spotify, Castbox, and all major streaming platforms.'
             />
             <a href='#'>
                 <MagicButton
                     title="All Episodes" 
                     icon={<RiPlayListFill />} 
                     position="right" 
                   />
             </a>
          </div>
       </div>
    </div>
    
  )
}

export default Hero