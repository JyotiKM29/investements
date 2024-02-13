import { Quote } from 'lucide-react'
import React from 'react'
import Stars from './Stars'

const Review = () => {
  return (
    <div className='w-[30vw] flex gap-4 ' >
            <img src='/profile1.jpeg' alt='profile1' className='h-24 w-24  rounded-full' />
            <div>
            <Quote strokeWidth={.1} className='rotate-180 stroke-[#F0D77B] fill-[#F0D77B] h-12 w-12' />
           
             <Stars />
            <p className='text-xl text-white/80 leading-[3] font-light tracking-wider'>
            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
            </p>

            <h4 className='font-medium text-2xl text-white/80'>Danial H</h4>
            <h6 className='text-white/80'>
            CEO GetNextDesign
            </h6>
            </div>
        </div>
  )
}

export default Review
