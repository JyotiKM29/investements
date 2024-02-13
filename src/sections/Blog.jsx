import React from "react";

const Blog = () => {
  return (
    <section className=" mx-auto max-w-screen  h-screen ">
      <div className="mx-auto flex  flex-col  justify-center max-w-screen   px-8 md:px-24 py-4 h-full">
        <div className="flex-col  justify-center space-y-7">
          <header className="uppercase text-4xl font-semibold">
            <h3>
              Our <span className="gradient">Blog</span>
            </h3>
          </header>
          <p className="font-light text-lg text-zinc-500 tracking-widerer leading-snug">
            We provide our investors with fully-managed, high-yield investment
            products catering to all levels of risk appetite. Our team has the
            expertise to provide all of our investors with the education,
            guidance and support required to maximize profits both from a short
            and long-term perspective through their entire investment journey.{" "}
          </p>

          {/* grid */}

          <div className=" flex flex-col h-[78vh] justify-between">
            {/* images */}
            <div className="flex">
              <div className="w-[45%]">
                <img
                  src="/hero.png"
                  alt="hero img"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-[55%] grid grid-cols-2 grid-rows-2 ">
                <div>
                  <img
                    src="/blog.png"
                    alt="hero img"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className=" bg-white/20 px-4 py-8 space-y-2">
                  <header className="flex justify-between">
                    <span className="uppercase text-[#F0D77B]">
                      developnment
                    </span>
                    <span className="text-white/40">11 March 2023</span>
                  </header>
                  <h3 className="text-white/30 text-2xl leading-none">
                    Best Website to research for your next project
                  </h3>
                  <p className="text-base font-light text-white/40">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs
                  </p>
                  <button className="text-lg bg-gradient-to-b bg-clip-text to-[#C59B4F] from-[#F1C27A] text-transparent ">
                    Read More...
                  </button>
                </div>
                <div className=" bg-white/20 px-4 py-8 space-y-2">
                  <header className="flex justify-between">
                    <span className="uppercase text-[#F0D77B]">
                      developnment
                    </span>
                    <span className="text-white/40">11 March 2023</span>
                  </header>
                  <h3 className="text-white/30 text-2xl leading-none">
                    Best Website to research for your next project
                  </h3>
                  <p className="text-base font-light text-white/40">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs
                  </p>
                  <button className="text-lg bg-gradient-to-b bg-clip-text to-[#C59B4F] from-[#F1C27A] text-transparent ">
                    Read More...
                  </button>
                </div>

                <div>
                  <img
                    src="/blog2.png"
                    alt="hero img"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <button className="self-center  border border-[#F0D77B] text-[#F0D77B] px-6 py-2 text-xl rounded-md">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
