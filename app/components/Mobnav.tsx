"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#service" },
  { name: "Projects", link: "#project" },
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
          className={`transition-all duration-300 overflow-hidden backdrop-blur-lg bg-white/10 ${open ? "max-h-96 border-t border-white/20" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const targetId = item.link.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else if (item.link === "#home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setOpen(false);
                }}
                className="px-5 py-3 text-left text-white font-medium hover:bg-white/20"
              >
                {item.name}
              </button>
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
