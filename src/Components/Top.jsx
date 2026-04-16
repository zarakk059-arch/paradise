import React from "react";
import Logo from "../../public/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { RiMailCheckLine } from "react-icons/ri";
import { TiMail } from "react-icons/ti";
import { FiMail } from "react-icons/fi";

const Top = () => {
  return (
    <div className="w-full flex items-center px-10 py-4 mt-1">
      <a href="/" className="mx-auto md:mx-0">
        <img
          src={Logo}
          alt="Logo"
          className="w-32 md:w-45 ml-0 md:ml-12 cursor-pointer"
        />
      </a>

      <div className="hidden md:flex items-center gap-10 lg:gap-19 ml-10 lg:ml-40">
        <div className="flex items-center gap-3 lg:gap-5">
          <IoLocationOutline className="text-xl size-8 lg:text-2xl text-pink-400" />
          <div>
            <p className="font-semibold text-sm lg:text-base leading-tight">
              40 Baria Street 133/2
            </p>
            <span className="text-gray-500 text-xs lg:text-sm">
              NewYork City, US
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          <FiMail className="text-xl  size-10 lg:text-2xl text-pink-400" />
          <div className="font-semibold leading-tight text-sm lg:text-base">
            <p>001-1234-8888</p>
            <a
              href="mailto:info.deercreative@gmail.com"
              className="text-gray-500 font-normal text-xs lg:text-sm hover:text-pink-300 transition"
            >
              info.deercreative@gmail.com
            </a>
          </div>
        </div>

        <button className="px-5 lg:px-7 py-2 lg:py-2.5 rounded-4xl text-white font-medium  bg-linear-to-r from-pink-300 to-blue-300 hover:opacity-90 transition text-sm lg:text-base whitespace-nowrap">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default Top;
