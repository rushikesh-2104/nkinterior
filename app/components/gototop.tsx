"use client"; // needed for React hooks in Next.js 13+ app directory

import { useState, useEffect } from "react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 z-50 right-8 px-4.5 py-2.5 text-xl rounded-full bg-yellow-600/50 text-white shadow-lg hover:bg-yellow-700 transition"
        > 
          ↑
        </button>
      )}
    </>
  );
}
