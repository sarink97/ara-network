"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-[#0B1B33]/5" />
      
      {/* Decorative Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.015]" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#0B1B33]/[0.03] to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-[#0B1B33]/[0.03] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Decorative Card Background */}
          <div className="absolute inset-0 -skew-y-2 bg-white shadow-xl rounded-3xl transform -rotate-1 scale-[1.02] opacity-70" />
          <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#0B1B33] to-[#0B1B33]/90 rounded-3xl transform rotate-1" />
          
          {/* Main Content Card */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0B1B33]/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0B1B33]/10 to-transparent" />
            
            <div className="px-8 py-16 sm:px-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#0B1B33]/5 to-[#0B1B33]/10 rounded-full text-[#0B1B33] text-sm font-medium mb-8">
                  Ready to Get Started?
                </span>

                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0B1B33] to-[#0B1B33]/80 bg-clip-text text-transparent">
                  Transform Your Network Infrastructure Today
                </h2>
                
                <p className="text-lg mb-12 text-[#0B1B33]/60 max-w-2xl mx-auto leading-relaxed">
                  Join the growing number of businesses that trust IC&I for their network optimization and security solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#0B1B33] to-[#0B1B33]/90 rounded-full 
                      overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0B1B33]/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative flex items-center text-white font-medium">
                      Schedule a Consultation
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    className="group px-8 py-4 rounded-full border-2 border-[#0B1B33]/10 hover:border-[#0B1B33]/20
                      transition-all duration-300 text-[#0B1B33]/70 hover:text-[#0B1B33] hover:bg-[#0B1B33]/5"
                  >
                    <span className="flex items-center font-medium">
                      View Our Solutions
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}