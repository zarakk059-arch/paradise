import React from "react";
import { SiComma } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import img1 from "../../../public/testimonial-img01.jpg";
import img2 from "../../../public/testimonial-img02.jpg";
import img3 from "../../../public/testimonial-img03.jpg";

const User = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="flex items-center justify-center text-pink-300 text-3xl sm:text-4xl gap-2 mb-4 sm:mb-6">
          <SiComma className="rotate-180" />
          <SiComma />
        </div>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl sm:max-w-2xl">
          A massage center is a peaceful place where professional therapists
          help relieve stress, relax muscles, and refresh your body and mind. It
          offers soothing treatments designed to improve well-being and restore
          energy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-5 sm:mt-6">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-pink-400 text-center">
            Ollie Schiender -
          </h1>

          <div className="flex items-center text-yellow-400 gap-1 text-sm sm:text-base">
            {[...Array(5)].map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
        </div>

        <h2 className="mt-2 text-xs sm:text-sm text-gray-500">
          CEO DeerCreative
        </h2>

        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
          <IoIosArrowBack className="text-xl sm:text-2xl text-gray-500 cursor-pointer hover:text-pink-400 transition" />

          <div className="flex gap-2 sm:gap-4 items-center">
            <img
              src={img1}
              alt="img1"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md"
            />

            <img
              src={img2}
              alt="img2"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-pink-300 shadow-lg"
            />

            <img
              src={img3}
              alt="img3"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>

          <IoIosArrowForward className="text-xl sm:text-2xl text-gray-500 cursor-pointer hover:text-pink-400 transition" />
        </div>
      </div>
    </div>
  );
};

export default User;
