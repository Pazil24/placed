import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-green-800">
      <h1 className="font-comfortaa md:text-5xl text-3xl px-4 py-4 text-green-800">
        placed.
      </h1>
      <ul className="md:flex hidden">
        <li className="p-4 text-xl">Home</li>
        <li className="p-4 text-xl">Users</li>
        <li className="p-4 text-xl">Contact</li>
        <li className="p-4 text-xl">About</li>
      </ul>
      

      <div onClick={handleNav} className="md:hidden block">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="font-comfortaa text-5xl px-4 py-4 text-green-900">placed.</h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Users</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
