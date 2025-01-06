import React from 'react';
import Image1 from "../../assets/hero/image1.jpg";
import { TypedText } from "../../components/Typed/Typed";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[600px] bg-[#E3E6F3] flex justify-center items-center">
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            {/* text content section */}
            <div className="flex flex-col justify-center pt-6 sm:pt-0 pb-6 sm:pb-0 text-center sm:text-left order-2 sm:order-1">
            <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <h2 className="text-[24px] sm:text-[32px] font-patua_one">Hello, It’s Me</h2>
              </div>

              <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <h1 className="text-[48px] sm:text-[56px] font-patua_one">Rhey Laurence Buday</h1>
              </div>

              <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <h2 className="text-[48px] sm:text-[56px] font-patua_one font-bold mb-4">
                And I’m <span className="text-[48px] sm:text-[56px] font-patua_one font-bold text-[#12867F]"><TypedText /></span>
              </h2>
              </div>

              <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
              <p className="text-[20px] sm:text-[24px] font-patua_one text-[#4E635C]">
                I’m a web developer willing to learn from your company. Creating website design, Frontend, and Backend developer...
              </p>
              </div>
            </div>
            {/* image section */}
            <div className="order-1 sm:order-2 flex justify-center sm:justify-end items-center pt-6 sm:pt-0 pb-6 sm:pb-0">
              <div className="h-[300px] sm:h-[440px] w-[440px] flex justify-center">
              <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                <img
                  src={Image1}
                  alt=""
                  className="object-cover rounded-full h-[300px] w-[300px] sm:h-[440px] sm:w-[440px]"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;