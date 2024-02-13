import React from "react";
import { Minus, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className=" mx-auto max-w-screen  h-[95vh] ">
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center max-w-screen-2xl   px-8 md:px-16 py-4 h-full ">
        {/* text */}
        <div className=" flex-1 py-14 lg:w-1/3 flex flex-col  gap-1  justify-center  items-center lg:items-start h-full  ">
          <div className="border hidden lg:block border-b-[.5px] border-white/90 w-4 lg:w-10 lg:-mb-2"></div>
          <h3
            className="text-center  lg:text-left text-4xl  md:text-6xl xl:text-[4.5rem] md:leading-tight"
            style={{ fontFamily: "Noto Serif", fontWeight: "200" }}
          >
            Empower Your Business
            <span
              className=" transition font-display font-semibold leading-none bg-gradient-to-b from-1% bg-clip-text text-transparent from-[#FFE998] to-[#57370D] tracking-tight"
              style={{ fontFamily: "Noto Serif", fontWeight: "200" }}
            >
              &nbsp;Finances
            </span>
          </h3>
          <p className="text-center lg:text-left  lg:text-lg font-light text-base text-zinc-500 leading-snug tracking-wider  ">
            Your Expert Partner in Swift Business Financing, Bridging Gaps, and
            Ensuring Success. Thrive with Us!
          </p>
          <button className="flex text-sm lg:text-base gap-2 text-[#F0D77B] my-4">
            <a href="#" className="relative group flex gap-2 hover:bg-[#F0D77B]/10 p-2 rounded-sm">
              Discover More <MoveRight className="h-4 w-4" />
              <div className="absolute left-0 bottom-0 w-full h-[.5px] bg-[#F0D77B] scale-x-0 group-hover:scale-x-100 transition-transform "></div>
            </a>
          </button>
        </div>
        {/* Image  */}
        <div className=" lg:w-2/3 flex flex-col lg:flex-row gap-0 space-x-0 space-y-0 lg:justify-end items-center h-full  ">
          {/* part 1 */}

          <img
            src="/hero.png"
            alt="hero img"
            className="lg:h-3/5 lg:w-7/12 xl:w-9/12 h-4/5 object-cover overflow-hidden"
          />

          {/* part 2 */}
          <div className="   min-h min-w">
            <ul className="flex lg:flex-col  gap-4 lg:gap-28">
              <li className="font-light text-white/80 lg:rotate-90 hover:text-white hover:font-normal transition-transform hover:scale-110">
                Facebook
              </li>
              <li className="font-light text-white/80 lg:rotate-90 hover:text-white hover:font-normal transition-transform hover:scale-110">
                Instagram
              </li>
              <li className="font-light text-white/80 lg:rotate-90 hover:text-white hover:font-normal transition-transform hover:scale-110">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
