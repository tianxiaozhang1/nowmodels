// "use client"
import React from 'react'
// , { useEffect, useState }
import {playfairDisplay} from '../../fonts'
function Footer() {
  return (
    <>
      {/* MOBILE */}
      <div className='lg:hidden flex lg:flex-none lg:mx-auto justify-center bg-zinc-50 text-zinc-400 px-16 md:px-48 lg:px-72 pt-6 md:pt-6 pb-10 md:pb-12 text-sm md:text-lg'>
          <div className='w-1/2 lg:w-1/3 lg:flex lg:justify-between lg:mr-12'>
              <a href={`/women`}><div className='text-zinc-800'>Toronto</div></a>
              <a href={`/newyork`}><div>New York</div></a>
              <a href={`/paris`}><div>Paris</div></a>
              <a href={`/milan`}><div>Milan</div></a>              
          </div>
          <div className='hidden lg:flex lg:mx-24'>-</div>
          <div className='w-1/2 lg:w-1/3 lg:flex lg:justify-between lg:ml-12'>
              <a href={`/privacypolicy`}><div>Privacy Policy</div></a>
              <a href={`/becomeamodel`}><div>Become a Model</div></a>
              <a href={`/talentguidelines`}><div>Talent Guidelines</div></a>
              <a href={`/bookingconditions`}><div>Booking Conditions</div></a>
          </div>
      </div>
      {/* DESKTOP */}
      <div className={`hidden lg:flex justify-center pt-0 pb-4`}>
          <div>
            <div className='mt-3 md:mt-3 xl:mb-1 xl:text-3xl text-xl text-center '><div className={`lg:text-lg 2xl:text-2xl cursor-default text-zinc-600 ${playfairDisplay.className}`}>NOW MODELS</div></div>
            <div className='mt-1 md:mt-2 mb-3 md:mb-1 text-md lg:text-md xl:text-lg items-end space-x-8 flex justify-center text-zinc-500'>                
                <div className='cursor-default'>292 LEXINGTON AVE</div>
                <div className='cursor-default'>TORONTO, ON M7T8S7</div>
                <div className='cursor-default'>TEL (416) 473-0700</div>
                <div className='cursor-default'>FAX (416) 473-3223</div>
            </div>
            <div className={`mt-1 md:mt-2 xl:mt-1 mb-3 md:mb-3 lg:text-lg 2xl:text-2xl space-x-16 flex justify-center uppercase text-zinc-500 ${playfairDisplay.className}`}>
                <a href={`/privacypolicy`}><div className=''>Privacy Policy</div></a>
                <a href={`/becomeamodel`}><div className=''>Become a Model</div></a>
                <a href={`/talentguidelines`}><div className=''>Talent Guidelines</div></a>
                <a href={`/bookingconditions`}><div className=''>Booking Conditions</div></a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
