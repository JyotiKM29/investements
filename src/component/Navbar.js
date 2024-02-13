
import React, { useEffect } from "react";


const Navbar = () => {
 

  return (
    <header className="fixed inset-x-0 top-0 z-50  bg-zinc-950/80 backdrop-blur transition will-change-auto ">
      <div className="mx-auto max-w-screen   px-8 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* brand name  */}
          <div className="flex">
           <img src="/Unified logo.svg" alt='logo' />
          </div>

          {/* navbar */}
          <nav className=" z-50 col-span-4 md:flex w-full items-center justify-end hidden ">
           
              <ul
                data-orientation="horizontal"
                className="flex items-center"
                dir="ltr"
              >
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                    COMPANY
                  
                </li>
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                    INVESTORS
                  
                </li>
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                    PRODUCTS
                  
                </li>
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                    JOURNAL
                  
                </li>
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                    REACH US
                  
                </li>
                <li
                
                   
                    className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                  >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                </li>
                
              </ul>
           
          </nav>

         
        </div>
      </div>
    </header>
  );
};

export default Navbar;
