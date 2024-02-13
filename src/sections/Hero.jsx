import React from 'react'
import { MoveRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id='hero' className=' mx-auto max-w-screen  h-screen '>
   <div className="mx-auto flex  max-w-screen   px-8 md:px-16 py-4 h-full">
     {/* text */}
   <div className=' w-1/3 flex flex-col  justify-center items-start h-full '>
    
      <h3 className='headingPrimary'>
      Empower Your Business
      <span className=" transition font-display text-4xl font-bold leading-none md:text-[5rem] bg-gradient-to-b from-1% bg-clip-text text-transparent from-[#FFE998] to-[#57370D] tracking-tight">
       Finances 
      </span> 
      </h3>
      <p className='font-light text-base text-zinc-500 leading-tight  '>Your Expert Partner in Swift Business Financing, Bridging Gaps, and Ensuring Success. Thrive with Us!</p>
      <button className='flex text-base gap-2 text-[#F0D77B]'>Discover More <MoveRight /></button>
    </div>
    {/* Image  */}
     <div className='w-2/3 flex gap-0 space-x-0 space-y-0 justify-end items-center h-full '>
      {/* part 1 */}
      
      <img src='/hero.png' alt='hero img' className='h-3/5 w-10/12 object-cover' />

     
     
{/* part 2 */}
      <div className='   min-h min-w'>
      <ul className='flex flex-col gap-28'>
        <li className='rotate-90'>
          Facebook 
        </li>
        <li className='rotate-90'>
          Instagram 
        </li>
        <li className='rotate-90'>
          Twitter 
        </li>
      </ul>
     </div>
     </div>
   </div>
    
    
    </section>
  )
}

export default Hero
