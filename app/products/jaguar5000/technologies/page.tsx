"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Gauge, Zap, Server, Network } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "MCT Technology",
    description: "Minimal Context Thread System optimizes thread management and context switching, supporting SMP for enhanced performance scaling with CPU cores.",
    features: [
      "Minimizes overhead through optimized context switching",
      "Supports SMP for proportional performance scaling",
      "Combines thread systems with asynchronous scheduling",
      "Enhances multi-core utilization efficiency"
    ],
    gradient: "from-blue-500 via-blue-600 to-blue-700"
  },
  {
    icon: Database,
    title: "WCOS Storage",
    description: "Web Cache Object Storage reduces disk I/O bottlenecks and enhances RAM utilization for superior data transmission in high-frequency CDN environments.",
    features: [
      "Reduces disk I/O bottlenecks significantly",
      "Optimizes RAM utilization for small objects",
      "Enhances high-frequency CDN performance",
      "Improves data transmission efficiency"
    ],
    gradient: "from-blue-400 via-blue-500 to-blue-600"
  }
];

const stats = [
  { value: "10Gbps", label: "Throughput" },
  { value: "50%", label: "Bandwidth Savings" },
  { value: "1M+", label: "Concurrent Connections" },
  { value: "64-bit", label: "Architecture" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5 
    },
  },
};

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#111240] via-[#1a1c4d] to-[#3785CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-blue-500/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
                Revolutionary
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text ml-2">
                  Technologies
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto font-light"
            >
              Discover the innovative core technologies that power JAGUAR5000's exceptional performance
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 mb-12 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-r ${tech.gradient} shadow-lg mb-8 inline-block`}>
                    <tech.icon className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
                    {tech.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {tech.description}
                  </p>
                  <ul className="space-y-4">
                    {tech.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'} relative`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <tech.icon className="w-32 h-32 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}