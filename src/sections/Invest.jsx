import React from 'react'

const data = [
    {
        topic :'High Fixed Returns',
        detail:'Build your wealth with a personalised, diversified portfolio with expert advice. '

    },
    {
        topic :'Outperforming Market',
        detail:'Earn returns that are greater than the market average with minimal risk and a broader risk profile, we&apos;ve proudly been beating the market since 2016 for our clients.'

    },
    {
        topic :'Get Funded',
        detail:'Operating under a model of profit sharing, we make money when our investors make money and our success depends on your success. '

    },
]

const Invest = () => {
  return (
    <section  id='invest' className='relative mx-auto max-w-screen  min-h-screen lg:h-screen'>
    <div className='-ml-20 absolute -z-10 grid  grid-cols-4 lg:grid-cols-6 divide-x-[.5px] divide-white/20  h-full w-full '>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
           <div className='w-1/6 h-screen'></div>
         
        </div>
   <div className="mx-auto flex  flex-col  justify-center max-w-screen-2xl   px-8 md:px-24 py-4 min-h-full lg:h-full">
   <div className='flex-col  justify-center space-y-6 lg:space-y-14'>
   <header className='uppercase text-4xl text-center lg:text-left lg:text-5xl font-semibold'>
        <h3>Invest in <span className='gradient'>DUBAI</span></h3>
    </header>

    <p className='text-center lg:text-left font-light text-base lg:text-lg text-zinc-500 leading-snug tracking-wider  '>
    We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.
    </p>

    {/* sections */}
    <div className='  flex flex-col lg:flex-row gap-10 '>
    {
        data.map((data) => (
            <div className='  h-[11rem] lg:w-1/3 lg:h-[20rem] bg-[#1A1A1A] rounded-lg px-4 py-4  border-b-2 border-[#F0D77B] hover:scale-105 transition-transform'>
                <h4 className='text-center lg:text-left text-xl text-[#F0D77B] lg:text-2xl '>{data.topic}</h4>
                <p className='text-center lg:text-left font-light   lg:text-lg text-base text-zinc-500 leading-snug tracking-wider  '>{data.detail}</p>
            </div>
        ))
    }
        
    </div>

   </div>
  
    </div>
      
    </section>
  )
}

export default Invest
