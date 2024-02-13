import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Address = () => {
  return (
    <div className='w-1/3'>
    <img src='/Unified logo.svg' alt='logo' />
      <p className='text-lg text-white/70 leading-snug tracking-wider	font-light my-2'>
      Interior Design Center Inc. A USA Based Photo Editing Company in Tokyo, Japan. Corporation NO. 524172-2,  Check Here.
      </p>
      <div className='flex flex-col gap-3 my-8'>
          <div className='flex gap-4'>
          <Phone strokeWidth={1} className='stroke-[#F8CC42]'/> <span  className='text-lg text-white/80 leading-snug tracking-wider	my-1'>+88(019)04-000012</span>
          </div>
          <div className='flex gap-4'>
          <Mail strokeWidth={1} className='stroke-[#F8CC42]'/> <span  className='text-lg text-white/80 leading-snug tracking-wider	my-1'>Info.01241588@gmail</span>
          </div>
          
        </div>
    </div>
  )
}

export default Address
