"use client";
import React from 'react'
import { Leaf, ShieldOff, BadgeCheck } from "lucide-react";

const About = () => {

  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-amber-600" />,
      title: "Natural",
      description:
        "We design interiors inspired by natural materials, light, and warmth.",
    },
    {
      icon: <ShieldOff className="w-10 h-10 text-amber-600" />,
      title: "No Side Effect",
      description:
        "Every space is created for comfort and harmony — aesthetics meet functionality.",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-amber-600" />,
      title: "100% Organic",
      description:
        "Our approach blends eco-friendly materials and timeless design elements.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            WHY US?
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl text-lg mx-auto">
            We bring creativity, sustainability, and comfort together to craft
            interiors that truly reflect your lifestyle and personality.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <div className="p-4 rounded-full bg-amber-50">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-lg max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About