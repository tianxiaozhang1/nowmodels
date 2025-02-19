'use client'
import React, { useState, useEffect } from 'react';
import {playfairDisplay} from '../../fonts'
import Image from "next/image";

import { photos } from '../images'
import onePhoto from '../images/models/women/zoey/5.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CatchAll({params: {modelName}}) {

    const size = useWindowSize();

    const modelPhotos = photos.filter(model =>
      model.name === modelName
    );

    const modelFullName = modelPhotos.map(model => model.fullName)
    const profilePhoto = modelPhotos.map(model => model.profileImage);

    return (
        <>
          {/* MOBILE */}
          <div className='lg:hidden'>  
            {/* <Header/> */}
            <div className=''>
                <div className=''
                    style={{
                        backgroundImage: `url(${onePhoto.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 1,
                        height: size.height,
                    }}>
                    <div className='border-b-2 border-stone-400 w-full flex text-stone-100' style={{height:60}}>

                      <div className='flex justify-between items-center px-5' style={{width:size.width-60}}>
                          <a href="/" className={`text-2xl mt-0.5 ${playfairDisplay.className}`}>
                            NOW MODELS 
                          </a>
                          <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                          </div>
                      </div>
                      <div className='border-l-2 border-stone-400 flex justify-center items-center' style={{width:60}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                      </div>

                    </div>

                    <div style={{height:size.height-200}}></div>

                    <div className={`text-5xl text-white drop-shadow-2xl ${playfairDisplay.className}`} style={{height:140}}>
                      <a href="/" className='ml-5'>go back</a>
                    </div>
                </div>

                
            </div>
            <Footer/>
          </div>

          {/* DESKTOP */}
          <div className='hidden lg:block bg-zinc-50'>
            {/* TOP PAGE */}
            <div className='lg:flex'>
                <div className='lg:flex lg:w-1/2 2xl:w-2/3  '>
                  <div className='lg:w-1/3 2xl:w-1/5 lg:flex lg:pt-12 2xl:pt-20 lg:pl-12 2xl:pl-20'>
                    {/* LEFT NAVIGATION */}
                    <div className='text-zinc-400'>
                      <div className='mt-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </div>
                      <div className='lg:mt-12 2xl:mt-32 text-sm xl:text-md'>
                      </div>
                    </div>

                  </div>
                  <div className='lg:w-2/3 2xl:w-4/5 '>
                    <div className='lg:pt-12 2xl:pt-20  ' style={{height:200}}>
                      <div className={`flex lg:text-2xl xl:text-4xl ${playfairDisplay.className}`}>
                        <a className='text-zinc-400' href='/'>NOW MODELS</a>
                      </div>
                    </div>
                    
                    <div className=' flex items-center text-zinc-600' style={{height:size.height-400}}>
                      <a href="/" className={`lg:hidden 2xl:flex justify-end text-end text-9xl mr-6 w-full ${playfairDisplay.className}`}>go back</a>
                    </div>
                    <div className='text-zinc-600' style={{height:200}}>
                      <a href="/" className={`lg:flex 2xl:hidden justify-end text-end text-6xl mr-4 ${playfairDisplay.className}`}>go back</a>
                    </div>
                  </div>
                </div>
                <div className='py-40 lg:w-1/2 2xl:w-1/3'
                      style={{
                        backgroundImage: `url(${onePhoto.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        alt: "X",
                        opacity: 1,
                        height: size.height,
                      }}>
                  
                </div>
            </div>

            <Footer/>
          </div>
        </>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default CatchAll
