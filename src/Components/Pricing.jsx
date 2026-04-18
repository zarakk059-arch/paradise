import React from "react";
import img1 from "../../public/pricing-img01.jpg";
import img2 from "../../public/pricing-img02.jpg";
import img3 from "../../public/pricing-img03.jpg";
import img4 from "../../public/pricing-img04.jpg";

const plans = [
  {
    img: img1,
    title: "FAMILY PACK",
    price: "$29.99",
    features: ["Nail Cutting", "Hair Coloring", "Spa Therapy"],
  },
  {
    img: img2,
    title: "BASIC PACK",
    price: "$19.99",
    features: ["Hair Wash", "Basic Massage", "Face Clean"],
  },
  {
    img: img3,
    title: "PREMIUM PACK",
    price: "$49.99",
    features: ["Full Body Massage", "Hair Styling", "Spa Therapy"],
  },
  {
    img: img4,
    title: "DELUXE PACK",
    price: "$69.99",
    features: ["Luxury Spa", "Skin Care", "Hot Stone Therapy"],
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <p className="text-pink-400 tracking-widest text-xs sm:text-sm mb-2">
          SPA CENTER
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Our Pricing
        </h1>

        <div className="w-16 sm:w-20 h-0.5 bg-pink-300 mx-auto mt-5 sm:mt-6"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              w-full max-w-70 sm:max-w-65
              rounded-2xl shadow-md transition duration-300
              bg-gray-100 hover:bg-linear-to-r hover:from-pink-200 hover:to-blue-200
              group overflow-hidden text-center
            "
          >
            <div className="flex justify-center pt-6 sm:pt-8">
              <div
                className="
                w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                rounded-full flex items-center justify-center
                bg-gray-100 border-4 border-white shadow-lg
                group-hover:scale-105 transition
              "
              >
                <img
                  src={plan.img}
                  alt={plan.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>
            </div>

            <div className="px-4 sm:px-6 pb-8 sm:pb-10 mt-5 sm:mt-6">
              <h2 className="text-base sm:text-lg font-semibold uppercase text-gray-800 group-hover:text-pink-600">
                {plan.title}
              </h2>

              <p className="text-2xl sm:text-3xl font-bold text-gray-700 mt-3 sm:mt-4 group-hover:text-pink-600">
                {plan.price}
              </p>

              <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 group-hover:text-gray-700">
                {plan.features.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>

              <button className="mt-8 sm:mt-10 px-6 sm:px-7 py-2 rounded-full text-white text-xs sm:text-sm font-medium bg-linear-to-r from-blue-300 to-pink-300 hover:from-pink-400 hover:to-blue-400 transition">
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
