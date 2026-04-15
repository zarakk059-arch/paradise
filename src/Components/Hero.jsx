import React, { useState, useEffect } from "react";
import img1 from "../../public/slider-img02.jpg";
import img2 from "../../public/slider-img02.jpg";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";

const Hero = () => {
  const slides = [
    {
      title: "Best Time To Relax",
      desc: "Succeed in the beauty world with the acquired skills! Progressive professional beauty courses!",
      img: img1,
    },
    {
      title: "Beauty & Spa Saloon",
      desc: "Enjoy some much needed me-time during a three-hour spa session.",
      img: img2,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-137.5 md:h-150 overflow-hidden flex items-center mt-0 md:-mt-18">
      <div className="absolute left-3 md:left-5 z-20">
        <HiOutlineArrowSmallLeft
          onClick={prevSlide}
          className="text-3xl md:text-4xl cursor-pointer text-pink-400 hover:text-blue-400 transition"
        />
      </div>

      <div className="absolute right-3 md:right-5 z-20">
        <HiOutlineArrowSmallRight
          onClick={nextSlide}
          className="text-3xl md:text-4xl cursor-pointer text-pink-400 hover:text-blue-400 transition"
        />
      </div>

      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 shrink-0"
          >
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <img
                src={slide.img}
                alt="hero"
                className="w-62.5 md:w-87.5 lg:w-112.5 object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
              <p className="text-pink-400 font-semibold text-sm md:text-base">
                Beauty & Spa
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
                {slide.title}
              </h1>

              <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm md:text-base">
                {slide.desc}
              </p>

              <button className="mt-4 md:mt-6 px-5 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-pink-300 to-blue-300">
                REQUEST AN APPOINTMENT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
