import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarLogo, NavBody, NavItems } from "@/components/ui/resizable-navbar";
import Mobnav from "./components/Mobnav";
import Footer from "./components/Footer";
import GoToTop from "./components/gototop";

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
  title: {
    default: "NK Interiors | Luxury Interior Designer in Navi Mumbai",
    template: "%s | NK Interiors",
  },

  description:
    "NK Interiors by Komal Kadu delivers premium interior design solutions in Navi Mumbai & Panvel. Transform your home and commercial spaces with elegant, modern and functional designs.",

  openGraph: {
    title: "NK Interiors | Premium Interior Designers",
    description:
      "Transform your space with NK Interiors. Expert solutions in home & commercial interior design in Navi Mumbai and Panvel.",
    url: "https://nkinteriors.in", // change to your real domain
    siteName: "NK Interiors",
    images: [
      {
        url: "/card.png", // CREATE this image in public folder
        width: 1200,
        height: 630,
        alt: "NK Interiors - Interior Design Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NK Interiors | Interior Designers Navi Mumbai",
    description:
      "Premium interior design services by NK Interiors for homes, offices & commercial spaces.",
    images: ["/card.png"],
  },

  other: {
    "og:image:secure_url": "/card.png",
    "og:image:type": "image/png",
  },

  icons: {
    icon: "/favicon.ico",
  },
};


const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Services", link: "#service" },
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
        <GoToTop />
        <Footer />

      </body>
    </html>
  );
}
