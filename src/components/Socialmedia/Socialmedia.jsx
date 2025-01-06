import React from 'react';
import Soc1 from "../../assets/socialmedia/linkedin.png"
import Soc2 from "../../assets/socialmedia/github-logo.png"
import Soc3 from "../../assets/socialmedia/gmail.png"
import Tooltip from "../../components/Tooltip/Tooltip";
const Socialmedia = () => {
  return (
    <div className="relative overflow-hidden min-h-[600px] flex justify-center items-center mb-40">
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            
            {/* Icon section */}
            <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
            <div className="flex flex-col space-x-6 mt-4">
            <div className="flex items-center flex-col">
            <div className="flex flex-row">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rhey-laurence-buday-a012b9218/" className="group w-[130px] h-[130px] lg:w-[155px] lg:h-[155px] m-3 lg:m-5 flex items-center justify-center rounded-full cursor-pointer self-end animate-updown ease-in-out transform origin-bottom">
            <Tooltip message="Click me!">
            <img src={Soc1} alt="" className="drop-shadow-md"/>
            </Tooltip>
            </a>
            {/* github */}
            <a href="https://github.com/Laurencehumble" className="group w-[105px] h-[105px] lg:w-[120px] lg:h-[120px] m-3 lg:m-5 flex items-center justify-center rounded-full cursor-pointer animate-updown ease-in-out transform origin-bottom">
            <Tooltip message="Click me!">
            <img src={Soc2} alt="" className="drop-shadow-md"/>
            </Tooltip>
            </a>
            </div>
            {/* Gmail */}
            <a href="mailto:rheylaurencebuday@gmail.com" className="group m-2 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-full cursor-pointer animate-updown ease-in-out transform origin-bottom">
            <Tooltip message="Click me!">
            <img src={Soc3} alt="" className="drop-shadow-md"/>
            </Tooltip>
            </a>
            </div>
            </div>
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center pt-6 sm:pt-0 pb-6 sm:pb-0 text-center sm:text-left order-2 sm:order-1">
              <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <h2 className="text-[48px] sm:text-[56px] font-patua_one font-bold mb-4">
               My Online <span className="text-[48px] sm:text-[56px] font-patua_one font-bold text-[#12867F] ">Platforms</span>
              </h2>
              </div>

              <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <p className="text-[20px] sm:text-[24px] font-patua_one text-[#4E635C]">
              Explore my social media platforms where I share insights, updates, and engage with the community.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Socialmedia;
