"use client"
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from "next/image";

import {playfairDisplay} from '../../fonts'

import { photos } from '../images'
// import moduleName1 from '../images/models/women/nina/1.jpg'
// const images = require.context('../images/models', true);
// const imageList = images.keys().map(image => images(image));

import Footer from '../components/Footer';

function Women() {
  const size = useWindowSize();

  return (
    <div>
      {/* TOP */}
      <div className=''>
        <Head>
          <title>XXXXXX</title>
        </Head>
        {/* DESKTOP */}
        <div className='hidden lg:flex lg:w-full'>
            <div className='lg:flex lg:w-2/3 2xl:w-2/3 mx-auto justify-between lg:pt-10 lg:pb-8 xl:pt-16 xl:pb-12 2xl:py-12'>
              <div className='w-1/3 flex items-center '>
                <a href="/" className={`lg:text-3xl 2xl:text-4xl text-zinc-400 flex ${playfairDisplay.className}`}>
                  NOW MODELS
                </a>
              </div>

              <div className={`hidden lg:flex lg:text-5xl xl:text-7xl w-1/3 justify-center items-center text-zinc-800 cursor-default ${playfairDisplay.className}`}>WOMEN</div>

              <div className=' text-zinc-400 flex w-1/3 justify-end items-center '>
                {/* MAGNIFYING GLASS */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7 xl:size-8 mt-1 mr-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                {/* HEART */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7 xl:size-8 mt-1 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>

            </div>
        </div>

        {/* MOBILE */}
        <div className='lg:hidden'>
            <div className='border-b-2 border-zinc-200 w-full flex text-zinc-600' style={{height:60}}>

              <div className='flex justify-between items-center px-5' style={{width:size.width-60}}>
                  <a href="/"  className={`text-2xl mt-0.5 ${playfairDisplay.className}`}>
                    NOW MODELS 
                  </a>
                  <div className='flex mt-1 md:mt-0.5'>
                    {/* MAGNIFYING GLASS */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-4 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    {/* HEART */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
              </div>
              <div className='border-l-2 border-zinc-200 flex justify-center items-center' style={{width:60}}>
                {/* MENU */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>

            </div>

            <div className={`flex justify-center text-4xl mt-3 mb-4 md:text-4xl md:mt-4 md:mb-5 text-zinc-800 cursor-default ${playfairDisplay.className}`}>WOMEN</div>

        </div>
      </div>

      {/* IMAGES */}
      <div className='mt-2 lg:mt-0 2xl:w-5/6 grid mx-auto space-x-2 xl:mb-4'>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 mx-2'>
            {
              photos.map((model, n) => {
                return <a className='z-10' href={`/women/${model.name}`} key={n}> 
                  <Image
                    src={model.profileImage}
                    width={800}
                    height={800}
                    alt={model.fullName}
                  />
                  <div className={`flex justify-center text-center text-xl -mt-10 mb-4 md:text-2xl md:-mt-12 md:mb-4 2xl:text-4xl 2xl:-mt-16 2xl:mb-6 text-white drop-shadow-[0_1px_1px_rgba(100,100,100,1)] ${playfairDisplay.className}`}>
                    {model.fullName}
                  </div>
                </a>
              })
            }
          </div>

      </div>

      <Footer/>

    </div>
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

export default Women
