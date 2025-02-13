"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Server, Shield, Network, ArrowRight, Monitor, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  "Advanced Web Acceleration",
  "Remote Access Solutions",
  "Enterprise Security",
  "Cloud Integration",
  "24/7 Technical Support",
  "Scalable Architecture"
];

const sections = [
  {
    icon: Server,
    title: "JAGUAR5000",
    description: "Advanced web acceleration and caching solution with 64-bit architecture, offering up to 10Gbps throughput.",
    link: "/products/jaguar5000",
    gradient: "from-[#0B1B33] via-[#1E3A8A] to-[#3785CC]"
  },
  {
    icon: Shield,
    title: "TS-Plus",
    description: "Remote access solution providing secure and efficient connectivity for your business applications and resources.",
    link: "/products/ts-plus",
    gradient: "from-[#1E3A8A] via-[#3785CC] to-[#60A5FA]"
  }
];

const stats = [
  { value: "10+", label: "Years Experience", icon: Monitor },
  { value: "2", label: "Core Products", icon: Server },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "24/7", label: "Support", icon: Network }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0B1B33] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] opacity-90"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Enterprise Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Cutting-edge technology solutions designed to enhance your business performance and security
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <p className="text-sm sm:text-base font-medium text-gray-200">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-[#3785CC] uppercase tracking-wide"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Featured Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={section.link}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>
                    <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${section.gradient} mb-5`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#3785CC] transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="mt-4 text-gray-500">
                        {section.description}
                      </p>
                      <div className="mt-4 flex items-center text-[#3785CC] group/link">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1B33]/5">
                    <Icon className="h-6 w-6 text-[#3785CC]" />
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
