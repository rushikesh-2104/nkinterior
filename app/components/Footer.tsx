import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <span><img src="/NKinterior1.jpg" alt="" /></span> NkInteriors
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
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
