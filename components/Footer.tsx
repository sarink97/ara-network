"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {  
  const footerLinks = {
    solutions: {
      title: 'Our Solutions',
      links: [
        { text: 'Network Security', href: '/services/network-security' },
        { text: 'Network Optimization', href: '/services/network-optimization' },
        { text: 'Partner Program', href: '/partner' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Services', href: '/services' },
      ],
    },
  };

  const contactInfo = [
    { Icon: MapPin, text: 'Amman, Jordan' },
    { 
      Icon: Phone, 
      text: ['Phone: +962 6 552 8558', 'Fax: +962 6 552 8559'],
      multiline: true 
    },
    { Icon: Mail, text: 'info@ara-networks.com' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
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
    return null; // Hide Footer on admin pages
  }
  
  return (
    <footer className="bg-gradient-to-b from-[#0B1B33] to-[#0B1B33]/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#4C9EFF]/[0.02] to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-[#4C9EFF]/[0.02] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
        >
          {/* Company Info */}
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
              Leading provider of network optimization and security solutions, empowering businesses with cutting-edge technology since 1999.
            </p>
          </motion.div>

          {/* Solutions Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">{footerLinks.solutions.title}</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">{footerLinks.company.title}</h3>
            <ul className="space-y-4">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.Icon className="w-5 h-5 text-[#4C9EFF] mt-1" />
                  <div className="text-white/60">
                    {item.multiline ? (
                      item.text.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))
                    ) : (
                      item.text
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.Icon className="w-5 h-5 text-white/60" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARA Networks. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;