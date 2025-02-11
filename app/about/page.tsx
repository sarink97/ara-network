"use client";

import { motion } from "framer-motion";
import {
  Network,
  Shield,
  Globe,
  Cpu,
  MonitorCheck,
  Award,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  const solutions = [
    {
      icon: Cpu,
      title: "JAGUAR OS",
      text: "A caching-only OS designed to handle massive and overused network traffic effortlessly",
      gradient: "from-[#5B8AF0] to-[#8590EA]",
    },
    {
      icon: MonitorCheck,
      title: "NMP",
      text: "A high-performance traffic monitoring solution built for backbone networks. Powered by advanced DPI technology",
      gradient: "from-[#8590EA] to-[#B5C6F4]",
    },
  ];

  const overview = [
    {
      icon: Network,
      title: "JAGUAR",
      text: "Our flagship caching solution that revolutionizes web, media, and mobile performance, ensuring faster and more efficient content delivery",
      gradient: "from-[#3785CC] to-[#4A9BE4]",
    },
    {
      icon: Shield,
      title: "TS-Plus Web Filtering",
      text: "An advanced solution designed to enhance security and optimize network traffic by filtering unwanted or harmful web content",
      gradient: "from-[#4A9BE4] to-[#5B8AF0]",
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111240] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm inline-block">
                About Us
              </span>
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-8 leading-tight">
              Empowering Networks <br />Since 1999
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Founded by a team of visionary computer scientists, ARA Networks has been dedicated to solving operators' toughest challenges in an era of explosive internet growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3785CC]/5 via-[#5B8AF0]/5 to-[#8590EA]/5 animate-gradient"></div>
        </div>

        <div className="relative">
          {/* Overview Section */}
          <div className="py-16 container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#3785CC]/10 to-[#4A9BE4]/10 text-[#3785CC] mb-4">
                  Our Solutions
                </span>
                <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#111240] to-[#3785CC] bg-clip-text text-transparent tracking-tight leading-tight">
                  Cutting-Edge Solutions, Trusted Globally
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants}>
                  <div className="prose prose-lg max-w-none text-left">
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Today, we're a global leader in web, media, and mobile caching solutions, committed to driving innovation 
                      and performance for businesses worldwide.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Powered by patented technologies, our Telco-grade solutions are trusted by hundreds of enterprises, 
                      Tier-1 operators, and CDN providers across the globe.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      ARA Networks is proud to be recognized as one of the Top 6 Global Companies in the Transparent Caching Market, 
                      as highlighted by Frost & Sullivan in their analysis. This acknowledgment reflects our unwavering commitment 
                      to innovation, reliability, and exceptional service.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-2xl blur-xl opacity-20"></div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=800"
                      alt="Network Technology"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {overview.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative group h-full"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
                        <div className="relative bg-white/30 backdrop-blur-[2px] p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 group h-full flex flex-col overflow-hidden">
                          <div className="absolute inset-0 -z-10">
                            <Image
                              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
                              alt="Network Pattern"
                              fill
                              className="object-cover opacity-30"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/30"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3785CC]/10 via-transparent to-[#4A9BE4]/10"></div>
                          </div>
                          <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#111240] to-[#3785CC] bg-clip-text text-transparent">
                              {solution.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base relative">{solution.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
            </motion.div>
          </div>

          {/* Core Technologies Section */}
          <div className="py-16 bg-gradient-to-b from-white via-[#f8faff] to-white">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#3785CC]/10 to-[#4A9BE4]/10 text-[#3785CC] mb-4">
                    Technology
                  </span>
                  <h2 className="text-4xl font-bold pb-2 mb-6 bg-gradient-to-r from-[#111240] to-[#3785CC] bg-clip-text text-transparent">
                    Core Technologies
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    At ARA Networks, our independently developed operating system (OS) technology delivers unmatched performance 
                    and reliability for optimal network traffic management.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {solutions.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative group h-full"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
                        <div className="relative bg-white/30 backdrop-blur-[2px] p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 group h-full flex flex-col overflow-hidden">
                          <div className="absolute inset-0 -z-10">
                            <Image
                              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
                              alt="Network Pattern"
                              fill
                              className="object-cover opacity-30"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/30"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3785CC]/10 via-transparent to-[#4A9BE4]/10"></div>
                          </div>
                          <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#111240] to-[#3785CC] bg-clip-text text-transparent">
                              {solution.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base relative">{solution.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 text-lg text-center mt-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Our core technologies empower businesses to manage traffic securely and productively, ensuring 
                  a robust and seamless network environment for customers around the globe.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-32 container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC]/10 to-[#4A9BE4]/10 rounded-3xl -rotate-1"></div>
                <div className="relative bg-white p-12 rounded-3xl border border-gray-100 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                  <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#111240] to-[#3785CC] bg-clip-text text-transparent">
                    Join the Future of Networking
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Let ARA Networks take your business to the next level with smarter solutions for caching, 
                    filtering, and traffic management. Discover how we're redefining the network experience 
                    for a connected world.
                  </p>
                  <button className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] hover:from-[#3275B8] hover:to-[#4188C8] transition-colors duration-300">
                    Get Started
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}