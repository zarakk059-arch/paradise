import React from "react";
import img1 from "../../public/post-img01 (1).jpg";
import img2 from "../../public/post-img01.jpg";
import img3 from "../../public/post-img02.jpg";

const Blog = () => {
  const posts = [
    {
      img: img1,
      type: "NEWS",
      title: "The De-Stress Massage And Body Cocoon",
    },
    {
      img: img2,
      type: "EVENTS",
      title: "The Personalized Ocean And Earth Body Wrap",
    },
    {
      img: img3,
      type: "NEWS",
      title: "The Balance & Harmony of Body and Mind",
    },
  ];

  return (
    <div className="bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="text-center mb-14 sm:mb-16 lg:mb-20">
        <p className="text-pink-400 tracking-widest text-xs sm:text-sm mb-2">
          From the Blog
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Latest News & Events
        </h1>

        <div className="w-14 sm:w-16 lg:w-20 h-0.5 bg-pink-300 mx-auto mt-4"></div>
      </div>

      <div
        className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 sm:gap-7 lg:gap-8 xl:gap-10
        max-w-7xl mx-auto
      "
      >
        {posts.map((item, index) => (
          <div
            key={index}
            className="
              group border border-gray-200 rounded-xl overflow-hidden
              bg-white shadow-sm hover:shadow-lg transition duration-300
              w-full
            "
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt="blog"
                className="
                  w-full
                  h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64
                  object-cover
                  group-hover:scale-110 transition duration-500
                "
              />

              <div
                className="
                  absolute top-0 left-0 w-full h-1/2
                  bg-linear-to-b from-pink-300/70 via-blue-300/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />
            </div>

            <div className="p-5 sm:p-6 lg:p-6 xl:p-7">
              <p className="text-pink-500 text-xs sm:text-sm font-semibold tracking-widest mb-2 sm:mb-3">
                {item.type}
              </p>

              <h2
                className="
                text-base sm:text-lg md:text-xl
                font-semibold text-gray-800
                leading-snug mb-3 sm:mb-4
                hover:text-pink-400 transition
              "
              >
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500">
                Gary Coleman | 21 Mar 2017
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
