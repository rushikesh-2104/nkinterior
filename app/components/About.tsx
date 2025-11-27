"use client";
import React from "react";
import { Leaf, ShieldOff, BadgeCheck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-[#C49A6C]" />,
      title: "Natural",
      description:
        "We design interiors inspired by natural materials, light, and warmth.",
    },
    {
      icon: <ShieldOff className="w-10 h-10 text-[#C49A6C]" />,
      title: "No Side Effect",
      description:
        "Every space is created for comfort and harmony — aesthetics meet functionality.",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-[#C49A6C]" />,
      title: "100% Organic",
      description:
        "Our approach blends eco-friendly materials and timeless design elements.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF5EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-wide">
            WHY US?
          </h2>
          <p className="mt-4 text-[#7A6852] max-w-2xl text-lg  mx-auto leading-relaxed">
            We bring creativity, sustainability, and comfort together to craft
            interiors that truly reflect your lifestyle and personality.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="p-5 rounded-full bg-[#F0E5D8] shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                {feature.title}
              </h3>
              <p className="text-[#7A6852] text-md max-w-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
