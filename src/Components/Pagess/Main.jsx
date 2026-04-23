import React from "react";
import img1 from "../../../public/aboutus-img.jpg";

const Main = () => {
  return (
    <section className="mt-14 md:mt-20 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <p className="text-pink-400 font-medium tracking-widest text-xs sm:text-sm">
          WELCOME TO
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
          Paradise Center
        </h1>

        <div className="w-16 sm:w-20 h-px bg-pink-300 my-4 sm:my-6"></div>

        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 text-gray-800 max-w-xl">
          You will like to look like goddess every day!
        </h2>

        <p className="text-gray-500 max-w-xs sm:max-w-md md:max-w-2xl mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
          Paradise products combine botanical and advanced cosmeceutical
          ingredients with the Science of Beauty to bring you the ultimate in
          professional skincare in a retail form.
        </p>
      </div>

      <div className="mt-10 md:mt-14 px-4 sm:px-6 lg:px-8 -mb-16 md:-mb-24">
        <img
          src={img1}
          alt="About Paradise Center"
          className="
            w-full 
            h-auto 
            object-cover

            sm:max-w-md 
            md:max-w-xl 
            lg:max-w-2xl 
            xl:max-w-3xl

            sm:mx-auto
            rounded-lg 
            shadow-xl
          "
        />
      </div>
    </section>
  );
};

export default Main;
