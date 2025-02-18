"use client";

import { motion } from "framer-motion";
import {
  Network,
  Shield,
  Globe,
  Database,
  Check,
  Server,
  Code,
} from "lucide-react";
import Image from "next/image";
import CoreTechnologiesDiagram from "@/components/CoreTechnologiesDiagram";

const stats = [
  { value: "10x", label: "Faster Content Delivery", icon: Network },
  { value: "50%", label: "Bandwidth Savings", icon: Database },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "24/7", label: "Support", icon: Globe },
];

const solutions = [
  {
    icon: Network,
    title: "JAGUAR",
    description:
      "Our flagship caching solution that revolutionizes web, media, and mobile performance, ensuring faster and more efficient content delivery.",
  },
  {
    icon: Shield,
    title: "TS-Plus Web Filtering",
    description:
      "An advanced solution designed to enhance security and optimize network traffic by filtering unwanted or harmful web content.",
  },
];

const technologies = [
  {
    icon: Server,
    title: "JAGUAR OS",
    description:
      "A caching-only OS designed to handle massive and overused network traffic effortlessly. It enhances web content delivery speed, delivering an unparalleled user experience while maximizing network efficiency.",
  },
  {
    icon: Code,
    title: "NMP",
    description:
      "A high-performance traffic monitoring solution built for backbone networks. Powered by advanced DPI (Deep Packet Inspection) technology, NMP ensures network transparency and efficient management of large-scale traffic.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Diagonal Design */}
      <div className="relative bg-gradient-to-br from-[#0B1B33] via-[#1E3A8A] to-[#3785CC] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#3785CC]/10 via-transparent to-transparent"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 120%, rgba(55, 133, 204, 0.3), transparent)",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3785CC]/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E3A8A]/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-white/10 text-white/80">
                About Us
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Empowering
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-transparent bg-clip-text ml-4">
                  Networks
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
<<<<<<< HEAD
                Since 1999, we&apos;ve been dedicated to solving operators&apos;
                toughest challenges in an era of explosive internet growth{" "}
=======
                Since 1999, we&apos;ve been dedicated to solving operators&apos; toughest challenges in an era of explosive internet growth
>>>>>>> dec896df17a190cfe3da28375f7892fe1bfd24a2
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3785CC] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Cutting-Edge Solutions, Trusted Globally
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
<<<<<<< HEAD
                Founded in 1999 by a team of visionary computer scientists, ARA
                Networks has been dedicated to solving operators&apos; toughest
                challenges. Today, we&apos;re a global leader in web, media, and
                mobile caching solutions, committed to driving innovation and
                performance for businesses worldwide.
=======
                Founded in 1999 by a team of visionary computer scientists, ARA Networks has been dedicated to solving operators&apos; toughest challenges. Today, we&apos;re a global leader in web, media, and mobile caching solutions, committed to driving innovation and performance for businesses worldwide.
>>>>>>> dec896df17a190cfe3da28375f7892fe1bfd24a2
              </p>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3785CC] flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/about.webp"
                alt="ARA Networks Overview"
                width={800}
                height={533}
                className="relative rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] w-full"
              />
            </motion.div>
          </div>

          {/* Core Technologies Section */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Core Technologies: Redefining Network Efficiency
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                At ARA Networks, our independently developed operating system
                (OS) technology delivers unmatched performance and reliability
                for optimal network traffic management.
              </p>
            </motion.div>

            <div className="flex flex-col gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <CoreTechnologiesDiagram />
              </motion.div>
<<<<<<< HEAD

=======
              
>>>>>>> dec896df17a190cfe3da28375f7892fe1bfd24a2
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3785CC] flex items-center justify-center">
                          <tech.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
<<<<<<< HEAD
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {tech.title}
                        </h3>
=======
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
>>>>>>> dec896df17a190cfe3da28375f7892fe1bfd24a2
                        <p className="text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Global Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                Globally Recognized Leadership
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                ARA Networks is proud to be recognized as one of the Top 6
                Global Companies in the Transparent Caching Market, as
                highlighted by Frost & Sullivan in their analysis. This
                acknowledgment reflects our unwavering commitment to innovation,
                reliability, and exceptional service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
