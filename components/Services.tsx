"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "./services/ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "JAGUAR5000 Cache Engine",
    description: "World's first 64-bit cache engine delivering 10Gbps throughput with 40-50% bandwidth savings. Features distributed cloud storage and proprietary MCT/WCOS technologies for unmatched performance.",
    servicelink: "/products/jaguar5000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ARA TS-Plus",
    description: "Advanced web content filtering solution supporting N x 10/100Gbps throughput. Centralized monitoring and management for blocking harmful websites and all known detours.",
    servicelink: "/products/ts-plus",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop"
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.015]" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delay-1" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delay-2" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50/50 animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] w-8 bg-blue-600"></div>
          <h3 className="text-lg font-semibold text-blue-600 tracking-wide uppercase">Our Solutions</h3>
          <div className="h-[2px] flex-1 bg-gray-200"></div>
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Advanced Network Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Empowering businesses with cutting-edge network optimization and security solutions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                service={{
                  title: service.title,
                  description: service.description,
                  link: `${service.servicelink}`,
                  image: service.image,
                  id: service.id
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
