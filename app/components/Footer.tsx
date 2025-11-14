"use client";

import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <span>
              <img src="/LOGO_nk.png" alt="" className="w-8 h-8 rounded-full" />
            </span>
            NkInteriors
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="transition-all duration-200 hover:text-amber-700 focus:text-blue-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="transition-all duration-200 hover:text-amber-700 focus:text-blue-600"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("project")}
                className="transition-all duration-200 hover:text-amber-700 focus:text-blue-600"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("service")}
                className="transition-all duration-200 hover:text-amber-700 focus:text-blue-600"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="transition-all duration-200 hover:text-amber-700 focus:text-blue-600"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/terms" className="flex transition-all duration-200 focus:text-blue-600 hover:text-amber-700">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="flex transition-all duration-200 focus:text-blue-600 hover:text-amber-700">Privacy Policy</a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nkinteriors.com&su=Report%20for%20NK%20Interiors&body=Hello%20NK%20Interiors%20Team,"
                target="_blank"
                title="Report an issue"
                className="flex transition-all duration-200 focus:text-blue-600 hover:text-amber-700"
              >
                Report
              </a>
            </li>

            <li>Imprint</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Architecture Portfolio Examples</li>
            <li>Architecture Portfolio Template</li>
            <li>Interior Design Portfolio Examples</li>
            <li>Interior Design Portfolio Template</li>
          </ul>
        </div>
      </div>

      {/* Social + bottom note */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
        <div className="flex gap-4 text-gray-600">
          <Instagram className="cursor-pointer" />
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
        </div>

        <p className="text-gray-500 text-sm text-center md:text-right">
          © 2025 NKInteriors, Interior Studio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
