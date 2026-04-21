import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { MdContentPaste } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-linear-to-r from-pink-300 to-blue-300 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-14 py-4">

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-sm">
          
          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/">HOME</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/service">SERVICES</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/pages">PAGES</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/gallery">GALLERY</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/shop">SHOP</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/blogs">BLOGS</Link>
          </li>

          <li className="cursor-pointer hover:text-pink-500 transition">
            <Link to="/contact">CONTACTS</Link>
          </li>
        </ul>

        {/* MOBILE ICONS */}
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

        {/* RIGHT ICONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8 text-lg text-white">
          <LiaSearchSolid className="cursor-pointer size-6 hover:text-gray-200 transition" />
          <MdContentPaste className="cursor-pointer size-5 hover:text-gray-200 transition" />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 px-10 py-5 text-gray-700 font-semibold shadow-md z-50">
          
          <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
          <li><Link to="/service" onClick={() => setOpen(false)}>SERVICES</Link></li>
          <li><Link to="/pages" onClick={() => setOpen(false)}>PAGES</Link></li>
          <li><Link to="/gallery" onClick={() => setOpen(false)}>GALLERY</Link></li>
          <li><Link to="/shop" onClick={() => setOpen(false)}>SHOP</Link></li>
          <li><Link to="/blogs" onClick={() => setOpen(false)}>BLOGS</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACTS</Link></li>

        </ul>
      )}
    </div>
  );
};

export default Navbar;