export default function ServicesOffered() {
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
