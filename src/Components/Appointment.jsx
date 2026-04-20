import React from "react";
import img1 from "../../public/appointment-img.jpg";

const Appointment = () => {
  return (
    <div className="bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
        <div className="relative flex justify-center lg:justify-start">
          <img
            src={img1}
            alt="appointment"
            className="
              w-72 sm:w-80 md:w-96 lg:w-105 xl:w-115
              rounded-2xl shadow-lg
              transform lg:translate-x-8 lg:translate-y-8
            "
          />
        </div>

        <div className="flex flex-col justify-center text-center px-2 sm:px-6 lg:px-0">
          <p className="text-pink-400 tracking-widest text-xs sm:text-sm mb-2">
            Spa Center
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
            Appointment
          </h1>

          <div className="w-16 h-0.5 bg-pink-300 mx-auto my-5"></div>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-6 lg:mt-8 text-gray-800 mb-2">
            Want to Make a Booking or Have a Question?
          </h2>

          <p className="text-sm sm:text-base text-black leading-relaxed mb-6">
            Call me :{" "}
            <span className="font-semibold text-black">002-6666-8888</span> or
            fill out our online booking
            <br className="hidden sm:block" />& enquiry form and we’ll contact
            you
          </p>

          <div className="mt-10 sm:mt-14 lg:mt-20">
            <button
              className="
                px-6 sm:px-7 py-2.5 sm:py-3 rounded-full
                text-white text-sm sm:text-base
                bg-linear-to-r from-pink-300 to-blue-300
                hover:from-pink-400 hover:to-blue-400
                transition duration-300 shadow-md
              "
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
