"use client";
import React from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="/Introduction.mp4"
        autoPlay
        muted
        playsInline
        loop
      ></video>

      {/* Overlay Section */}
      <div className="min-h-screen flex items-center justify-center bg-[#FAF5EF]">
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] md:px-4">

          {/* Heading */}
          <h1 className=" text-2xl  md:text-6xl font-serif font-bold whitespace-nowrap text-[#F7F3E9] max-w-3xl leading-tight">
            Welcome to 
            <span className="bg-gradient-to-br from-[#C9A857] to-[#F7F3E9] px-4 md:py-2 py-4 rounded-2xl text-[#0D0D0D] ml-2">
              NK Interiors
            </span>
          </h1>

          {/* Subtext */}
          <p className="m-8 md:text-xl text-sm font-sans font-medium text-[#EDEDED]/90">
            Transforming spaces into timeless experiences by creating elegant,
            functional interiors.
          </p>

          {/* Buttons */}
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-4">

            {/* Gold Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="md:px-8 px-4 py-2 md:py-3 bg-[#C9A857] text-[#0D0D0D] border-2 border-[#C9A857] font-sans font-medium rounded-full shadow-md hover:scale-[1.03] transition"
            >
              Book Consultation
            </button>

            {/* Black Button */}
            <button
              onClick={() => scrollToSection("project")}
              className="md:px-8 px-4 py-3 md:py-3 bg-[#0D0D0D]/80 text-[#C9A857] border border-[#C9A857]/50 font-sans font-medium rounded-full hover:bg-[#1A1A1A] transition"
            >
              Explore our Work
            </button>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
