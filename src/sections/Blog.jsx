import React from "react";
import Blogpost from "../component/Blogpost";
import Blogpost2 from "../component/Blogpost2";

const Blog = () => {
  return (
    <section  className=' mx-auto max-w-screen min-h-[230vh] md:max-h-[160vh] lg:min-h-[120vh]  ' >
    <div className="mx-auto flex  flex-col gap-4  max-w-screen-2xl   px-8 md:px-24 py-4 h-full ">
        <div className="flex-col  justify-center gap-4">
          <header className="uppercase text-center lg:text-left text-4xl lg:text-6xl font-semibold ">
            <h3>
              Our <span className="gradient">Blog</span>
            </h3>
          </header>
          <p className='text-center lg:text-left font-light   lg:text-lg text-base text-zinc-500 leading-snug tracking-wider  '>
            We provide our investors with fully-managed, high-yield investment
            products catering to all levels of risk appetite. Our team has the
            expertise to provide all of our investors with the education,
            guidance and support required to maximize profits both from a short
            and long-term perspective through their entire investment journey.{" "}
          </p>
          </div>
          {/* grid */}

          <div className=" flex flex-col h-[78vh] justify-between">
            {/* images */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[45%] bg-center bg-cover  bg-[url('/public/hero.png')] " >
              <Blogpost2 />
              </div>
              <div className="lg:w-[55%] grid  grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 ">
                <div>
                  <img
                    src="/blog.png"
                    alt="hero img"
                    className="object-cover w-full h-full"
                  />
                </div>

               <Blogpost />
               <div className="hidden sm:block">
               <Blogpost  />
               </div>
               
               

                <div >
                  <img
                    src="/blog2.png"
                    alt="hero img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="sm:hidden">
               <Blogpost  />
               </div>
              </div>
            </div>

            <button className="self-center my-10 border
             border-[#F0D77B] text-[#F0D77B] px-6 py-2 text-xl rounded-md hover:bg-[#F0D77B]/10 active: active:animate-bounce transition ">Explore More</button>
          </div>
       
      </div>
    </section>
  );
};

export default Blog;
