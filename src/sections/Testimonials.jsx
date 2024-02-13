import { Divide, Quote, Star } from 'lucide-react'
import React from 'react'
import Stars from '../component/Stars'
import Review from '../component/Review'

const Testimonials = () => {
  return (
    <section  className=' mx-auto max-w-screen  h-screen '>
       <div className='py-32 flex flex-col justify-evenly h-[90%] max-w-screen '>
       <header className='uppercase text-5xl font-semibold gradient text-center'>
       <h3>TESTIMONIALS</h3>
    </header>

    <div className='flex justify-center gap-6 items-center'>
       <Review />
       <div className='border border-left border-[#E5B96F] h-[30vh]'></div>
       <Review />
    </div>
       </div>
    </section>
  )
}

export default Testimonials
