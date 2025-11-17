"use client";
import React, { useState } from "react";

const Contactus = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalMessage = `
Hello, I would like to request a consultation for an interior design project.

Name: ${name}
WhatsApp: ${whatsapp}

Project Brief:
${message}

Regards,
${name}
    `;

    const whatsappUrl = `https://wa.me/9321469188?text=${encodeURIComponent(
      finalMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setName("");
    setWhatsapp("");
    setMessage("");
  };

  return (
    <section>
      <div className="lg:pb-20 bg-[#F7F5F2]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-12 text-[#2B2B2B] lg:pl-30">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center gap-8 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-serif">Get in Touch</h1>
            <p className="text-lg md:text-2xl font-medium text-[#4A4A4A] max-w-2xl">
              Contact us for any further questions, possible projects, and
              business partnerships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">

              {/* Contact Card */}
              <div className="flex flex-col gap-2 p-4 rounded-xl shadow-sm bg-white border border-[#E8E2DA] hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold">Let’s have a chat!</h3>
                <p className="text-[#4A4A4A]">
                  Telephone: <span className="font-medium">+91 9833930391</span>
                </p>
                <p className="text-[#4A4A4A]">
                  WhatsApp: <span className="font-medium">+91 9833930391</span>
                </p>
                <p className="font-semibold text-[#4A5D3A]">
                  info@thebombaydesignstudio.com
                </p>
              </div>

              {/* Location Card */}
              <div className="flex flex-col gap-3 p-4 rounded-xl shadow-sm bg-white border border-[#E8E2DA] hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold">Visit our location</h3>
                <p className="text-[#4A4A4A]">
                  Shop No 30, Tulsi Chgrays, Surana Construction Reality,
                  <br />
                  Sion Trombay Road, Chembur, Mumbai – 400071
                </p>
                <a
                  href="https://maps.app.goo.gl/gGKmbLzkJsCxw5HL8"
                  className="font-semibold text-[#4A5D3A] hover:underline"
                >
                  Get Directions
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg group">

              {/* Rotating BG Card */}
              <div className="absolute inset-0 bg-[#E8E2DA] border border-[#D6D0C8] shadow-md rounded-2xl transform group-hover:-rotate-6 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-white border border-[#E8E2DA] shadow-md rounded-2xl p-6 sm:p-8">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^[A-Za-z ]*$/.test(value)) setName(value);
                        }}
                        className="p-2 border-2 border-[#D6D0C8] bg-[#E8E2DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D3A] transition duration-300"
                        required
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold">WhatsApp Number</label>
                      <input
                        type="tel"
                        placeholder="+91XXXXXXXXXX"
                        value={whatsapp}
                        maxLength={10}
                        onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9]*$/.test(value)) {
                          setWhatsapp(value);
                        }
                      }}

                        className="p-2 border-2 border-[#D6D0C8] bg-[#E8E2DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D3A] transition duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-2 border-2 border-[#D6D0C8] bg-[#E8E2DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5D3A] transition duration-300"
                      required
                    ></textarea>
                  </div>

                  {/* Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#617a4c] text-white border-2 border-transparent rounded-xl font-semibold hover:bg-[#7dca42] hover:scale-105 transition duration-300"
                    >
                      Send on WhatsApp
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactus;
