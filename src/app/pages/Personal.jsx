'use client'
import React, { useState, useEffect } from 'react';
import {playfairDisplay} from '../../fonts'

import bg from '../images/models/ana/bg.JPG'

import InstagramLogo from '../icons/instagram'

import Image from "next/image";
import MobileHeader from '../components/MobileHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Personal() {
    const size = useWindowSize();
    
    return (
        <>
        {/* MOBILE */}
        <div className='lg:hidden'>  
          {/* <Header/> */}
          <div className=''>
              <div className=''
                   style={{
                      backgroundImage: `url(${bg.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 1,
                      height: size.height,
                   }}>
                  <div className='border-b-2 border-stone-400 w-full flex text-stone-100' style={{height:60}}>

                    <div className='flex justify-between items-center px-5' style={{width:size.width-60}}>
                        <div className={`text-2xl mt-0.5 ${playfairDisplay.className}`}>
                          NOW MODELS
                        </div>
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
                    <div className='ml-5'>Angelina Coutinho</div>
                  </div>
              </div>

              <div className='bg-zinc-100 py-12 pl-10 pr-8 md:pl-40' style={{}}>
                  <div className='flex text-zinc-400'>
                    <div className='w-1/3'>Height</div>
                    <div className='w-1/3'>Hair</div>
                    <div className='w-1/3'>Eyes</div>
                  </div>
                  <div className='flex -mt-1'>
                    <div className='w-1/3'>176 / 5'9''</div>
                    <div className='w-1/3'>Blond</div>
                    <div className='w-1/3'>Blue</div>
                  </div>
                  <div className='flex text-zinc-400 mt-3'>
                    <div className='w-1/3'>Bust</div>
                    <div className='w-1/3'>Waist</div>
                    <div className='w-1/3'>Hips</div>
                  </div>
                  <div className='flex -mt-1'>
                    <div className='w-1/3'>76 / 30''</div>
                    <div className='w-1/3'>58 / 23''</div>
                    <div className='w-1/3'>89 / 35''</div>
                  </div>
                  <div className='flex text-zinc-400 mt-3'>
                    <div className='w-1/3 '>
                      <div>Shoes</div>
                      <div className='text-black -mt-1'>37 / 7</div>
                    </div>
                    {/* <div className='w-1/3 flex items-center' style={{}}>
                      <InstagramLogo bgColour={"bg-zinc-100"} darkColour={"bg-zinc-500"} lightColour={"bg-zinc-50"} sizeFactor={1.5} />
                    </div>
                    <div className='w-1/3 flex items-center' style={{}}>
                      <InstagramLogo bgColour={"bg-zinc-100"} darkColour={"bg-zinc-500"} lightColour={"bg-zinc-50"} sizeFactor={1.5} />
                    </div> */}
                  </div>
              </div>
              <Image
                src={bg}
                width={1000}
                height={1000}
              />
              <Image
                src={bg}
                width={1000}
                height={1000}
              />
          </div>
          <Footer/>
        </div>

        {/* DESKTOP */}
        <div className='hidden lg:block  bg-zinc-50'>
          {/* TOP PAGE */}
          <div className='lg:flex'>
              <div className='lg:flex lg:w-1/2 2xl:w-2/3  '>
                <div className='lg:w-1/3 2xl:w-1/5 lg:flex pt-20 pl-20'>
                  {/* LEFT NAVIGATION */}
                  <div>
                    <div className='mt-2 cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <div className='text-zinc-400 mt-32'>
                      <div>Book</div>
                      <div>Instagram</div>
                    </div>
                  </div>

                </div>
                <div className='lg:w-2/3 2xl:w-4/5 '>
                  <div className={`pt-20 text-3xl ${playfairDisplay.className}`} style={{height:200}}>
                    NOW MODELS
                  </div>

                  <div className=' flex items-center' style={{height:size.height-400}}>
                    <div className={`lg:hidden 2xl:flex justify-end text-end text-9xl mr-6 w-full  ${playfairDisplay.className}`}>Angelina Coutinho</div>
                  </div>
                  <div className='' style={{height:200}}>
                    <div className=''></div>
                    <div className={`lg:flex 2xl:hidden justify-end text-end text-6xl mr-2 ${playfairDisplay.className}`}>Angelina Coutinho</div>
                  </div>
                </div>
              </div>
              <div className='py-40 lg:w-1/2 2xl:w-1/3'
                    style={{
                      backgroundImage: `url(${bg.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 1,
                      height: size.height,
                    }}>
                
              </div>
          </div>
          {/* MEASUREMENTS */}
          <div className='bg-zinc-100 py-12 pl-32 pr-10' style={{}}>
                  <div className='flex text-zinc-400 w-full columns-7'>
                    <div className='w-full'>Height</div>
                    <div className='w-full'>Hair</div>
                    <div className='w-full'>Eyes</div>
                    <div className='w-full'>Bust</div>
                    <div className='w-full'>Waist</div>
                    <div className='w-full'>Hips</div>
                    <div className='w-full'>Shoes</div>
                  </div>
                  <div className='flex -mt-1 w-full columns-7'>
                    <div className='w-full'>176 / 5'9''</div>
                    <div className='w-full'>Blond</div>
                    <div className='w-full'>Blue</div>
                    <div className='w-full'>76 / 30''</div>
                    <div className='w-full'>58 / 23''</div>
                    <div className='w-full'>89 / 35''</div>
                    <div className='w-full'>37 / 7</div>
                  </div>

              </div>
          {/* BOOK */}
          <div className='flex lg: columns-2 space-x-1'>
              <div className=''>
                <Image
                  src={bg}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className=''>
                <Image
                  src={bg}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className=''>
                <Image
                  src={bg}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className=''>
              {/* lg:w-1/2 xl:w-1/3 2xl:w-1/4 */}
                <Image
                  src={bg}
                  width={1000}
                  height={1000}
                />
              </div>
              
          </div>
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

export default Personal
