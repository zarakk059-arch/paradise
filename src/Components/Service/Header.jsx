import React, { useState, useEffect, useRef } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { MdContentPaste } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={headerRef} className="sticky top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-20 pt-6 pb-4">
        <img src={Logo} alt="logo" className="w-20 sm:w-24 md:w-32 lg:w-40" />

        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-9 text-black font-semibold text-sm">
            <li>
              <Link className="hover:text-pink-500 transition" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/service">
                SERVICES
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/pages">
                PAGES
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/gallery">
                GALLERY
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/shop">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/blogs">
                BLOGS
              </Link>
            </li>
            <li>
              <Link className="hover:text-pink-500 transition" to="/contact">
                CONTACTS
              </Link>
            </li>
          </ul>

          <div className="w-6 lg:w-10"></div>

          <div className="flex items-center gap-8 text-black">
            <LiaSearchSolid className="cursor-pointer w-5 h-5 hover:text-gray-400 transition" />
            <MdContentPaste className="cursor-pointer w-5 h-5 hover:text-gray-400 transition" />
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-2 text-black">
          <LiaSearchSolid className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5" />
          <MdContentPaste className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5" />

          <HiMenu
            className="text-xl sm:text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <ul
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col text-gray-700 font-semibold shadow-lg z-999"
        >
          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/"
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/service"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </Link>
          </li>

          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/pages"
              onClick={() => setOpen(false)}
            >
              PAGES
            </Link>
          </li>

          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/gallery"
              onClick={() => setOpen(false)}
            >
              GALLERY
            </Link>
          </li>

          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/shop"
              onClick={() => setOpen(false)}
            >
              SHOP
            </Link>
          </li>

          <li className="border-b border-gray-100">
            <Link
              className="block px-6 py-4"
              to="/blogs"
              onClick={() => setOpen(false)}
            >
              BLOGS
            </Link>
          </li>

          <li>
            <Link
              className="block px-6 py-4"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              CONTACTS
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
