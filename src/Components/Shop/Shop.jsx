import React from "react";

import img1 from "../../../public/product-img05.jpg";
import img2 from "../../../public/product-img06.jpg";
import img3 from "../../../public/product-img07.jpg";
import img4 from "../../../public/product-img08.jpg";
import img5 from "../../../public/product-img09.jpg";
import img6 from "../../../public/product-img10.jpg";
import img7 from "../../../public/product-img11.jpg";
import img8 from "../../../public/product-img12.jpg";
import img9 from "../../../public/product-img13.jpg";

const products = [
  { img: img1, name: "Skin Care Glow Kit", price: "$130.00", old: "$160.00" },
  { img: img2, name: "Hydra Facial Cream", price: "$120.00", old: "$150.00" },
  { img: img3, name: "Herbal Face Serum", price: "$99.00", old: "$130.00" },
  { img: img4, name: "Luxury Spa Oil", price: "$140.00", old: "$170.00" },
  { img: img5, name: "Organic Skin Mask", price: "$110.00", old: "$140.00" },
  { img: img6, name: "Glow Repair Cream", price: "$135.00", old: "$165.00" },
  { img: img7, name: "Anti Aging Serum", price: "$150.00", old: "$180.00" },
  { img: img8, name: "Vitamin C Pack", price: "$125.00", old: "$155.00" },
  { img: img9, name: "Deep Clean Lotion", price: "$145.00", old: "$175.00" },
];

const Shop = () => {
  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-10 bg-white">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Our Shop
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Discover premium skincare, beauty, and spa products designed to
          enhance your natural glow and luxury lifestyle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch">
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <div className="bg-gray-100 p-5 rounded-xl shadow space-y-3">
            <h2 className="text-lg font-semibold mb-2">Cart</h2>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Skin Care Makeup</span>
              <span>$130.00</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Glow Serum</span>
              <span>$120.00</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Face Cream</span>
              <span>$99.00</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Body Oil</span>
              <span>$140.00</span>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-gray-100 p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Beauty Spa (2)</li>
              <li>Skincare (3)</li>
              <li>Hair Salon (7)</li>
              <li>Laser Therapy (1)</li>
              <li>Nail Care (9)</li>
              <li>Tattoo (12)</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Popular Products</h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Glow Cream</span>
                <span>$120</span>
              </div>
              <div className="flex justify-between">
                <span>Face Serum</span>
                <span>$99</span>
              </div>
              <div className="flex justify-between">
                <span>Body Oil</span>
                <span>$140</span>
              </div>
            </div>
          </div>

          {/* TAGS (FIXED ROW LAYOUT) */}
          <div className="bg-gray-100 p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Tags</h2>

            <div className="flex flex-wrap gap-2 text-xs">
              <div className="w-full flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Beauty
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Spa
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Skin
                </span>
              </div>

              <div className="w-full flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Hair
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Luxury
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Organic
                </span>
              </div>

              <div className="w-full flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Glow
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Care
                </span>
                <span className="px-3 py-1 bg-white rounded-full shadow">
                  Oil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <div className="mt-2">
                    <span className="text-pink-500 font-bold mr-2">
                      {item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      {item.old}
                    </span>
                  </div>
                </div>

                <button className="mt-4 px-4 py-2 text-xs bg-linear-to-r from-pink-300 to-blue-300 text-white rounded-full hover:from-pink-400 hover:to-blue-400 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
