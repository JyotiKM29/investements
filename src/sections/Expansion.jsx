import React from 'react'

const Expansion = () => {
  return (
    <section id='expansion' className=' mx-auto max-w-screen  h-screen  py-12 lg:py-32 '>
  
    <div className="min-h-full  flex gap-6 justify-center lg:justify-evenly flex-col  items-center bg-[url('/public/Expansion.png')] bg-cover bg-center h-full w-full object-cover bg-no-repeat ">
    
<header className='text-4xl lg:text-6xl leading-tight text-center font-semibold' style={{fontFamily:'Noto Serif'}}>
    <h2>
  <span className=' bg-gradient-to-b bg-clip-text  to-[#C59B4F] from-[#F1C27A] text-transparent'>
  We are Dedicated 
  </span>  to the Expansion
    </h2>
    <h2>
    of <span className=' bg-gradient-to-b bg-clip-text  to-[#C59B4F] from-[#F1C27A] text-transparent'>
    your Business
    </span>  
    </h2>
</header>

<div className='flex  gap-2 lg:gap-4'>
    <button className='text-lg lg:text-3xl  px-4 py-1 lg:px-8 lg:py-3 bg-[#DAA74E]  text-[#080808]'>
  <span className='text-[#906312]'>
  FOR
  </span>   INDIVIDUAL
    </button>
    <button className='text-lg lg:text-3xl px-4 py-1 lg:px-8 lg:py-3 bg-[#DAA74E]  text-[#080808]'>
    <span className='text-[#906312]'>
  FOR
  </span>   CORPORATE
    </button>
</div>

<button className="text-lg self-center lg:-mt-8 border border-[#F0D77B] text-[#F0D77B] px-4 py-1 lg:px-8 lg:py-3 lg:text-xl rounded-md"> let's connect</button>

    </div>
 
   
   
    </section>
  )
}

export default Expansion
