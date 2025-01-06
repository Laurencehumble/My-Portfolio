import React from 'react';
import Proj1 from "../../assets/project/Proj1.png"
import Proj2 from "../../assets/project/Proj2.png"
import Proj3 from "../../assets/project/Proj3.png"
import Proj4 from "../../assets/project/Proj4.png"
import Proj5 from "../../assets/project/Proj5.png"
import Proj6 from "../../assets/project/Proj6.png"
import Proj7 from "../../assets/project/Proj7.png"
import Proj8 from "../../assets/project/Proj8.png"
import Proj9 from "../../assets/project/Proj9.png"
import Proj10 from "../../assets/project/Proj10.png"
const Project = () => {
  return (
    <div className="relative overflow-hidden flex justify-center items-center">
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 items-center mb-20">
                        {/* text content section */}
                        <div className="flex flex-col justify-center pt-6 sm:pt-0 pb-6 sm:pb-0 text-center order-1">
              <div className="flex justify-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <h2 className="text-[48px] sm:text-[56px] font-patua_one font-bold mb-4">
               This is <span className="text-[48px] sm:text-[56px] font-patua_one font-bold text-[#12867F]">My Project</span>
              </h2>
              </div>

              <div className="flex justify-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <p className="text-[20px] sm:text-[24px] font-patua_one text-[#4E635C] max-w-[618px]">
              I’m a web developer willing to learn from your company. creating website design, Frontend, and Backend developer...
              </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center">
                        {/* text content section */}
            <div className="flex flex-col justify-center pt-6 sm:pt-0 pb-6 sm:pb-0 text-center order-1">
              <div className="justify-center grid grid-cols-1 lg:grid-cols-2 items-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
             <a href="https://food-box-sigma.vercel.app/" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj1} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] group-hover:text-[#12867F] font-patua_one">
                 Food Box
                </p>
              </a>

              <a href="https://ecommerce-iota-ten-49.vercel.app/" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj2} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  LodiShop
                </p>
              </a>

             <a href="https://reactjs-ecommerce-lime.vercel.app/" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj3} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Shop lang
                </p>
              </a>

             <a href="https://map-locator-khaki.vercel.app/" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj4} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Branch Locator
                </p>
              </a>

              <a href="https://laurencehumble.github.io/fc-tile-visualizer/" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj5} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Tile Visualizer
                </p>
              </a>

              {/* Figma Project */}

              <a href="https://www.figma.com/proto/KLVPOnbngfJ3Uin1Ofv8tM/Untitled?page-id=0%3A1&node-id=1-2&viewport=692%2C591%2C0.19&t=xKhaBUwmevhtX40u-1&scaling=min-zoom&content-scaling=fixed" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj6} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Next Gen Virtual Reality UI/UX
                </p>
              </a>

              <a href="https://www.figma.com/proto/MiV6NKWqZg7AgFnOmKIXY0/Ecommerce-Website-Practice-3?page-id=1%3A3301&node-id=1-3302&viewport=454%2C199%2C0.2&t=eVysC3cTd9BbCTn6-1&scaling=min-zoom&content-scaling=fixed" target="_blank"  className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj7} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Food Box UI/UX
                </p>
              </a>

              <a href="https://www.figma.com/proto/GarSwKhHbC6iiDzsjfBR42/Practice-2?page-id=0%3A1&node-id=1-2&node-type=CANVAS&viewport=868%2C393%2C0.24&t=6jvEBbk4ZHAddSex-1&scaling=scale-down&content-scaling=fixed" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj8} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Couply UI/UX
                </p>
              </a>

              <a href="https://www.figma.com/proto/DbYpCI7emBFMcunWfuppIy/Practice-1?page-id=1%3A2&node-id=303-241&node-type=FRAME&viewport=912%2C337%2C0.67&t=oMjmBCpyg6EUiu7m-1&scaling=min-zoom&content-scaling=fixed" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj9} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                 Friskay UI/UX
                </p>
              </a>

              <a href="https://www.figma.com/proto/yHTKubb9rWR6UcZiulaTKv/DESIGN-SYSTEM-FC?page-id=279%3A2127&node-id=5322-9274&viewport=-22051%2C1083%2C0.84&t=MnOsqUYDH6GuNLXB-1&scaling=min-zoom&starting-point-node-id=2207%3A24924&content-scaling=fixed" target="_blank" className="flex justify-center items-center flex-col mb-16 lg:mb-[70px] group">      
                <div className="w-[224px] h-[167px] sm:w-[336px] sm:h-[250px] lg:w-[448px] lg:h-[333.78px] border border-[#12867F] border-opacity-40 rounded-lg m-4 overflow-hidden">
                  <img 
                    src={Proj10} 
                    alt="" 
                    className="transition-transform duration-300 hover:scale-125 object-cover w-full h-full" 
                  />
                </div>
                <p className="text-[13px] sm:text-[16px] font-patua_one group-hover:text-[#12867F]">
                  Tile Depot UI/UX
                </p>
              </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
