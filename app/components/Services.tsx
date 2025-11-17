import React from 'react'

const Services = () => {

  const services = [
    {
      title: "Residential Interior Design",
      price: "Starting from ₹25,000",
      note: "*Minimum 2 rooms project",
      image: "/Services_img_1.png",
    },
    {
      title: "Commercial Space Design",
      price: "Starting from ₹45,000",
      note: "*Includes layout & furniture planning",
      image: "/Services_img_2.png",
    },
    {
      title: "Renovation & Remodeling",
      price: "Starting from ₹35,000",
      note: "*Timeline depends on project scale",
      image: "/Services_img_3.png",
    },
    {
      title: "Full-Time Design Consultation",
      price: "₹20,000 / month",
      note: "*Minimum 3 months commitment",
      image: "/Services_img_4.png",
    },
  ];


  return (
    <section className="py-16 bg-[#FAF5EF]">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-12 text-center">
          Services Offered
        </h1>

        <p className="mb-12 text-lg font-medium text-[#7A6852] text-center">
          Elevate your space. We offer a comprehensive suite of design and remodeling
          services to transform your vision into reality.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#F9F4EC] rounded-lg overflow-hidden group border border-[#D9C9B6]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 transition"
              />

              {/* Text Overlay */}
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#FFFFFFCC] backdrop-blur-sm p-6 rounded-lg shadow-sm max-w-xs">
                <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                  {service.title}
                </h3>

                <p className="text-[#7A6852] text-sm mt-2">
                  {service.price}
                </p>

                <button className="mt-4 px-5 py-2 border border-[#1A1A1A] text-[#1A1A1A] text-sm rounded-full hover:bg-[#1A1A1A] hover:text-white transition">
                  Learn More
                </button>

                <p className="text-xs text-[#B8AFA6] mt-3">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
