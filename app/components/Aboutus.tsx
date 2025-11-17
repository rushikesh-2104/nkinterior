"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#FDF8F2]">
      {/* MAIN WRAPPER */}
      <div className="max-w-7xl px-6 md:px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">

        {/* LEFT SECTION — TEXT */}
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-6xl text-center md:text-left font-serif text-[#3A2D1A]">
            About Us
          </h2>

          <div className="w-24 h-[2px] bg-[#C17F59] mx-auto md:mx-0 mt-6 mb-10"></div>

          <p className="text-[#3A2D1A] text-xl text-center md:text-left mb-12 leading-relaxed">
            At NK Interiors, we take pride in our values — exquisite design,
            attention to detail, and a commitment to unparalleled excellence.
          </p>

          <div className="space-y-6">
            {/* CARD 1 */}
            <div>
              <h4 className="text-2xl font-bold mb-3 text-[#C17F59]">
                Design That Feels Like You
              </h4>
              <p className="text-[#3A2D1A] text-xl text-justify leading-relaxed">
                At NK Interiors, we believe great design starts with understanding people.
                Every home and space has its own personality, and our goal is to bring
                that to life through thoughtful, creative, and functional design. We
                craft interiors that feel warm, balanced, and uniquely yours — blending
                modern aesthetics with comfort and practicality. Whether it’s a cozy
                apartment, a stylish home, or a vibrant workspace, we design spaces that
                make everyday living more beautiful and enjoyable.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 md:pr-10">

          {/* Left Column */}
          <div className="space-y-4">
            <div className="bg-white h-48 rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition duration-500 border border-[#E8D9C7]">
              <img src="/Aboutus_img_2.png" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="bg-white h-96 rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition duration-500 border border-[#E8D9C7]">
              <img src="/Aboutus_img_1.png" className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 pt-10 md:pt-24">
            <div className="bg-white h-96 rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition duration-500 border border-[#E8D9C7]">
              <img src="/Aboutus_img_4.png" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="bg-white h-48 rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition duration-500 border border-[#E8D9C7]">
              <img src="/Aboutus_img_3.png" className="w-full h-full object-cover" alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center pb-24">

        {/* Left Image */}
        <div className="bg-white h-96 rounded-lg overflow-hidden shadow-md hover:scale-[1.03] transition duration-500 border border-[#E8D9C7]">
          <img src="/Aboutus_img_5.png" className="w-full h-full object-cover" alt="" />
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#C17F59]">
            Our Approach to Every Project
          </h3>

          <p className="text-[#3A2D1A] text-xl text-justify leading-relaxed">
            Our team of passionate designers and creators work closely with you from
            concept to completion, making the process smooth and enjoyable. We value
            collaboration, communication, and creativity at every step. From selecting
            color palettes and textures to arranging furniture and lighting, we ensure
            each detail reflects your story and style. At NK Interiors, we don’t just
            decorate — we design spaces that feel like home.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
