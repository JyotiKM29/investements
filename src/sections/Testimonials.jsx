import { Divide, Quote, Star } from 'lucide-react'
import React from 'react'
import Stars from '../component/Stars'
import Review from '../component/Review'

const Testimonials = () => {
  return (
    <section id='testimonial' className='relative mx-auto max-w-screen  h-screen  overflow-hidden '>
        <div className='-ml-20 absolute -z-10 grid  grid-cols-4 lg:grid-cols-6 divide-x-[.5px] divide-white/20  h-full w-full '>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
         
        </div>
       <div className=' py-32 flex flex-col justify-evenly h-[90%] max-w-screen-2xl '>
       <header className='uppercase text-4xl lg:text-6xl font-semibold gradient text-center'>
       <h3>TESTIMONIALS</h3>
    </header>

    <div className='flex flex-col lg:flex-row justify-center gap-6 items-center  w-screen'>
       <Review  img='/profile1.jpeg' name='Danial H' designation='CEO GetNextDesign'/>
       <div className='hidden lg:block border border-left border-[#E5B96F] h-[30vh]'></div>
       <Review  img='/profile2.png' name='John H' designation='Design'/>
    </div>
       </div>
    </section>
  )
}

export default Testimonials
