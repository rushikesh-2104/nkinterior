import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import Mobnav from "./components/Mobnav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});



export const metadata: Metadata = {
  title: "NkInteriors",
  description: "By Komal Kadu",
};

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#service" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:hidden"><Mobnav /></div>

        <Navbar>
          <NavBody>
            <NavbarLogo />
            {/* ✅ Pass navItems to your NavItems component */}
            <NavItems items={navItems} />
          </NavBody>
        </Navbar>

        

        {children}


      </body>
    </html>
  );
}
