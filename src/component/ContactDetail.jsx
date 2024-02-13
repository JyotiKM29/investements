import { Mail, MapPinned, Phone } from 'lucide-react'
import React from 'react'

const ContactDetail = () => {
  return (
    <div className='p-[8%]   lg:h-full  lg:w-1/2 flex flex-col gap-4  lg:gap-[8%] justify-center items-start lg:px-[10%] '>
        <header className='text-4xl lg:text-5xl lg:text-nowrap'>
          <h3>Let&apos;s Get In <span className='gradient' >
          Touch With Us
          </span></h3>
        </header>

        <div className='flex flex-col gap-3'>
          <div className='flex gap-4'>
          <Phone strokeWidth={1} className='stroke-[#F8CC42]'/> <span  className='text-left  lg:text-lg font-light text-base text-zinc-500 leading-snug tracking-wider  '>+971-05 44 33 88 66</span>
          </div>
          <div className='flex gap-4'>
          <Mail strokeWidth={1} className='stroke-[#F8CC42]'/> <span  className='text-left  lg:text-lg font-light text-base text-zinc-500 leading-snug tracking-wider  '>info@unifiedinvestments.ae</span>
          </div>
          <div className='flex gap-4'>
          <MapPinned strokeWidth={1} className='stroke-[#F8CC42] h-8 w-8 lg:h-12 lg:w-12' /> <span  className='text-left  lg:text-lg font-light text-base text-zinc-500 leading-snug tracking-wider  '>Unified Investments, 2nd floor, Al Amal St - 

Business Bay-Dubai, United Arab Emirates
</span>
          </div>
        </div>
        </div>
  )
}

export default ContactDetail
