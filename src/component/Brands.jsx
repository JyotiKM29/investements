import React from 'react'

const Brands = () => {
  return (
    <div className='bg-[#DAA74E] h-22 p-2 lg:h-32 lg:w-11/12 lg:-mt-[4%] mx-auto flex  items-center lg:px-[5%] lg:py-3 lg:gap-[4%]'>
    <div className='flex flex-col flex-1 lg:mt-4'>

   
      <span className='text-[#8C6013] font-semibold text-xl lg:text-4xl tracking-wider leading-none'>
      Media &

      </span>
      <span className='text-[#8C6013] font-semibold text-xl lg:text-4xl tracking-wider leading-none'>
      Publications

      </span>
      </div>
      <img src='/forbesLogo.svg' alt='logo' className='h-[6vh] w-[20vw] xl:h-full xl:w-full' />
      <img src='/fortuneLogo.svg' alt='logo' className='h-[6vh] w-[20vw] xl:h-full xl:w-full' />
      <img src='/outlookLogo.svg' alt='logo' className='h-[6vh] w-[20vw] xl:h-full xl:w-full' />
      </div>
  )
}

export default Brands
