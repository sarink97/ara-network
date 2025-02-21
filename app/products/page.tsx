"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Network,
  ArrowRight,
  Monitor,
  Scale,
  Globe,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "JAGUAR5000 Cache Engine",
    description:
      "World's first 64-bit cache engine delivering 10Gbps throughput with 40-50% bandwidth savings. Features distributed cloud storage and proprietary MCT/WCOS technologies for unmatched performance.",
    image: "/jaguar.webp",
    link: "/products/jaguar5000",
  },
  {
    id: 2,
    title: "ARA TS-Plus",
    description:
      "Advanced web content filtering solution supporting N x 10/100Gbps throughput. Centralized monitoring and management for blocking harmful websites and all known detours.",
    image: "/ara-ts.webp",
    link: "/products/ts-plus",
  },
];

const keyPoints = [
  "Advanced Web Acceleration",
  "Remote Access Solutions",
  "Enterprise Security",
  "Cloud Integration",
  "24/7 Technical Support",
  "Scalable Architecture",
];

const stats = [
  { value: "10+", label: "Years Experience", icon: Monitor },
  { value: "2", label: "Core Products", icon: Server },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "24/7", label: "Support", icon: Network },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0B1B33]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] opacity-90" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.15]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto mt-12 px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Enterprise-Grade Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-gray-300 mb-12"
            >
              Cutting-edge technology solutions designed to enhance your
              business performance and security
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative py-32 bg-gray-50/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.015]" />

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delay-1" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delay-2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <h3 className="text-lg font-semibold text-blue-600 tracking-wide uppercase">
              Featured Products
            </h3>
            <div className="h-[2px] flex-1 bg-gray-200"></div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {products.map((product) => (
              <div key={product.id} className="group relative h-full">
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50" />

                  {/* Content Container */}
                  <div className="relative rounded-2xl p-8 flex flex-col h-full">
                    {/* Image and Number */}
                    <div className="relative">
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 mix-blend-multiply" />
                      </div>
                      <div className="absolute -bottom-4 left-4 bg-white shadow-xl rounded-full p-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                          {product.id}
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col mt-12">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mt-4 flex-1">
                        {product.description}
                      </p>
                      <Link
                        href={product.link}
                        className="inline-flex items-center text-blue-600 font-semibold mt-6 group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
