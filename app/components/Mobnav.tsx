"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Mobnav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50 md:hidden">
        <div className="flex justify-between items-center px-5 py-4">
          
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide text-white">
            NKInteriors
          </h1>

          {/* Menu / Close Button */}
          <button
            className="text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`transition-all duration-300 overflow-hidden backdrop-blur-lg bg-white/10 ${
            open ? "max-h-96 border-t border-white/20" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="px-5 py-3 text-white font-medium hover:bg-white/20"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default Mobnav;
