"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  HardDrive,
  Network,
  Shield,
  BarChart,
  Zap,
  Database,
  Scale,
  Activity,
  Users,
  PlayCircle,
} from "lucide-react";

const performanceMetrics = [
  { value: "64-bit", label: "Cache Engine", icon: Cpu },
  { value: "10TB+", label: "Storage Capacity", icon: HardDrive },
  { value: "1M+", label: "Concurrent Users", icon: Users },
  { value: "100%", label: "Scalability", icon: Scale },
];

const features = [
  {
    title: "World's First 64-bit Cache Engine",
    description:
      "Powered by groundbreaking technology, delivering unmatched performance and continuous innovation. Hardware-independent software design ensures greater flexibility in storage configuration.",
    benefits: [
      "Industry-leading performance capabilities",
      "Hardware-independent architecture",
      "Flexible storage configuration",
      "Continuous performance optimization",
    ],
    icon: Cpu,
    gradient: "from-[#0B1B33] via-[#1E3A8A] to-[#3785CC]",
  },
  {
    title: "Unrivaled Storage Capacity",
    description:
      "Supports tens of terabytes in a single system, expandable via external storage (NAS and DAS). Optimized for handling large content, such as video files.",
    benefits: [
      "Tens of terabytes storage capacity",
      "External storage support (NAS/DAS)",
      "Optimized for large content delivery",
      "Efficient video content handling",
    ],
    icon: HardDrive,
    gradient: "from-[#1E3A8A] via-[#3785CC] to-[#60A5FA]",
  },
  {
    title: "Advanced Connection Management",
    description:
      "Provides stable and reliable service for millions of simultaneous connections, even during high web traffic. Features built-in protection against cyber threats.",
    benefits: [
      "Millions of concurrent connections",
      "Built-in connection pool with large buffer",
      "Protection against SYN attacks",
      "DoS attack prevention",
    ],
    icon: Network,
    gradient: "from-[#3785CC] to-[#60A5FA]",
  },
];

const highlights = [
  {
    title: "Linear Performance Scaling",
    description:
      "Increases performance proportionally with hardware upgrades, offering scalability for evolving needs.",
    icon: Scale,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "High Stability",
    description:
      "Designed to manage heavy traffic loads seamlessly while maintaining robust defenses against cyber threats.",
    icon: Shield,
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    title: "Efficient Content Delivery",
    description:
      "Optimized for large-scale data delivery, making it ideal for video and bandwidth-intensive applications.",
    icon: PlayCircle,
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0B1B33] via-[#1E3A8A] to-[#3785CC] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
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

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                JAGUAR5000
                <span className="block text-2xl md:text-3xl mt-2 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-transparent bg-clip-text">
                  Industry-Leading Technologies
                </span>
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mt-4">
                Experience unprecedented capacity and performance with our
                advanced caching solutions
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                >
                  <metric.icon className="w-6 h-6 text-blue-300 mx-auto mb-3" />
                  <div className="text-xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-blue-200">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal Border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-bottom-right"></div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] bg-clip-text text-transparent mb-8">
                Revolutionary Cache Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The JAGUAR5000 is powered by the world&apos;s first 64-bit cache
                engine, delivering unmatched performance and continuous
                innovation. Its hardware-independent software design ensures
                greater flexibility in storage configuration, enabling linear
                performance growth with hardware upgrades.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-50 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] bg-clip-text text-transparent">
              Advanced Features
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center mr-2 group-hover/item:bg-blue-100 transition-colors duration-200">
                          <Zap className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-gray-600 text-sm flex-1">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
              Key Benefits
            </h2>
            <p className="text-gray-600">
              Discover the advantages that set JAGUAR5000 apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${highlight.gradient})`,
                  }}
                ></div>
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <highlight.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
