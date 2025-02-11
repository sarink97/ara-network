"use client";

import { motion } from "framer-motion";
import { Network, Database, Scale, Layers, Server, Cloud } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Distributed Storage",
    description: "Support for tens of terabytes in a single system, expandable via external storage (NAS and DAS) for optimized content delivery.",
    gradient: "from-blue-600 via-blue-700 to-blue-800"
  },
  {
    icon: Scale,
    title: "Load Balancing",
    description: "Intelligent traffic distribution across multiple cache servers ensures optimal resource utilization and high availability.",
    gradient: "from-blue-500 via-blue-600 to-blue-700"
  },
  {
    icon: Server,
    title: "Cluster Management",
    description: "Seamless monitoring and management for clustered servers, ensuring smooth operations with reduced administrative overhead.",
    gradient: "from-blue-400 via-blue-500 to-blue-600"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Easy integration with cloud storage solutions for unlimited scalability and flexible deployment options.",
    gradient: "from-blue-300 via-blue-400 to-blue-500"
  }
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

export default function ScalabilityPage() {
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
                Unlimited
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text ml-2">
                  Scalability
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto font-light"
            >
              Scale your caching infrastructure effortlessly with JAGUAR5000's advanced distributed architecture
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-8">
            Enterprise-Grade Scalability
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            JAGUAR5000's distributed architecture allows seamless scaling from single servers to large clusters,
            supporting growing traffic demands while maintaining optimal performance and reliability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative rounded-2xl bg-white backdrop-blur-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-100 p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Distributed Architecture
          </h3>
          <div className="aspect-video bg-white rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                <div className="flex flex-col items-center space-y-4">
                  <Server className="w-12 h-12 text-blue-600" />
                  <div className="text-sm font-medium text-gray-600">Cache Server 1</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <Server className="w-12 h-12 text-blue-500" />
                  <div className="text-sm font-medium text-gray-600">Cache Server 2</div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <Server className="w-12 h-12 text-blue-400" />
                  <div className="text-sm font-medium text-gray-600">Cache Server 3</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}