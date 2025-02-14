"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Globe, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade protection with cutting-edge security solutions",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving businesses worldwide with reliable network solutions",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with decades of industry experience",
  },
];

const stats = [
  { value: 24, label: "Years of Excellence", suffix: "+" },
  { value: 500, label: "Enterprise Clients", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
  { value: 30, label: "Countries Served", suffix: "+" },
];

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

function Counter({ value, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        const currentValue = Math.min(value * easedProgress, value);
        setCount(currentValue);

        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(value); // Ensure we end up at exactly the target value
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (Number.isInteger(num)) {
      return Math.round(num).toString();
    }
    return num.toFixed(1);
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-white/60">{label}</div>
    </div>
  );
}

export default function About() {
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

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] w-8 bg-[#4C9EFF]"></div>
          <h3 className="text-lg font-semibold text-[#4C9EFF] tracking-wide uppercase">
            About us
          </h3>
          <div className="h-[2px] flex-1 bg-white/10"></div>
        </div>

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Empowering Networks Since 1999
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/60"
          >
            Your Trusted Partner in Network Solutions
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-white/5 rounded-2xl backdrop-blur-sm"
        >
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16"
        >
          <Image
            src="/about.webp"
            alt="ARA Networks Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-transparent to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl">
              <p className="text-lg text-white/80 mb-6">
                Founded by a team of visionary computer scientists, ARA Networks
                has been at the forefront of network technology innovation for
                over two decades. Our commitment to excellence and continuous
                innovation has made us a trusted partner for enterprises
                worldwide.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#4C9EFF] hover:gap-4 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl transition-all duration-300 group-hover:bg-white/10" />
              <div className="relative p-8 flex gap-6">
                <div className="flex-shrink-0">
                  <feature.icon className="w-12 h-12 text-[#4C9EFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
