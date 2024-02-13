
import React from 'react'
import ContactDetail from '../component/ContactDetail'
import ImageStack from '../component/ImageStack'

const Connect = () => {
  return (
    <section  className=' mx-auto max-w-screen  h-screen  bg-white/10'>

      <div className='flex gap-4 h-full w-full'>
        <ContactDetail />

        <ImageStack />

        
      </div>
      <div className='bg-[#DAA74E] h-32 w-11/12 -mt-[4%] mx-auto flex px-[5%] py-3 gap-[8%]'>
      <div className='flex flex-col flex-1 mt-4'>

     
        <span className='text-[#8C6013] font-semibold text-4xl tracking-wider leading-none'>
        Media &

        </span>
        <span className='text-[#8C6013] font-semibold text-4xl tracking-wider leading-none'>
        Publications

        </span>
        </div>
        <img src='/forbesLogo.svg' alt='logo' />
        <img src='/fortuneLogo.svg' alt='logo' />
        <img src='/outlookLogo.svg' alt='logo' />
        </div>
    </section>
  )
}

export default Connect
