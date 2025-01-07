import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Project",
    link: "/#projects",
  },
  {
    id: 2,
    name: "Skill",
    link: "/#skills",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
    className={`flex items-center h-[100px] sticky top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? "bg-[#E3E6F3] shadow-lg" : "bg-[#E3E6F3]"
    }`}
  >
    <div className="container flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <div>
        <a
          href="#"
          className="font-normal text-2xl font-patua_one underline flex items-center"
        >
          Portfolio
        </a>
      </div>
        {/* Hamburger Button */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-4xl focus:outline-none"
            onClick={toggleMenu}
          >
            <IoMenu />
          </button>
        </div>
        {/* Navbar */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row py-4 sm:gap-6 absolute sm:static bg-[#E3E6F3] w-full sm:w-auto top-[100px] left-0 sm:left-auto z-50 drop-shadow-md sm:drop-shadow-none transition-all duration-300`}
        >
          <ul className="flex flex-col sm:flex-row items-center sm:items-center sm:gap-6">
            {Menu.map((data) => (
              <li key={data.id} className="w-full text-center sm:w-auto">
                <a
                  href={data.link}
                  className="block px-6 py-2 text-[16px] sm:text-[18px] font-patua_one font-normal text-[#333] hover:text-[#12867F] hover:underline transition-colors duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
