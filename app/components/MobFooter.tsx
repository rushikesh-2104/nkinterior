"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const MobFooter = () => {
  return (
    <footer className="
      fixed bottom-0 left-0 w-full 
      backdrop-blur-lg bg-white/15  
      border-t border-white/30 
      shadow-lg
      flex justify-end items-center
      px-6 py-3 
      text-white 
      md:hidden z-50
    ">
      
      {/* Social Icons */}
      <div className="flex  gap-3">
<p className="text-gray-500 text-sm text-center md:text-right">
          © 2025 NKInteriors, Interior Studio.
        </p>
      </div>
    </footer>
  );
};

export default MobFooter;
