"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-50">
        {/* --- Left Section (Text) --- */}
        <div className="sm:-ml-20 bg-gray-50">
          <h2 className="text-5xl md:text-6xl text-center font-serif text-gray-800 mb-4 sm:-mt-30">
            About Us
          </h2>
          <p className="text-gray-600 text-center text-xl mb-12">
            At NK Interiors, we take pride in our values — exquisite design, attention to detail, and a commitment to unparalleled excellence.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* --- Card 1 --- */}
            <div>
              <h4 className="text-2xl font-bold mb-3">Design That Feels Like You</h4>
              <p className="text-gray-600 text-xl text-justify">
                At NK Interiors, we believe great design starts with understanding people. Every home and space has its own personality, and our goal is to bring that to life through thoughtful, creative, and functional design. We focus on creating interiors that feel warm, balanced, and uniquely yours — blending modern aesthetics with comfort and practicality. Whether it’s a cozy apartment, a stylish home, or a vibrant workspace, we design spaces that make everyday living more beautiful and enjoyable.
              </p>
            </div>

          </div>
        </div>

        {/* --- Right Section (Image Grid) --- */}
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:ml-10 sm:-mr-20 bg-gray-50">
          <div>
            <div className="grid grid-cols-1 grid-rows-2 gap-4">
              <div className="flex flex-col justify-end">
                <div className="bg-blue-200 h-48 object-cover rounded-lg shadow-md hover:scale-[1.03] hover:shadow-md transition duration-500">
                  <img src="/Aboutus_img_2.png" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div>
                <div className="bg-blue-200 h-96 object-cover rounded-lg shadow-md hover:scale-[1.03] hover:shadow-md transition duration-500">
                  <img src="/Aboutus_img_1.png" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="py-24">
            <div className="grid grid-cols-1 grid-rows-2 gap-4">
              <div>
                <div className="bg-blue-200 h-96 object-cover rounded-lg shadow-md hover:scale-[1.03] hover:shadow-md transition duration-500">
                  <img src="/Aboutus_img_4.png" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-baseline">
                <div className="bg-blue-200 h-48 object-cover rounded-lg shadow-md hover:scale-[1.03] hover:shadow-md transition duration-500">
                  <img src="/Aboutus_img_3.png" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-20 items-center pb-30">
        {/* Left: Image */}
        <div className="bg-blue-200 h-96 object-cover rounded-lg shadow-md hover:scale-[1.03] hover:shadow-md transition duration-500">
          <img src="/Aboutus_img_5.png" className="w-full h-full object-cover" alt="" />
        </div>

        {/* Right: Text */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Our Approach to Every Project
          </h3>
          <p className="text-gray-600 text-xl text-justify">
            Our team of passionate designers and creators work closely with you from concept to completion, making the process smooth and enjoyable. We value collaboration, communication, and creativity at every step. From selecting color palettes and textures to arranging furniture and lighting, we make sure every detail reflects your story and style. At NK Interiors, we don’t just decorate — we design spaces that feel like home.
          </p>
        </div>
      </div>
    </section>

    
  );
};

export default AboutUs;
