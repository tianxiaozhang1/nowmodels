import React from 'react'
function Header() {

    return (
      <div>
          <div className='lg:w-1/3 2xl:w-1/5 lg:flex lg:pt-12 2xl:pt-20 lg:pl-12 2xl:pl-20'>
                  {/* LEFT NAVIGATION */}
                  <div className='text-zinc-400'>
                    <div className='mt-2 cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <div className='lg:mt-12 2xl:mt-32'>
                      <div>Book</div>
                      <div>Instagram</div>
                    </div>
                  </div>

          </div>
          <div className='lg:w-2/3 2xl:w-4/5 '>
            <div className='lg:pt-12 2xl:pt-20' style={{height:200}}>
              <div className={`text-4xl cursor-default ${playfairDisplay.className}`}>
                NOW MODELS 
              </div>
            </div>
            
            <div className=' flex items-center' style={{height:size.height-400}}>
              <div className={`lg:hidden 2xl:flex justify-end text-end text-9xl mr-6 w-full cursor-default ${playfairDisplay.className}`}>{modelFullName}</div>
            </div>
            <div className='' style={{height:200}}>
              <div className=''></div>
              <div className={`lg:flex 2xl:hidden justify-end text-end text-6xl mr-4 ${playfairDisplay.className}`}>{modelFullName}</div>
            </div>
          </div>
      </div>
    )
}

export default Header
