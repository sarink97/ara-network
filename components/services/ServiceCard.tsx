"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    link: string;
    image: string;
    id: number;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50" />
        
        {/* Content Container */}
        <div className="relative rounded-2xl p-8 flex flex-col h-full">
          {/* Image and Number */}
          <div className="relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-4 left-4 bg-white shadow-xl rounded-full p-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {service.id}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col mt-12">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mt-4 flex-1">
              {service.description}
            </p>

            {/* Action Button */}
            <div className="mt-8">
              <Link
                href={service.link}
                className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 rounded-xl transition-colors duration-300"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
