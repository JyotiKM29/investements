import React from 'react'

const ImageStack = () => {
  return (
    <div className='relative w-1/2 my-[10%] mx-[10%] '>
    <img src='/connect1.jpeg' alt='connect' className='absolute top-16 left-16 z-30 h-[48vh] w-[48vh]'/>
    <img src='/connect2.jpeg' alt='connect' className='absolute top-8 left-8 z-20 h-[48vh] w-[48vh] opacity-60'/>
    <img src='/connect3.jpeg' alt='connect' className='absolute z-10 h-[48vh] w-[48vh] opacity-20'/>
  </div>
  )
}

export default ImageStack
