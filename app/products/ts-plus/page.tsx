"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Shield, Filter, Gauge, Network, Lock, BarChart, ArrowRight, Globe, Check, Server, Users, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const keyPoints = [
  "Blocking Harmful Websites for Business and Government",
  "Support N x 10/100Gbps Throughput",
  "Centralized Monitoring and Management",
  "Blocking All Known Detours"
];

const stats = [
  { value: "99.9%", label: "Filtering Accuracy", icon: Shield },
  { value: "100G", label: "Throughput Support", icon: Gauge },
  { value: "24/7", label: "Technical Support", icon: Users },
  { value: "1M+", label: "Protected Users", icon: Globe }
];

const useCases = [
  {
    icon: Building,
    title: "Government Agencies",
    description: "Ensure compliance with regulations and protect sensitive data with comprehensive content filtering.",
  },
  {
    icon: Server,
    title: "Internet Service Providers",
    description: "Deliver secure internet services with advanced filtering capabilities for your customers.",
  },
  {
    icon: Users,
    title: "Educational Institutions",
    description: "Create safe learning environments with customizable content filtering policies.",
  }
];

const features = [
  {
    icon: Shield,
    title: "Harmful Website Blocking",
    description: "Comprehensive blocking of harmful websites, including adult content, gambling sites, and offensive material for safer network usage.",
    gradient: "from-[#0B1B33] via-[#1E3A8A] to-[#3785CC]",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Support for N x 10/100Gbps throughput, ensuring fast and efficient content filtering without compromising network speed.",
    gradient: "from-[#1E3A8A] via-[#3785CC] to-[#60A5FA]",
  },
  {
    icon: Network,
    title: "Centralized Management",
    description: "Unified monitoring and management interface for easy control of content filtering across your entire network infrastructure.",
    gradient: "from-[#3785CC] via-[#60A5FA] to-[#93C5FD]",
  },
  {
    icon: Lock,
    title: "Detour Prevention",
    description: "Advanced detection and blocking of all known detours and bypass attempts, maintaining strict content filtering policies.",
    gradient: "from-[#0B1B33] via-[#1E3A8A] to-[#3785CC]",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Intelligent content analysis and categorization to effectively manage and control access based on organizational policies.",
    gradient: "from-[#1E3A8A] via-[#3785CC] to-[#60A5FA]",
  },
  {
    icon: Globe,
    title: "Compliance",
    description: "Ensures compliance with network security policies and guidelines established by governments, ISPs, and corporations.",
    gradient: "from-[#3785CC] via-[#60A5FA] to-[#93C5FD]",
  },
];

export default function TsPlusPage() {
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
                ARA
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] text-transparent bg-clip-text">
                  TS-Plus
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                Next-Generation Web Content Filtering Solution
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 max-w-2xl mx-auto grid grid-cols-1 gap-4 text-left"
            >
              {keyPoints.map((point, index) => (
                <div key={point} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#60A5FA]" />
                  <span className="text-blue-100">{point}</span>
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
              <motion.a
                href="/downloads/ara-ts-plus.pdf"
                download="ara-ts-plus.pdf"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1E3A8A] to-[#3785CC] hover:from-[#3785CC] hover:to-[#60A5FA] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Datasheet
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Diagonal Border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-bottom-right"></div>
      </div>

      {/* Stats Section */}
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

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-50/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="relative group max-w-4xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/ts-plus.webp"
                  alt="ARA TS-Plus Device"
                  width={800}
                  height={533}
                  className="relative rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] w-full"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  Advanced Web Filtering Solution
                </h2>
                <p className="text-gray-700 mb-12 text-lg leading-relaxed">
                  ARA TS-Plus provides comprehensive web filtering capabilities with high-performance throughput, 
                  ensuring your network remains secure and compliant. Perfect for organizations that need robust 
                  content control and policy enforcement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-br from-[#0B1B33] via-[#1E3A8A] to-[#3785CC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Trusted Across Industries
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-blue-100">{useCase.description}</p>
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
              Key Features
            </motion.h2>
            <p className="text-xl text-gray-600">
              Advanced features ensuring secure and compliant web access across your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}