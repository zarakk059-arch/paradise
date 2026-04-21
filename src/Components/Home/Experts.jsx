import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

import img1 from "../../../public/team-img01.jpg";
import img2 from "../../../public/team-img02.jpg";
import img3 from "../../../public/team-img03.jpg";
import img4 from "../../../public/team-img04.jpg";

const team = [
  { img: img1, name: "Jackson Nash", role: "Massagist" },
  { img: img2, name: "Olivia Smith", role: "Spa Therapist" },
  { img: img3, name: "David John", role: "Skin Specialist" },
  { img: img4, name: "Emma Watson", role: "Beauty Expert" },
];

const Experts = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-24">
      <div className="text-center mb-25">
        <p className="text-pink-400 tracking-widest text-xs sm:text-sm mb-2">
          Our Staff
        </p>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
          Meet Our Experts
        </h1>
        <div className="w-16 sm:w-20 h-0.5 bg-pink-300 mx-auto mt-4 sm:mt-6"></div>
      </div>

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-y-16
        "
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="
              relative bg-white rounded-2xl shadow-md
              text-center group
              pt-16 pb-10 px-4
              w-full max-w-55 mx-auto
              transition duration-300
              hover:bg-linear-to-r hover:from-pink-100 hover:to-blue-100
            "
          >
            <div
              className="
                absolute -top-14 left-1/2 -translate-x-1/2
                w-28 h-28 sm:w-32 sm:h-32
                rounded-full overflow-hidden
                border-4 border-white shadow-lg bg-white
                group-hover:scale-110 transition duration-300
              "
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-sm sm:text-base font-semibold text-gray-800">
              {member.name}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {member.role}
            </p>

            <div className="flex justify-center gap-3 mt-4 text-lg sm:text-xl">
              <CiFacebook className="cursor-pointer hover:text-pink-400 hover:scale-110 transition" />
              <CiTwitter className="cursor-pointer hover:text-blue-400 hover:scale-110 transition" />
              <FaGooglePlusG className="cursor-pointer hover:text-pink-300 hover:scale-110 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-300 hover:scale-110 transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
