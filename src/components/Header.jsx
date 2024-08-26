import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fix_my_speaker_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#FFFFFF] sticky top-0 z-50">
      <nav className=" container xl:mx-auto max-w-[1400px] text-[16px] h-[72px] flex justify-between lg:justify-around px-3 xl:px-0 items-center shadow-sm">
        <div>
          <p className="cursor-pointer">
            <Link to="/">
              <img src={logo} className="w-[180px] h-[40px]" />
            </Link>
          </p>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-black fa-xl"></i>
        </div>

        <div
          className={`lg:flex absolute top-16 left-0 right-0 bg-gray-500 font-semibold text-white py-6 lg:text-black ${
            menuOpen ? "block " : "hidden"
          } lg:static lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col items-center lg:flex-row lg:items-center lg:text-[16px] xl:text-[17px]">
            <li className="flex cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
              <Link to="/">Fix My Speaker</Link>
            </li>
            {/* <li className="flex items-center cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
              <Link to="/blog">Blog</Link>
            </li> */}
            <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-[#1634D4]">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
