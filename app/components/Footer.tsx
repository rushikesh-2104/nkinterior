"use client";

import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { MapFrame } from "./Mapframe";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t bg-orange-100 py-12">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-black">
            <span>
              <img src="/LOGO_nk.png" alt="" className="w-8 h-8 rounded-full" />
            </span>
            NkInteriors
          </h2>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-amber-400 transition-all duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-amber-400 transition-all duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("project")}
                className="hover:text-amber-400 transition-all duration-200"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("service")}
                className="hover:text-amber-400 transition-all duration-200"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-amber-400 transition-all duration-200"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="md:mt-10">
          <h3 className="font-bold mb-4 text-black">Legal</h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>
              <a
                href="/terms"
                className="hover:text-amber-400 transition-all duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-amber-400 transition-all duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hrishi210402@gmail.com&su=Report%20for%20NK%20Interiors&body=Hello%20NK%20Interiors%20Team,"
                target="_blank"
                className="hover:text-amber-400 transition-all duration-200"
              >
                Report
              </a>
            </li>
            <li className="hover:text-amber-400 transition-all duration-200">Imprint</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:mt-10">
          <h3 className="font-bold mb-4 text-black">Resources</h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>Architecture Portfolio Examples</li>
            <li>Architecture Portfolio Template</li>
            <li>Interior Design Portfolio Examples</li>
            <li>Interior Design Portfolio Template</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="font-semibold">
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <MapFrame />
          </div>
        </div>

      </div>

      {/* Social + bottom note */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
        <div className="flex gap-4 text-gray-700 font-medium">
          <Instagram className="cursor-pointer hover:text-amber-400 transition-all" />
          <Facebook className="cursor-pointer hover:text-amber-400 transition-all" />
          <Twitter className="cursor-pointer hover:text-amber-400 transition-all" />
        </div>

        <p className="text-gray-700 font-medium text-sm text-center md:text-right">
          © 2025 NKInteriors, Interior Studio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
