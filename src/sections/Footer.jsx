import React from 'react'
import Address from '../component/Address'

const Footer = () => {
  return (
    <section id='footer' className=' mx-auto max-w-screen  h-screen  px-8 md:px-24 py-4'>
      <div className="mx-auto flex  flex-col  justify-end max-w-screen   h-full  pb-[10%]">

<div className='flex flex-col lg:flex-row justify-evenly'>
  <Address />
  <div className='flex justify-between lg:gap-[30%]'>
  <div>
    <h4 className='text-white/90 text-2xl my-8 '>Menu</h4>
    <ul>
      <li  className='text-white/70 text-base font-light'>Company</li>
      <li  className='text-white/70 text-base font-light'>Investors</li>
      <li  className='text-white/70 text-base font-light'>Products</li>
      <li  className='text-white/70 text-base font-light'>Jopunral</li>
      <li  className='text-white/70 text-base font-light'>Reach Us</li>
    </ul>
  </div>
  <div>
  <h4 className='text-white/90 text-2xl my-8 text-nowrap'>Useful link</h4>
    <ul>
      <li  className='text-white/70 text-base font-light'>Home</li>
      <li  className='text-white/70 text-base font-light'>Company</li>
      <li  className='text-white/70 text-base font-light text-nowrap'>Privacy Policy</li>
      <li  className='text-white/70 text-base font-light text-nowrap'>Terms and Conditions</li>
      <li  className='text-white/70 text-base font-light text-nowrap'>Return & Refund</li>
    </ul>
  </div>
  </div>
 

  <div className=' '>
  <h4 className='text-white/90 text-2xl my-8'>Follow Us</h4>

 <div className='flex  justify-evenly lg:gap-3'>
 <img src='/instargram.svg' alt='instagram' className='h-10 w-10' />
   <img src='/facebook.svg' alt='facebook' className='h-10 w-10'/>
   <img src='/linkedin.svg' alt='linkedin' className='h-10 w-10' />

 </div>
   
  </div>
</div>
     </div>
    </section>
  )
}

export default Footer
