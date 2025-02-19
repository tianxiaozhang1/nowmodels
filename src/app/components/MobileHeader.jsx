import React from 'react'

function MobileHeader() {
    return (
        <div className='sticky top-0 flex justify-center border-b-2 border-zinc-600'>
            <div>
              <div className={`mt-3 md:mt-5 text-zinc-900 text-3xl md:text-6xl font-thin text-center`}>NOW MODELS</div>
              <div className='mt-1 md:mt-2 mb-3 md:mb-5 text-zinc-900 text-md md:text-xl space-x-6 flex justify-center'>
                  <div className='cursor-pointer'>toronto</div>
                  <div className='cursor-pointer'>new york</div>
                  <div className='cursor-pointer'>milan</div>
                  <div className='cursor-pointer'>paris</div>
              </div>
            </div>
            
        </div>
      )
}

export default MobileHeader
