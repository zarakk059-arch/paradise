import React from "react";
import img1 from "../../public/gallery-img05.jpg";
import img2 from "../../public/gallery-img06.jpg";
import img3 from "../../public/gallery-img07.jpg";
import img4 from "../../public/gallery-img08.jpg";
import img5 from "../../public/gallery-img09.jpg";
import img6 from "../../public/gallery-img10.jpg";

const Gallery = () => {
  const tabs = [
    "ALL GALLERY",
    "MASSAGE",
    "SKIN CARE",
    "HAIR CUT",
    "NAIL CARE",
    "BEAUTY SPA",
  ];

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-10 xl:px-0">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <p className="text-pink-400 font-medium tracking-widest text-xs sm:text-sm mb-3">
          SPA CENTER
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
          Our Gallery
        </h1>

        <div className="w-16 sm:w-20 h-px bg-pink-300 my-10 sm:my-12"></div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-14 mt-11 mb-16 px-2">
          {tabs.map((tab, index) => (
            <h1
              key={index}
              className="font-medium text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap transition duration-300 hover:text-transparent hover:bg-linear-to-r hover:from-pink-300 hover:to-blue-300 hover:bg-clip-text"
            >
              {tab}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 w-full px-4 sm:px-6 lg:px-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-72 md:h-80 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
