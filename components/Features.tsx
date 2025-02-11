"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, TrendingUp } from "lucide-react";

const iconMap = {
  Shield,
  Clock,
  Users,
  TrendingUp,
};

const advantagesData = {
  title: "Why Choose ARA Networks?",
  subtitle: "Experience the difference with our cutting-edge network solutions",
  features: [
    {
      icon: "Shield",
      title: "Enhanced Security",
      description: "Centralized monitoring and management with advanced protection for blocking harmful websites and all known detours",
      gradient: "from-[#3785CC] to-[#4A9BE4]"
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock expert support with proven stability and performance across numerous customer deployments worldwide",
      gradient: "from-[#4A9BE4] to-[#5B8AF0]"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Founded by visionary computer scientists, delivering innovative solutions for operators' toughest challenges since 1999",
      gradient: "from-[#5B8AF0] to-[#8590EA]"
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description: "Support for tens of terabytes storage and millions of concurrent connections with linear performance scaling",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
    }
  ]
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B1B33] to-[#0B1B33]/95">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-float-delay-1" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-float-delay-2" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B33]/0 via-[#0B1B33]/50 to-[#0B1B33]/0 animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] w-8 bg-[#4C9EFF]"></div>
          <h3 className="text-lg font-semibold text-[#4C9EFF] tracking-wide uppercase">Our Advantages</h3>
          <div className="h-[2px] flex-1 bg-white/10"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            {advantagesData.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            {advantagesData.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {advantagesData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4C9EFF] to-blue-500 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
