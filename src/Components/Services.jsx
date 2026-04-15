import React from "react";
import img1 from "../../public/services-img01.jpg";
import img2 from "../../public/services-img02.jpg";
import img3 from "../../public/services-img03.jpg";
import img4 from "../../public/services-img04.jpg";

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-pink-400 font-medium tracking-widest text-xs sm:text-sm">
          WELCOME TO
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
          Our Services
        </h1>
        <div className="w-16 sm:w-20 h-px bg-pink-300 mx-auto my-5 sm:my-6"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col p-5 sm:p-6 h-95 sm:h-100">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={img1}
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
            />
          </div>

          <h1 className="font-semibold text-base sm:text-lg text-center mb-1 sm:mb-2">
            Full-body Massages
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
            Provides innovative bodywork and geared toward the needs of
            athletics
          </p>

          <div className="mt-auto flex justify-center pt-3 sm:pt-4">
            <button className="px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col p-5 sm:p-6 h-95 sm:h-100">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={img2}
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
            />
          </div>

          <h1 className="font-semibold text-base sm:text-lg text-center mb-1 sm:mb-2">
            Aromatherapy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
            Provides innovative bodywork and geared toward the needs of
            athletics
          </p>

          <div className="mt-auto flex justify-center pt-3 sm:pt-4">
            <button className="px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col p-5 sm:p-6 h-95 sm:h-100">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={img3}
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
            />
          </div>

          <h1 className="font-semibold text-base sm:text-lg text-center mb-1 sm:mb-2">
            Facial Massages
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
            Provides innovative bodywork and geared toward the needs of
            athletics
          </p>

          <div className="mt-auto flex justify-center pt-3 sm:pt-4">
            <button className="px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col p-5 sm:p-6 h-95 sm:h-100">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={img4}
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
            />
          </div>

          <h1 className="font-semibold text-base sm:text-lg text-center mb-1 sm:mb-2">
            Body Treatments
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
            Provides innovative bodywork and geared toward the needs of
            athletics
          </p>

          <div className="mt-auto flex justify-center pt-3 sm:pt-4">
            <button className="px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
