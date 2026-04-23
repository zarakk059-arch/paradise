import React from "react";
import img1 from "../../../public/contactus-img.jpg";

const Contact = () => {
  return (
    <div className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
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

        <p className="text-gray-500 max-w-2xl mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
          Paradise products combine botanical and advanced cosmeceutical
          ingredients with the Science of Beauty to bring you the ultimate in
          professional skincare in a retail form.
        </p>
      </div>

      <div className="mt-10 md:mt-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src={img1}
          alt="Contact Paradise Center"
          className="
            w-full
            sm:max-w-3xl
            md:max-w-5xl
            lg:max-w-6xl

            h-64 sm:h-80 md:h-125 lg:h-150

            object-cover
            rounded-xl
            shadow-2xl
          "
        />
      </div>

      <div className="max-w-6xl mx-auto mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Australia</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              40 Baria Street 133/2 New York City, US
            </p>
            <p className="text-gray-500 text-sm">
              Email: info.contact@gmail.com
            </p>
            <p className="text-gray-500 text-sm">Phone: 123-456-7890</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              United States
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              40 Baria Street 133/2 New York City, US
            </p>
            <p className="text-gray-500 text-sm">
              Email: info.contact@gmail.com
            </p>
            <p className="text-gray-500 text-sm">Phone: 123-456-7890</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">England</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              40 Baria Street 133/2 New York City, US
            </p>
            <p className="text-gray-500 text-sm">
              Email: info.contact@gmail.com
            </p>
            <p className="text-gray-500 text-sm">Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
