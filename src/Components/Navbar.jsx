import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { MdContentPaste } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full flex items-center justify-between px-4 md:px-14 py-4 bg-linear-to-r from-pink-300 to-blue-300 z-50">
      <ul className="hidden md:flex items-center gap-8 ml-10 text-white font-semibold text-sm">
        <li className="cursor-pointer hover:text-pink-500 transition">HOME</li>
        <li className="cursor-pointer hover:text-pink-500 transition">
          SERVICES
        </li>
        <li className="cursor-pointer hover:text-pink-500 transition">PAGES</li>
        <li className="cursor-pointer hover:text-pink-500 transition">
          GALLERY
        </li>
        <li className="cursor-pointer hover:text-pink-500 transition">SHOP</li>
        <li className="cursor-pointer hover:text-pink-500 transition">BLOGS</li>
        <li className="cursor-pointer hover:text-pink-500 transition">
          CONTACTS
        </li>
      </ul>

      <div className="flex md:hidden items-center justify-between w-full">
        <HiMenu
          className="text-2xl text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center gap-5 text-xl text-white">
          <LiaSearchSolid className="cursor-pointer" />
          <MdContentPaste className="cursor-pointer" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 mr-14 text-lg text-white">
        <LiaSearchSolid className="cursor-pointer size-6 hover:text-gray-200 transition" />
        <MdContentPaste className="cursor-pointer size-5 hover:text-gray-200 transition" />
      </div>

      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 px-10 py-5 text-gray-700 font-semibold shadow-md z-50">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>PAGES</li>
          <li>GALLERY</li>
          <li>SHOP</li>
          <li>BLOGS</li>
          <li>CONTACTS</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
