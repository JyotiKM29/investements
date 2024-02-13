import React from 'react'

const Blogpost = () => {
  return (
    <div className="flex flex-col justify-between  bg-white/10 px-[5%] py-[10%] space-y-2 h-full w-full">
    <header className="flex justify-between">
      <span className="uppercase text-[#F0D77B]">
        development
      </span>
      <span className="text-white/40">11 March 2023</span>
    </header>
    <h3 className="text-white/30 text-xl  leading-none"  style={{fontFamily:'Noto Serif' }} >
      Best Website to research for your next project
    </h3>
    <p className="text-sm font-light text-white/40">
      Capitalize on low hanging fruit to identify a ballpark value
      added activity to beta test. Override the digital divide
      with additional clickthroughs
    </p>
    <button className="text-left text-base bg-gradient-to-b bg-clip-text to-[#C59B4F] from-[#F1C27A] text-transparent ">
      Read More...
    </button>
  </div>
  )
}

export default Blogpost
