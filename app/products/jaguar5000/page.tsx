"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Server, Cpu, Database, Network, ArrowRight, Monitor, Scale, Shield, Globe, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  "64-bit cache engine architecture",
  "10Gbps throughput capacity",
  "40-50% bandwidth savings",
  "Distributed cloud storage",
  "MCT/WCOS technologies",
  "24/7 technical support"
];

const sections = [
  {
    icon: Monitor,
    title: "Operating System",
    description: "Explore the revolutionary operating system that powers JAGUAR5000's exceptional performance.",
    link: "/products/jaguar5000/operating-system",
    gradient: "from-[#0B1B33] via-[#1E3A8A] to-[#3785CC]"
  },
  {
    icon: Cpu,
    title: "Technologies",
    description: "Discover the innovative technologies that make JAGUAR5000 a leader in web acceleration.",
    link: "/products/jaguar5000/technologies",
    gradient: "from-[#1E3A8A] via-[#3785CC] to-[#60A5FA]"
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Learn how JAGUAR5000 scales effortlessly to meet your growing business needs.",
    link: "/products/jaguar5000/scalability",
    gradient: "from-[#3785CC] via-[#60A5FA] to-[#93C5FD]"
  }
];

const stats = [
  { value: "10x", label: "Faster Content Delivery", icon: Network },
  { value: "50%", label: "Bandwidth Savings", icon: Database },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "24/7", label: "Support", icon: Globe }
];

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Diagonal Design */}
      <div className="relative bg-gradient-to-br from-[#0B1B33] via-[#1E3A8A] to-[#3785CC] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#3785CC]/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(55, 133, 204, 0.3), transparent)'
          }}></div>
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                JAGUAR
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-transparent bg-clip-text">
                  5000
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                Experience the next generation of proxy cache technology with unmatched performance and reliability
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 max-w-2xl mx-auto grid grid-cols-2 gap-4 text-left"
            >
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#60A5FA]" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12"
            >
              <a
                href="/downloads/jaguar5000-datasheet.pdf"
                download="JAGUAR5000-Datasheet.pdf"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1E3A8A] to-[#3785CC] hover:from-[#3785CC] hover:to-[#60A5FA] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download Datasheet
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Diagonal Border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-bottom-right"></div>
      </div>

      {/* Stats Section with Cards */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3785CC] mb-4">
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
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#0B1B33] to-[#1E3A8A] bg-clip-text text-transparent mb-4"
            >
              Advanced Features
            </motion.h2>
            <p className="text-xl text-gray-600">
              Discover what makes JAGUAR5000 the leading choice for network optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <Link href={section.link} className="inline-flex items-center text-[#1E3A8A] font-medium group/link">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
