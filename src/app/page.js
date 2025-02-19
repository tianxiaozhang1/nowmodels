"use client";
import { useEffect, useState } from "react";
import {playfairDisplay} from '../fonts'

import { photos } from './images'

import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Page from './components/Page';

import imageCategory from './images/models/home/image.jpg'
import menCategory from './images/models/home/men.jpg'
import curveCategory from './images/models/home/curve.jpg'
import womenCategory from './images/models/women/oksana/1.jpg'

const modelCategories = [
  {
    name: "women",
    image: womenCategory,
  },
  {
    name: "curve",
    image: curveCategory,
  },
  {
    name: "men",
    image: menCategory,
  },
  {
    name: "image",
    image: imageCategory,
  }
]

export default function Home() {
  const size = useWindowSize();
  const sectionTitle = `mt-5 md:mt-12 xl:mt-16 flex justify-center text-center cursor-default text-4xl md:text-5xl 2xl:text-8xl text-zinc-100 drop-shadow-[0_1px_1px_rgba(100,100,100,1)] ${playfairDisplay.className}`
  const gradientCSS = `w-full h-1/4 bg-gradient-to-b from-transparent to-zinc-950`

  return (
    <div>
      {/* TOP */}
      <div className=''>
        {/* DESKTOP */}
        <div className='hidden lg:flex lg:w-full'>
            <div className={`lg:flex lg:w-2/3 2xl:w-2/3 mx-auto justify-between ${playfairDisplay.className}`}>
              <div className='lg:pt-10 lg:pb-8 xl:pt-16 xl:pb-12 2xl:py-12 flex items-center'>
                <div className={`lg:text-3xl 2xl:text-6xl cursor-default text-zinc-800 flex`}>
                  NOW MODELS
                </div>
              </div>

              <div className='lg:pt-10 lg:pb-8 xl:pt-16 xl:pb-12 2xl:py-12 text-zinc-400 flex items-center space-x-4 xl:text-2xl xl:mt-7 '>
                <a href={`/women`}><div className="text-zinc-600 cursor-pointer">Toronto</div></a>
                <a href={`/newyork`}><div className="cursor-pointer hover:text-zinc-700">New York</div></a>
                <a href={`/paris`}><div className="cursor-pointer hover:text-zinc-700">Paris</div></a>
                <a href="/milan"><div className="cursor-pointer hover:text-zinc-700 xl:mr-6">Milan</div></a>
                
                <div className="dark:text-red-500 flex space-x-4">
                  <a target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer currentcolor">
                      <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                      <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                      <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                    <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
                  </svg>
                  </a>
                </div>
              </div>

            </div>
        </div>

        {/* MOBILE */}
        <div className='lg:hidden'>
            <div className='border-b-2 border-zinc-200 w-full flex text-zinc-600' style={{height:60}}>

              <div className='flex justify-between items-center px-5' style={{width:size.width-60}}>
                  <div className={`text-2xl mt-0.5 ${playfairDisplay.className}`}>
                    NOW MODELS 
                  </div>
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

            <div className="md:hidden grid grid-cols-2">
                {
                  modelCategories.map((category, i) => {
                    return  <div key={i}>
                              <a href={`/${category.name}`} className="flex justify-center items-end"
                                    style={{
                                        background: `url(${category.image.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: size.height/2-28,
                                    }}
                                >   
                                    <div className={gradientCSS}>
                                      <div className={sectionTitle}>
                                          {category.name}
                                      </div>
                                    </div>
                              </a>
                            </div>
                  })
                }

            </div>

            <div className="hidden md:grid md:grid-cols-2 md:mt-2 lg:hidden gap-1 mx-2">
                {
                  modelCategories.map((category, j) => {
                    return  <div key={j}>
                              <a href={`/${category.name}`} className="flex justify-center items-end"
                                    style={{
                                        background: `url(${category.image.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: size.height/2-46,
                                        opacity: 1,
                                    }}
                                >   
                                    <div className={gradientCSS}>
                                      <div className={sectionTitle}>
                                          {category.name}
                                      </div>
                                    </div>
                              </a>
                            </div>
                  })
                }
            </div>

        </div>
      </div>

      {/* MAIN */}
      <div className='mt-2 lg:mt-0 2xl:w-11/12 grid mx-auto space-x-2 xl:mb-4'>
          <div className="hidden lg:grid lg:grid-cols-4 xl:hidden gap-2 mx-2">
              {
                modelCategories.map(category => {
                  return  <div>
                            <a href={`/${category.name}`} className="flex justify-center items-end"
                                  style={{
                                      background: `url(${category.image.src})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',
                                      height: size.height-260,
                                  }}
                              >   
                                  <div className={gradientCSS}>
                                    <div className={sectionTitle}>
                                        {category.name}
                                    </div>
                                  </div>
                            </a>
                          </div>
                })
              }
          </div>
          <div className='hidden xl:grid xl:grid-cols-4 gap-2 mx-2'>
              {
                modelCategories.map(category => {
                  return  <div>
                            <a href={`/${category.name}`} className="flex justify-center items-end"
                                  style={{
                                      background: `url(${category.image.src})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',
                                      height: size.height-360,
                                      opacity: 1,
                                  }}
                              >   
                                  <div className={gradientCSS}>
                                    <div className={sectionTitle}>
                                        {category.name}
                                    </div>
                                  </div>
                            </a>
                          </div>
                })
              }
          </div>

      </div>

      <Footer/>

    </div>
  )
};

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
