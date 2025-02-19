import React from 'react'

const InstagramLogo = ({bgColour, darkColour, lightColour, sizeFactor}) => {
    return (
      <div className={`${darkColour} flex justify-center items-center shadow-inner`} style={{width: 22*sizeFactor, height: 22*sizeFactor, borderRadius: 0*sizeFactor}}>
  
          <div className='flex justify-center items-center' style={{marginLeft: 0*sizeFactor}}>
              <div>
                  <div className={`${lightColour}`} style={{width: 14*sizeFactor, height: 14*sizeFactor, marginTop: 0}}>
                    <div className={`${darkColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginLeft: 10*sizeFactor}}></div>
                    <div className={`${darkColour}`} style={{width: 12*sizeFactor, height: 2*sizeFactor, marginLeft: 2*sizeFactor}}></div>
                    <div className={`flex justify-center ${darkColour}`} style={{width: 10*sizeFactor, height: 8*sizeFactor, marginLeft: 2*sizeFactor}}>
                        <div className={`${lightColour}`} style={{width: 6*sizeFactor, height: 6*sizeFactor, marginLeft: 0*sizeFactor}}></div>
                    </div>
                  </div>
              </div>
          </div>
  
      </div>
    )
  }

export default InstagramLogo