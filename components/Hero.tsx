"use client";

import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 1.02, 0.98, 1],
        rotate: [0, 1, -1, 0],
        transition: { duration: 2, ease: "easeInOut" },
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-[#0B1B33] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ara.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#4C9EFF] text-sm uppercase tracking-wider
                px-4 py-2 rounded-full border border-[#4C9EFF]/20 backdrop-blur-sm"
            >
              WELCOME TO ARA NETWORKS
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <motion.h1
                className="text-6xl font-bold text-white"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Powering a Faster,
              </motion.h1>
              <motion.h1
                className="text-6xl font-bold text-[#4C9EFF]"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(76,158,255,0)",
                    "0 0 20px rgba(76,158,255,0.5)",
                    "0 0 0px rgba(76,158,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Safer Web
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white max-w-xl leading-relaxed
                backdrop-blur-sm bg-white/5 p-4 rounded-lg"
            >
              Enhance your network&apos;s speed, security, and efficiency with ARA Networks&apos; advanced web caching, optimization, and filtering solutions. Trusted by enterprises worldwide to deliver seamless digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="group relative inline-flex items-center px-6 py-3 text-base font-medium rounded-full
                    bg-[#4C9EFF] text-white overflow-hidden"
                >
                  <motion.span className="relative z-10 flex items-center">
                    Explore Products
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.span>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="relative inline-flex items-center px-6 py-3 text-base font-medium rounded-full
                    text-[#4C9EFF] border border-[#4C9EFF]/30 overflow-hidden group"
                >
                  <motion.span className="relative z-10">
                    Contact Us
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#4C9EFF]/0 group-hover:bg-[#4C9EFF]/10
                      transition-colors duration-300"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          {/* <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4C9EFF]/20 to-[#3178F6]/20 backdrop-blur-sm" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-8xl font-bold text-white">ARA</div>
              </motion.div>
            </motion.div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
