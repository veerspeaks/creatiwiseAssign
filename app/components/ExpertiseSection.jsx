'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
  const expertiseItems = [
    // Your expertise items
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Star Icon */}
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <div className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
            </svg>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
          >
            My Expertise
          </motion.h2>
        </div>
        
        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {/* Branding */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-white"></div>
              <h3 className="font-syne text-2xl md:text-3xl font-semibold">Branding</h3>
            </div>
            <p className="font-poppins text-base leading-relaxed text-gray-300">
              I create efficient, adaptable, and engaging websites. No predefined 
              patterns. No sluggish, complex code. Webflow forms the foundation of my 
              web development approach. I employ it to provide safe, top-notch 
              bespoke websites.
            </p>
          </div>
          
          {/* UI Design */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-white"></div>
              <h3 className="font-syne text-2xl md:text-3xl font-semibold">UI Design</h3>
            </div>
            <p className="font-poppins text-base leading-relaxed text-gray-300">
              I create efficient, adaptable, and engaging websites. No predefined 
              patterns. No sluggish, complex code. Webflow forms the foundation of my 
              web development approach. I employ it to provide safe, top-notch 
              bespoke websites.
            </p>
          </div>
          
          {/* UX Design */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-white"></div>
              <h3 className="font-syne text-2xl md:text-3xl font-semibold">UX Design</h3>
            </div>
            <p className="font-poppins text-base leading-relaxed text-gray-300">
              I comprehend and resolve digital product issues using a user-focused 
              methodology. Investigation, compassion, and visual conveyance are a 
              few techniques I apply to captivate and involve your users while fulfilling 
              your business requirements.
            </p>
          </div>
          
          {/* Development */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-white"></div>
              <h3 className="font-syne text-2xl md:text-3xl font-semibold">Development</h3>
            </div>
            <p className="font-poppins text-base leading-relaxed text-gray-300">
              I create user-friendly, adaptive, engaging websites. No cookie-cutters. No 
              cumbersome, complex coding. Webflow forms the foundation of my web 
              development approach, I employ it to produce safe, top-notch 
              personalized websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 