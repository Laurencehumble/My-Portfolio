import React from "react";
import Proj1 from "../../assets/project/Proj1.png";
import Proj2 from "../../assets/project/Proj2.png";
import Proj3 from "../../assets/project/Proj3.png";
import Proj4 from "../../assets/project/Proj4.png";
import Proj5 from "../../assets/project/Proj5.png";
import Proj6 from "../../assets/project/Proj6.png";
import Proj7 from "../../assets/project/Proj7.png";
import Proj8 from "../../assets/project/Proj8.png"
import Proj9 from "../../assets/project/Proj9.png"
import Proj10 from "../../assets/project/Proj10.png"

const Project = () => {
  return (
    <div id="projects" className="relative overflow-hidden flex flex-col items-center mb-20 px-4 sm:px-6 lg:px-12">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-patua_one font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            This is{" "}
            <span className="text-[#12867F] font-bold">My Project</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-[#4E635C] max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            I’m a web developer willing to learn from your company. Creating
            website designs, Frontend, and Backend development...
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          {[
            { img: Proj1, name: "Food Box", link: "https://food-box-sigma.vercel.app/" },
            { img: Proj2, name: "LodiShop", link: "https://ecommerce-iota-ten-49.vercel.app/" },
            { img: Proj3, name: "Shop lang", link: "https://reactjs-ecommerce-lime.vercel.app/" },
            { img: Proj4, name: "Branch Locator", link: "https://map-locator-khaki.vercel.app/" },
            { img: Proj5, name: "Tile Visualizer", link: "https://laurencehumble.github.io/fc-tile-visualizer/" },
            { img: Proj6, name: "Virtual Reality UI/UX", link: "https://www.figma.com/proto/KLVPOnbngfJ3Uin1Ofv8tM/Untitled" },
            { img: Proj7, name: "Ecommerce UI/UX", link: "https://www.figma.com/proto/MiV6NKWqZg7AgFnOmKIXY0/Ecommerce-Website-Practice-3" },
	    { img: Proj8, name: "Couply UI/UX", link: "https://www.figma.com/proto/GarSwKhHbC6iiDzsjfBR42/Practice-2?page-id=0%3A1&node-id=1-2&node-type=CANVAS&viewport=868%2C393%2C0.24&t=6jvEBbk4ZHAddSex-1&scaling=scale-down&content-scaling=fixed" },
	    { img: Proj9, name: "Friskay UI/UX", link: "https://www.figma.com/proto/DbYpCI7emBFMcunWfuppIy/Practice-1?page-id=1%3A2&node-id=303-241&node-type=FRAME&viewport=912%2C337%2C0.67&t=oMjmBCpyg6EUiu7m-1&scaling=min-zoom&content-scaling=fixed" },
	    { img: Proj10, name: "Tile Depot UI/UX", link: "https://www.figma.com/proto/yHTKubb9rWR6UcZiulaTKv/DESIGN-SYSTEM-FC?page-id=279%3A2127&node-id=5322-9274&viewport=-22051%2C1083%2C0.84&t=MnOsqUYDH6GuNLXB-1&scaling=min-zoom&starting-point-node-id=2207%3A24924&content-scaling=fixed" },


          ].map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-video border border-primary border-opacity-50 rounded-xl overflow-hidden relative hover:shadow-lg"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <p className="text-base sm:text-lg font-patua_one mt-4 text-[#4E635C] group-hover:text-[#12867F] transition-colors">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;