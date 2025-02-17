"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {  
  const footerLinks = {
    products: {
      title: 'Products',
      links: [
        { text: 'JAGUAR5000', href: '/products/jaguar5000' },
        { text: 'TS-Plus', href: '/products/ts-plus' },
        { text: 'Partner Program', href: '/partner' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  };

  const contactInfo = [
    { 
      Icon: MapPin, 
      text: ['BOJEON BLDG. 15F, 70-13, NONHYUN-DONG', 'GANGNAM-GU, SEOUL, KOREA 135-010'],
      multiline: true 
    },
    { 
      Icon: Phone, 
      text: ['Tel.: +82 2 3446 6070', 'Fax: +82 2 3445 9099'],
      multiline: true 
    },
    { Icon: Mail, text: 'info@aranetworks.com' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/ara-networks/', label: 'LinkedIn' },
    { Icon: Facebook, href: 'https://www.facebook.com/aranetworks.Co.Ltd/', label: 'Facebook' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }
  
  return (
    <footer className="bg-gradient-to-b from-[#0B1B33] to-[#0B1B33]/95 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 py-12">
          {/* Company Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <Link href="/" className="block -ml-3">
                <Image 
                  src="/footer-logo.webp" 
                  alt="ARA Networks Logo" 
                  width={300}
                  height={120}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                ARA Networks is a leading provider of network security and optimization solutions, 
                delivering innovative technology to enhance network performance and security.
              </p>
              <div className="pt-2 flex gap-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link 
                    key={label}
                    href={href} 
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Products Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              PRODUCTS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/jaguar5000" className="text-white/60 hover:text-white transition-colors text-sm">
                  JAGUAR5000
                </Link>
              </li>
              <li>
                <Link href="/products/ts-plus" className="text-white/60 hover:text-white transition-colors text-sm">
                  TS-Plus
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-white/60 hover:text-white transition-colors text-sm">
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                CONTACT US
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <item.Icon className="w-5 h-5 text-[#3785CC] flex-shrink-0 mt-1" />
                    {item.multiline ? (
                      <div className="space-y-1">
                        {Array.isArray(item.text) ? (
                          item.text.map((line, i) => (
                            <p key={i} className="text-white/60 text-sm">
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className="text-white/60 text-sm">{item.text}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-white/60 text-sm">{item.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-white/60 text-sm text-center">
            &copy; {new Date().getFullYear()} ARA Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;