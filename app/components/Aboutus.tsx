"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* --- Top Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl text-center font-serif text-gray-800 mb-8">About Us</h2>
          <p className="text-gray-600 text-xl text-justify">
            Our company’s culture and creativity are at the heart of what we do.
            We craft interiors that are elegant, timeless, and functional —
            designed to bring delight and comfort to every space.
          </p>
        </div>
        <div className="bg-gray-300 h-96 rounded-lg"></div>
      </div>

      {/* --- Mission Section --- */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-300 h-96 rounded-lg"></div>
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Our Mission: Designing Spaces that Inspire
            </h3>
            <p className="text-gray-600 text-xl text-justify">
              We believe great design should enhance how people live and feel.
              Our mission is to create beautiful, sustainable, and functional
              interiors that reflect our clients’ personalities and aspirations.
              Every project is a collaboration built on trust and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* --- Story Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">Our Story</h3>
          <p className="text-gray-600 text-xl text-justify mb-4">
            Founded in 2015, our studio began with a simple vision: to transform
            spaces into reflections of individual lifestyles. Over the years,
            we’ve grown into a multidisciplinary team of designers and artists
            who share a passion for innovation and detail.
          </p>
          <p className="text-gray-600 text-xl text-justify">
            From residential projects to large-scale commercial spaces, our
            journey continues to be defined by creativity, craftsmanship, and a
            deep respect for our clients’ dreams.
          </p>
        </div>
        <div className="bg-gray-300 h-96 rounded-lg"></div>
      </div>
    </section>
  );
};

export default AboutUs;
