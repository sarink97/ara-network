"use client";

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { LoadingContext } from "./providers/LoadingProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Our Solutions",
      items: [
        {
          name: "JAGUAR5000",
          href: "/products/jaguar5000",
        },
        {
          name: "Operating System",
          description: "Advanced Security OS",
          href: "/products/jaguar5000/operating-system",
        },
        {
          name: "Scalability",
          description: "Enterprise Scaling Solutions",
          href: "/products/jaguar5000/scalability",
        },
        {
          name: "Technologies",
          description: "Core Security Features",
          href: "/products/jaguar5000/technologies",
        },
        {
          name: "ARA-TS",
          href: "/products/ts-plus",
        },
      ],
    },
  ];

  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null; // Hide Navbar on admin pages
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_ow.webp"
              alt="IC&I Logo"
              width={140}
              height={56}
              className="h-14 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#181c52] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                What We Offer
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[400px] p-1">
                <div className="bg-gradient-to-b from-[#0B1B33]/95 to-[#0B1B33]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    {menuItems[0].items.map((item, index) => (
                      <div key={item.name}>
                        {/* Add divider before ARA-TS */}
                        {item.name === "ARA-TS" && (
                          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />
                        )}
                        
                        <Link
                          href={item.href}
                          className={`group block text-white ${
                            !item.description 
                              ? 'hover:bg-white/5' 
                              : 'hover:bg-white/5 pl-8 relative before:absolute before:left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-px before:bg-white/20 before:group-hover:bg-[#4C9EFF]/50'
                          } rounded-lg p-3 transition-all duration-300`}
                        >
                          <div className="flex items-start">
                            <ChevronRight 
                              className={`w-5 h-5 mr-2 mt-0.5 ${
                                !item.description 
                                  ? 'text-[#4C9EFF]' 
                                  : 'text-[#4C9EFF]/50 group-hover:text-[#4C9EFF]'
                              } transform group-hover:translate-x-1 transition-transform duration-300`} 
                            />
                            <div>
                              <div className={
                                !item.description 
                                  ? "font-semibold text-lg text-[#4C9EFF] group-hover:text-[#4C9EFF] transition-colors" 
                                  : "font-medium text-white/80 group-hover:text-white transition-colors"
                              }>
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-sm text-white/40 group-hover:text-white/60 mt-0.5 transition-colors">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>About Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#181c52] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/partner"
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>Partner</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#181c52] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full shadow-sm text-white bg-[#3785CC] hover:bg-[#3785CC]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3785CC]/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {menuItems[0].items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white/90 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/about"
                  className="block text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/blogs"
                  className="block text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
