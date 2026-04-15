import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";

const Welcome = () => {
  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-20 text-center flex flex-col items-center">
      <p className="text-pink-400 font-medium tracking-widest text-xs sm:text-sm">
        WELCOME TO
      </p>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
        Paradise Center
      </h1>

      <div className="w-16 sm:w-20 h-px bg-pink-300 my-5 sm:my-6"></div>

      <h2 className="text-lg sm:text-xl md:text-2xl mt-5 md:mt-7 text-gray-800">
        You will like to look like goddess every day!
      </h2>

      <p className="text-gray-500 max-w-2xl mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
        Paradise products combine botanical and advanced cosmeceutical
        ingredients with the Science of Beauty to bring you the ultimate in
        professional skincare in a retail form.
      </p>

      <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-dotted border-pink-300 bg-pink-400 text-white">
            <LuHeartPulse className="text-xl sm:text-2xl md:text-4xl" />
          </div>
          <h1 className="font-semibold text-base md:text-lg">
            Variety of Care
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            Our Salon is unique among other Spas, all thanks to an
            insurmountable variety of skin care and relaxation choices
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-dotted border-pink-300 bg-pink-400 text-white">
            <FaUserGraduate className="text-xl sm:text-2xl md:text-4xl" />
          </div>
          <h1 className="font-semibold text-base md:text-lg">
            Qualified Staff
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            Our Salon is unique among other Spas, all thanks to an
            insurmountable variety of skin care and relaxation choices
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-dotted border-pink-300 bg-pink-400 text-white">
            <FaRegFaceSmileBeam className="text-xl sm:text-2xl md:text-4xl" />
          </div>
          <h1 className="font-semibold text-base md:text-lg">
            Relaxation Centric
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            Our Salon is unique among other Spas, all thanks to an
            insurmountable variety of skin care and relaxation choices
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-dotted border-pink-300 bg-pink-400 text-white">
            <GiWallet className="text-xl sm:text-2xl md:text-4xl" />
          </div>
          <h1 className="font-semibold text-base md:text-lg">
            Reasonable Costs
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            Our Salon is unique among other Spas, all thanks to an
            insurmountable variety of skin care and relaxation choices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
