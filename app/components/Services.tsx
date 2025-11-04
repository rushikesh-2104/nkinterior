import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import React from 'react'

const Services = () => {
    
const content = [
  {
  title: "Client Consultation",
  description:
    "We begin by understanding your vision, lifestyle, and space requirements. Our team meets with you to discuss design preferences, budget, and project goals. From evaluating your site to providing expert suggestions on layouts, materials, and aesthetics — our consultation ensures every detail aligns with your dream space. This collaborative process helps set a clear design direction and builds a strong foundation before execution begins.",
  content: (
    <div className="flex h-full w-full items-center justify-center text-white">
      <video
        src="/consultant.mp4"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        loop
        autoPlay
      />
    </div>
  ),
},

  {
  title: "Site Visit & Requirement Study",
  description:
    "Our process begins with a detailed site visit to understand the space, structure, and design potential. We take precise measurements, study natural lighting, and evaluate the existing layout. During this stage, we discuss your lifestyle needs, design preferences, and functional requirements to ensure the final design aligns perfectly with your vision. This step helps us build a practical and creative foundation for your interior project.",
  content: (
    <div className="flex h-full w-full items-center justify-center text-white">
      <video
        src="/site-visit.mp4"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        loop
        autoPlay
      />
    </div>
  ),
},

  {
  title: "3D Rendering & Visualization",
  description:
    "Visualize your dream interiors through realistic 3D renders and walkthroughs. From lighting and textures to furniture and color palettes, we bring your design concept to life before execution begins.",
  content: (
    <div className="flex h-full w-full items-center justify-center text-white">
      <video
        src="/3d.mp4"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        loop
        autoPlay
        muted
      />
    </div>
  ),
},

  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
  return (
    <div className="w-full py-4">
        <StickyScroll content={content}/>
    </div>
  )
}

export default Servicesexport default function ServicesOffered() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-12 text-center">
          Services Offered
        </h1>
        <p className="mb-12 text-lg font-medium text-gray-600 text-center">Elevate your space. We offer a comprehensive suite of design and remodeling services to transform your vision into reality.</p>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 transition"
              />

              {/* Text Overlay */}
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm max-w-xs">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{service.price}</p>

                <button className="mt-4 px-5 py-2 border border-gray-800 text-gray-800 text-sm rounded-full hover:bg-gray-800 hover:text-white transition">
                  Learn More
                </button>

                <p className="text-xs text-gray-400 mt-3">{service.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
