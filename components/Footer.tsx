"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {  
  const footerLinks = {
    products: {
      title: 'Products',
      links: [
        { text: 'JAGUAR5000', href: '/products/jaguar5000' },
        { text: 'TS-Plus', href: '/products/ts-plus' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '/blogs' },
        { text: 'Partner Program', href: '/partner' },
        { text: 'Messages', href: '/messages' },
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
    { Icon: Mail, text: 'info@ara-networks.com' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/ara-networks', label: 'LinkedIn' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12">
          {/* Company Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <Link href="/" className="block">
                <Image 
                  src="/logo_ow.webp" 
                  alt="ARA Networks Logo" 
                  width={140}
                  height={56}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                ARA Networks is a leading provider of network security and optimization solutions, 
                delivering innovative technology to enhance network performance and security.
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.values(footerLinks).map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link 
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.Icon className="w-4 h-4 text-[#4C9EFF] mt-1 flex-shrink-0" />
                  <div className="text-white/60">
                    {item.multiline ? (
                      item.text.map((line, i) => (
                        <div key={i} className="text-sm leading-relaxed">{line}</div>
                      ))
                    ) : (
                      <div className="text-sm">{item.text}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="mt-6">
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="py-6 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARA Networks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;