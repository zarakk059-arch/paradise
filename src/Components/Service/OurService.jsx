import React from "react";
import img1 from "../../../public/service-img1.jpg";
import img2 from "../../../public/service-video.jpg";
import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const OurService = () => {
  const services = [
    "Full-body Massages",
    "Aromatherapy",
    "Facial Massages",
    "Body Treatments",
    "Skincare",
    "Hair Salon",
    "Laser Therapy",
    "Nail Care",
    "Tattoo",
  ];

  return (
    <div className="w-full py-16 bg-white">

      {/* ✅ SAME CONTAINER AS OTHER SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Service</h2>

          <div className="flex items-center justify-center mt-3">
            <div className="w-12 h-[2px] bg-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm">Home / Service</span>
            <div className="w-12 h-[2px] bg-gray-300"></div>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[280px] flex flex-col gap-6">

            {/* CARD */}
            <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
              <div className="py-2 space-y-1">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-4 py-2
                      hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100
                      transition cursor-pointer group
                      ${index !== services.length - 1 ? "border-b border-gray-200" : ""}`}
                  >
                    <span className="text-gray-800 text-sm font-medium group-hover:text-pink-600">
                      {item}
                    </span>
                    <IoArrowForward className="text-gray-500 group-hover:text-pink-500 text-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIAL */}
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-sm text-gray-600">
              <p className="mb-3">
                My experience with Construct is absolutely positive. The themes are beautifully designed and well documented. Construct provides quick and competent support.
              </p>

              <p className="font-bold text-gray-800">Alex Poole</p>
              <p className="text-xs mb-2">CEO DeerCreative</p>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-pink-200 to-blue-200 text-sm font-medium">
              Download PDF
            </button>

            {/* CONTACT */}
            <div>
              <h3 className="font-bold mb-2">How can we help you?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Contact us at the Consultec WP office nearest to you or submit a business inquiry online.
              </p>

              <button className="w-full py-2 rounded-full bg-gradient-to-r from-pink-200 to-blue-200 text-sm font-medium">
                Contact Us
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col gap-8">

            {/* IMAGE */}
            <img
              src={img1}
              alt="service"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-2xl shadow-lg"
            />

            {/* TEXT */}
            <div>
              <h3 className="text-xl font-bold mb-3">Full-body Massages</h3>
              <p className="text-gray-600 mb-3">
                Did you know Petrochemicals are lurking in many of your everyday cosmetics? In fact, chances are, you have harmful chemicals in daily products.
              </p>
              <p className="text-gray-600">
                These are made from petroleum and can be harmful to both humans and the environment.
              </p>
            </div>

            {/* SECOND SECTION */}
            <div className="flex flex-col md:flex-row gap-6 items-start">

              {/* IMAGE */}
              <img
                src={img2}
                alt="service"
                className="w-full md:w-1/2 h-[240px] sm:h-[280px] object-cover rounded-2xl shadow-lg"
              />

              {/* FAQ */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>

                <div className="space-y-4">

                  <div>
                    <div className="flex items-center gap-2 font-medium">
                      <FiMinus />
                      <span>Is there anything I should bring?</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      We provide all amenities. Bring your own cosmetics if needed.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <FiMinus />
                    <span>Are the treatments for reservation only?</span>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <FiMinus />
                    <span>What kind of treatment will I get?</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OurService;