import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Top = () => {
  return (
    <div className="w-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:hidden items-center gap-3 text-center w-full">
          <a
            href="mailto:info.deercreative@gmail.com"
            className="flex items-center gap-2"
          >
            <FiMail className="text-white text-lg" />
            <span>info.deercreative@gmail.com</span>
          </a>

          <div className="flex items-center gap-2">
            <FiPhone className="text-white text-lg" />
            <span>002-6666-8888</span>
          </div>

          <span>Open hours: 8.00-18.00 Mon-Fri</span>

          <div className="flex items-center gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
          </div>
        </div>

        <div className="hidden md:flex lg:hidden w-full items-center justify-between px-0">
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info.deercreative@gmail.com"
              className="flex items-center gap-2"
            >
              <FiMail className="text-white text-lg" />
              <span>info.deercreative@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <FiPhone className="text-white text-lg" />
              <span>002-6666-8888</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span>Open hours: 8.00-18.00 Mon-Fri</span>

            <div className="flex items-center gap-4">
              <FaFacebookF className="text-white text-lg" />
              <FaTwitter className="text-white text-lg" />
              <FaGooglePlusG className="text-white text-lg" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <a
              href="mailto:info.deercreative@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <FiMail className="text-white text-lg" />
              <span>info.deercreative@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <FiPhone className="text-white text-lg" />
              <span>002-6666-8888</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span>Open hours: 8.00-18.00 Mon-Fri</span>

            <span className="h-6 w-px bg-white opacity-70"></span>

            <div className="flex items-center gap-4">
              <FaFacebookF className="text-white text-lg" />
              <FaTwitter className="text-white text-lg" />
              <FaGooglePlusG className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
