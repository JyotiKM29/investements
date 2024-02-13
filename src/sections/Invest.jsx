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
    <section  className=' mx-auto max-w-screen  h-screen '>
   <div className="mx-auto flex  flex-col  justify-center max-w-screen   px-8 md:px-24 py-4 h-full">
   <div className='flex-col  justify-center space-y-14'>
   <header className='uppercase text-5xl font-semibold'>
        <h3>Invest in <span className='gradient'>DUBAI</span></h3>
    </header>

    <p className='para'>
    We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.
    </p>

    {/* sections */}
    <div className='flex gap-10 '>
    {
        data.map((data) => (
            <div className='w-1/3 h-[20rem] bg-yellow-100 bg-opacity-10 rounded-lg px-4 py-4  border-b-2 border-[#F0D77B]'>
                <h4 className='text-[#F0D77B] text-2xl '>{data.topic}</h4>
                <p className='para text-base '>{data.detail}</p>
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
