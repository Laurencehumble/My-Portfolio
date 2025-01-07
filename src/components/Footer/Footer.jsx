import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#E3E6F3] text-gray-900 py-6">
      <div className="container flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div>
          <h1 className="font-normal text-2xl font-patua_one underline flex items-center">
            Portfolio
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-sm font-medium mb-4">
          <a
            href="#projects"
            className="text-[16px] sm:text-[18px] font-patua_one font-normal text-[#333] hover:text-[#12867F] hover:underline transition-colors duration-200"
          >
            Project
          </a>
          <a
            href="#skills"
            className="text-[16px] sm:text-[18px] font-patua_one font-normal text-[#333] hover:text-[#12867F] hover:underline transition-colors duration-200"
          >
            Skill
          </a>
          <a
            href="#contact"
            className="text-[16px] sm:text-[18px] font-patua_one font-normal text-[#333] hover:text-[#12867F] hover:underline transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/rhey-laurence-buday-a012b9218/" target="_blank"
            className="text-gray-700 hover:text-[#12867F]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
           href="https://github.com/Laurencehumble" target="_blank"
            className="text-gray-700 hover:text-[#12867F]"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:rheylaurencebuday@gmail.com" target="_blank"
            className="text-gray-700 hover:text-[#12867F]"
            aria-label="Gmail"
          >
            <BiLogoGmail size={20} />
          </a>
        </div>
        </div>
        <div className="container flex flex-col justify-between items-center">
        {/* Divider Line */}
        <div className="flex justify-center items-center border-t border-[#12867F] w-full opacity-40 my-4"></div>

        {/* Copyright Text */}
        <p className="text-xs text-[#4E635C] font-patua_one">
          © 2024 Portfolio by Rhey Laurence Buday. All Rights Reserved.
        </p>
        </div>
    </footer>
  );
};

export default Footer;