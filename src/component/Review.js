import { Quote } from 'lucide-react'
import React from 'react'
import Stars from './Stars'

const Review = ({img , name , designation}) => {
  return (
    <div className=' lg:w-[40vw] flex flex-col lg:flex-row lg:gap-4 px-16 lg:px-6 py-6' >
            <img src={img} alt='profile1' className='-mb-14 lg:mb-0 h-16 w-16 lg:h-24 lg:w-24 self-end lg:self-start rounded-full' />
            <div>
            <Quote strokeWidth={.1} className='rotate-180 stroke-[#F0D77B] fill-[#F0D77B] h-8 w-8 lg:h-12 lg:w-12' />
           
             <Stars />
            <p className='text-base lg:text-xl text-white/70 leading-relaxed lg:leading-[2.3]  font-light tracking-wider'>
            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
            </p>

<div className='my-4'>
<h4 className='font-medium  text-xl lg:text-2xl text-white/80'>{name}</h4>
            <h6 className='text-white/80 text-sm lg:text-base'>
            {designation}
            </h6>
</div>
            
            </div>
        </div>
  )
}

export default Review
