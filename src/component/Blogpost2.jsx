import React from 'react'

const Blogpost2 = () => {
  return (
    <div className="bg-black/65 flex flex-col  gap-[2%] px-[8%] py-[30%] space-y-4 h-full w-full">
    <header className="flex justify-between">
      <span className="uppercase text-[#F0D77B]">
        developnment
      </span>
      <span className="text-white/70">11 March 2023</span>
    </header>
    <h3 className="text-white/80 text-2xl leading-none"  style={{fontFamily:'Noto Serif'}} >
      Best Website to research for your next project
    </h3>
    <p className="text-base font-light text-white/80">
      Capitalize on low hanging fruit to identify a ballpark value
      added activity to beta test. Override the digital divide
      with additional clickthroughs
    </p>
    <button className='self-start'>
     
      <a href="#" className="min-w relative group  rounded-sm">
     <span className="text-left text-lg bg-gradient-to-b bg-clip-text to-[#C59B4F] from-[#F1C27A] text-transparent ">
     Read More...
     </span> 
              <div className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F0D77B] scale-x-0 group-hover:scale-x-100 transition-transform -mb-1"></div>
            </a>
    </button>
  </div>
  )
}

export default Blogpost2
