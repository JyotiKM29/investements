import React from "react";
import ContactDetail from "../component/ContactDetail";
import ImageStack from "../component/ImageStack";
import Brands from "../component/Brands";

const Connect = () => {
  return (
    <section id='connect' className=" mx-auto max-w-screen  h-screen  bg-white/10">
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-center  lg:gap-4 h-full max-w-screen-2xl ">
       
          <ContactDetail />
      
     
          <ImageStack />
     
      </div>

      <Brands />
    </section>
  );
};

export default Connect;
