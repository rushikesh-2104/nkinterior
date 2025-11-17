"use client";
import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rushikesh Nivas",
      date: "September 18, 2025",
      description: "Seemingly simple",
      image: "/Project_img_1.png",
    },
    {
      id: 2,
      title: "Modern Villa Renovation",
      date: "August 2, 2025",
      description: "Minimalist luxury meets natural lighting.",
      image: "/Project_img_2.png",
    },
    {
      id: 3,
      title: "Corporate Workspace",
      date: "July 11, 2025",
      description: "Functional design with elegant simplicity.",
      image: "/Project_img_3.png",
    },
    {
      id: 4,
      title: "Urban Apartment Interior",
      date: "June 28, 2025",
      description: "Smart space utilization with calm tones.",
      image: "/Project_img_4.png",
    },
    {
      id: 5,
      title: "Beach House Makeover",
      date: "May 10, 2025",
      description: "Open layout embracing coastal vibes.",
      image: "/Project_img_5.png",
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      date: "April 22, 2025",
      description: "Refined interiors for modern living.",
      image: "/Project_img_6.png",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => setVisibleCount((prev) => prev + 3);
  const seeLess = () => setVisibleCount(3);

  return (
    <section className="py-16 bg-[#FAF5EF]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A]">
            Our Creative Work
          </h1>
          <p className="m-8 text-lg font-medium text-[#7A6852] leading-relaxed">
            Discover the vision, detail, and craftsmanship behind our most recent design achievements.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none md:grid-cols-3 lg:gap-10">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="bg-[#F9F4EC] h-auto w-full rounded-xl border-2 border-[#D9C9B6] hover:scale-[1.03] hover:shadow-lg transition duration-500"
            >
              <div
                className="rounded-t-xl h-80"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="px-5 pb-5">
                <p className="text-xs sm:text-sm my-3 text-[#7A6852]">
                  {project.date}
                </p>

                <p className="text-lg sm:text-2xl my-3 font-semibold text-[#1A1A1A]">
                  {project.title}
                </p>

                <p className="text-[#7A6852] my-3 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm font-medium text-[#C49A6C] cursor-pointer hover:underline">
                  READ MORE ➜
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 text-center md:mt-16">
          {visibleCount < projects.length ? (
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-[#EDE3D5] border-2 border-[#C49A6C] rounded-xl font-semibold text-[#1A1A1A] hover:bg-[#F4EADB] hover:scale-105 transition duration-300"
            >
              Load More ↓
            </button>
          ) : (
            <button
              onClick={seeLess}
              className="px-6 py-2 bg-[#EDE3D5] border-2 border-[#C49A6C] rounded-xl font-semibold text-[#1A1A1A] hover:bg-[#F4EADB] hover:scale-105 transition duration-300"
            >
              See Less ↑
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
