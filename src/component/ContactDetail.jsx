import { Mail, MapPinned, Phone } from 'lucide-react'
import React from 'react'

const ContactDetail = () => {
  return (
    <div className='h-full w-1/2 flex flex-col  gap-[8%] justify-center items-start px-[10%] '>
        <header className='text-4xl'>
          <h3>Let&apos;s Get In <span className='gradient' >
          Touch With Us
          </span></h3>
        </header>

        <div className='flex flex-col gap-3'>
          <div className='flex gap-4'>
          <Phone strokeWidth={1} className='stroke-[#F8CC42]'/> <span className='para'>+971-05 44 33 88 66</span>
          </div>
          <div className='flex gap-4'>
          <Mail strokeWidth={1} className='stroke-[#F8CC42]'/> <span className='para'>info@unifiedinvestments.ae</span>
          </div>
          <div className='flex gap-4'>
          <MapPinned strokeWidth={1} className='stroke-[#F8CC42] h-12 w-12' /> <span className='para'>Unified Investments, 2nd floor, Al Amal St - 

Business Bay-Dubai, United Arab Emirates
</span>
          </div>
        </div>
        </div>
  )
}

export default ContactDetail
