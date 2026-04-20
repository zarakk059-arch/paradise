import React from "react";
import Logo from "../../public/logo.png";

import img1 from "../../public/gallery-img05.jpg";
import img2 from "../../public/gallery-img06.jpg";
import img3 from "../../public/gallery-img07.jpg";
import img4 from "../../public/gallery-img08.jpg";
import img5 from "../../public/gallery-img09.jpg";
import img6 from "../../public/gallery-img10.jpg";

/* React Icons */
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Newslatter = () => {
  return (
    <div className="bg-gray-100 pt-10 sm:pt-12 lg:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 xl:px-28">
        <div
          className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-y-10 sm:gap-y-12 
          lg:gap-x-10 xl:gap-x-14
          pb-12
        "
        >
          <div className="space-y-4 sm:space-y-5">
            <img src={Logo} alt="logo" className="w-28 sm:w-32" />

            <p className="text-gray-700 text-sm">
              Open hours: 8.00-18.00 Mon-Fri
            </p>

            <div className="flex gap-3 sm:gap-4">
              {[FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white hover:scale-110 transition"
                  >
                    <Icon />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg font-semibold">Contacts</h2>

            <p className="text-gray-800 font-medium">001-1234-8888</p>

            <p className="text-gray-600 wrap-break-word">
              info.deercreative@gmail.com
            </p>

            <p className="text-gray-600 font-medium leading-relaxed">
              40 Baria Street 133/2
              <br />
              NewYork City, US
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Our Newsletter</h2>

            <div className="flex items-stretch bg-white rounded-full overflow-hidden shadow-sm w-full">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm outline-none min-w-0"
              />

              <button className="bg-linear-to-r from-pink-300 to-blue-300 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium whitespace-nowrap flex items-center justify-center">
                Subscribe
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Subscribe to our mailing list to get the updates to your email
              inbox.
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="
              grid grid-cols-3 
              gap-2 sm:gap-3 lg:gap-2 xl:gap-3
            "
            >
              {[img1, img2, img3, img4, img5, img6].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="gallery"
                  className="w-full h-14 sm:h-16 object-cover rounded-md hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-3 sm:py-4">
        <div
          className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-20 xl:px-28
          flex flex-col md:flex-row 
          justify-between items-center 
          text-xs sm:text-sm text-gray-700 
          gap-3
        "
        >
          <p className="text-center md:text-left">
            Copyright ©2018 DeerCreative.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <p className="hover:text-pink-400 cursor-pointer">About</p>
            <p className="hover:text-pink-400 cursor-pointer">
              Terms & Conditions
            </p>
            <p className="hover:text-pink-400 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-pink-400 cursor-pointer">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
