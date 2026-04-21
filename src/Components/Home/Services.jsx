import React from "react";
import img1 from "../../../public/services-img01.jpg";
import img2 from "../../../public/services-img02.jpg";
import img3 from "../../../public/services-img03.jpg";
import img4 from "../../../public/services-img04.jpg";

const Services = () => {
  const services = [
    { img: img1, title: "Full-body Massages" },
    { img: img2, title: "Aromatherapy" },
    { img: img3, title: "Facial Massages" },
    { img: img4, title: "Body Treatments" },
  ];

  return (
    <div className="bg-gray-100 py-12 sm:py-25 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-pink-400 font-medium tracking-widest text-xs sm:text-sm">
            WELCOME TO
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold ">
            Our Services
          </h1>
          <div className="w-16 sm:w-20 h-px bg-pink-300 mx-auto my-5 sm:my-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-17 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center p-5 pt-20 pb-10 hover:-translate-y-2"
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              <h1 className="font-semibold text-base sm:text-lg text-center mt-2 mb-1">
                {service.title}
              </h1>

              <p className="text-gray-500 text-xs sm:text-sm text-center leading-snug px-2">
                Provides innovative bodywork and geared toward the needs of
                athletics
              </p>

              <div className="mt-5 sm:hidden">
                <button className="px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs font-semibold shadow-md">
                  BOOK NOW
                </button>
              </div>

              <div className="hidden sm:block absolute -bottom-4">
                <button className="px-5 py-2 rounded-full bg-linear-to-r from-pink-300 to-blue-300 text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-105 transition">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
