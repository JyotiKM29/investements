import React from 'react'

const ImageStack = () => {
  return (
    <div className='relative lg:w-1/2 lg:my-[15%] md:mx-[10%]  my-[5%] mx-[5%] '>
    <img src='/connect1.jpeg' alt='connect' className='absolute top-16 left-16 z-30 h-[32vh] w-[32vh] md:h-[48vh] md:w-[48vh]'/>
    <img src='/connect2.jpeg' alt='connect' className='absolute top-8 left-8 z-20 h-[32vh] w-[32vh] md:h-[48vh] md:w-[48vh] opacity-60'/>
    <img src='/connect3.jpeg' alt='connect' className='absolute z-10 h-[32vh] w-[32vh] md:h-[48vh] md:w-[48vh] opacity-20'/>
  </div>
  )
}

export default ImageStack
