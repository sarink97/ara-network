import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologiesDiagram = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-white rounded-lg shadow-lg border border-gray-100"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#181c52] via-[#181c52] to-[#3785CC] p-8 rounded-t-lg">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#3785CC] via-[#4A9BE4] to-[#5B8AF0] bg-clip-text text-transparent mb-2">Core Technologies</h2>
        <p className="text-blue-100">ARA Proprietary OS and Applications</p>
      </div>

      <div className="p-8">
        {/* Section Headers */}
        <div className="flex mb-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#181c52] flex items-center gap-2">
              <div className="w-1 h-6 bg-[#3785CC] rounded-full"></div>
              Core Technologies
            </h3>
          </div>
          <div className="w-[320px]">
            <h3 className="text-xl font-semibold text-[#181c52] flex items-center gap-2">
              <div className="w-1 h-6 bg-[#4A9BE4] rounded-full"></div>
              Applications
            </h3>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Left Column - Core Technologies */}
          <div className="flex-1">
            {/* Web Cache Technologies Group */}
            <div className="relative mb-12">
              <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3785CC] to-[#4A9BE4] rounded-full"></div>
              
              {/* Group Label */}
              <div className="mb-4 ml-4">
                <h4 className="text-[#3785CC] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#3785CC] rounded-full"></span>
                  Web Cache Technologies
                </h4>
              </div>
              
              {/* MCT Box */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-[280px] bg-white border border-[#3785CC]/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3785CC]/50">
                    <div className="bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] px-4 py-2.5 rounded-t-[5px]">
                      <h4 className="text-white font-bold text-lg">MCT</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-sm font-medium">Minimal Context Thread</p>
                      <p className="text-gray-600 text-sm font-medium">system</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-[#3785CC]/20 hover:border-[#3785CC]/30 transition-colors">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>Advanced thread model with asynchronous scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>Optimized for multi-core processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* WCOS Box */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-[280px] bg-white border border-[#3785CC]/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3785CC]/50">
                    <div className="bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] px-4 py-2.5 rounded-t-[5px]">
                      <h4 className="text-white font-bold text-lg">WCOS</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-sm font-medium">Web Cache Object</p>
                      <p className="text-gray-600 text-sm font-medium">Storage</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-[#3785CC]/20 hover:border-[#3785CC]/30 transition-colors">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>High-performance RAM utilization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>Optimized I/O operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Web Monitor Technologies Group */}
            <div className="relative">
              <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3785CC] to-[#4A9BE4] rounded-full"></div>
              
              {/* Group Label */}
              <div className="mb-4 ml-4">
                <h4 className="text-[#3785CC] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#3785CC] rounded-full"></span>
                  Web Monitor Technologies
                </h4>
              </div>
              
              {/* NMP Box */}
              <motion.div variants={itemVariants}>
                <div className="flex items-start gap-6">
                  <div className="w-[280px] bg-white border border-[#3785CC]/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3785CC]/50">
                    <div className="bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] px-4 py-2.5 rounded-t-[5px]">
                      <h4 className="text-white font-bold text-lg">NMP</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-sm font-medium">Network Monitoring</p>
                      <p className="text-gray-600 text-sm font-medium">Platform</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-[#3785CC]/20 hover:border-[#3785CC]/30 transition-colors">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>L7 DPI engine with direct bypass</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3785CC] mt-1">•</span>
                        <span>10G/100G architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Applications */}
          <div className="w-[320px] relative">
            <div className="absolute -left-6 top-[25%] bottom-[25%] w-[2px] bg-gradient-to-b from-[#3785CC] to-[#4A9BE4] rounded-full"></div>
            
            {/* Connection Lines */}
            <div className="absolute -left-[28px] top-[30%] w-[20px] h-[2px] bg-[#3785CC]"></div>
            <div className="absolute -left-[28px] bottom-[30%] w-[20px] h-[2px] bg-[#3785CC]"></div>
            
            {/* JAGUAR5000 */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white border border-[#3785CC]/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3785CC]/50">
                <div className="bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] px-5 py-3 rounded-t-[5px]">
                  <h4 className="text-white font-bold text-xl">Web Cache</h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-lg font-medium">JAGUAR5000</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-[#3785CC]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Powered by MCT & WCOS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web Monitor */}
            <motion.div variants={itemVariants}>
              <div className="bg-white border border-[#3785CC]/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#3785CC]/50">
                <div className="bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] px-4 py-2.5 rounded-t-[5px]">
                  <h4 className="text-white font-bold text-lg">Web Monitor</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm font-medium mb-2">Traffic Control</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <p>ARA TS-Plus</p>
                    <p>ARA-PPTM</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#3785CC]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Powered by NMP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoreTechnologiesDiagram;
