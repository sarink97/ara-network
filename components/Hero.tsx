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
        transition: { duration: 2, ease: "easeInOut" }
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-[#0B1B33] overflow-hidden">
      {/* Background Grid */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gradient-to-r from-[#4C9EFF]/10 via-blue-700/10 to-[#4C9EFF]/10"
        />
      </motion.div>

      {/* Animated Background Circles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-xl"
          style={{
            background: `radial-gradient(circle, rgba(76,158,255,0.15) 0%, rgba(76,158,255,0) 70%)`,
            width: `${Math.random() * 600 + 400}px`,
            height: `${Math.random() * 600 + 400}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            filter: ["blur(40px)", "blur(60px)", "blur(40px)"],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            rotate: [0, Math.random() * 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Particle Effect */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#4C9EFF]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 200 - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
            scale: [0, Math.random() * 2, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

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
                Secure Your
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
                Digital Future
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed
                backdrop-blur-sm bg-white/5 p-4 rounded-lg"
            >
              Experience unparalleled security and performance with our
              cutting-edge solutions. Protect your business with enterprise-
              grade technology trusted by industry leaders.
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
                      x: ['-100%', '100%'],
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
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Circular Elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute inset-0 border border-[#4C9EFF]/20 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute inset-[15%] border border-[#4C9EFF]/20 rounded-full"
                  animate={{
                    scale: [1.05, 1, 1.05],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute inset-[30%] border border-[#4C9EFF]/20 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating Dots */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#4C9EFF] rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 30}deg) translateX(160px)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                      filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Center Circle */}
              <motion.div 
                className="absolute inset-[25%] rounded-full 
                  flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-[#4C9EFF] to-[#3178F6]"
                animate={{
                  scale: [1, 1.03, 1],
                  background: [
                    "linear-gradient(135deg, #4C9EFF 0%, #3178F6 100%)",
                    "linear-gradient(225deg, #4C9EFF 0%, #3178F6 100%)",
                    "linear-gradient(315deg, #4C9EFF 0%, #3178F6 100%)",
                    "linear-gradient(45deg, #4C9EFF 0%, #3178F6 100%)",
                  ],
                }}
                transition={{
                  scale: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  background: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  boxShadow: "0 0 50px rgba(76,158,255,0.3), inset 0 0 30px rgba(255,255,255,0.1)"
                }}
              >
                {/* Animated Rings */}
                <div className="absolute inset-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={`ring-${i}`}
                      className="absolute inset-0 rounded-full border-2 border-white/10"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 10 + i * 5,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4 + i * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  ))}
                </div>

                {/* Animated Particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-8 bg-white/20 rounded-full"
                    style={{
                      transformOrigin: "center",
                      rotate: `${i * 45}deg`,
                    }}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      height: ["2rem", "3rem", "2rem"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Multiple Gradient Overlays */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/0"
                  animate={{
                    y: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* ARA Text with Letter Animation */}
                <div className="relative z-10 flex items-center justify-center gap-1">
                  {['A', 'R', 'A'].map((letter, i) => (
                    <motion.span
                      key={letter + i}
                      className="text-6xl font-bold text-white"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                        textShadow: [
                          "0 0 20px rgba(255,255,255,0.3)",
                          "0 0 30px rgba(255,255,255,0.6)",
                          "0 0 20px rgba(255,255,255,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                {/* Glowing Orb Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-full blur-md"
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}