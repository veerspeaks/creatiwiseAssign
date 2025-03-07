'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full flex flex-col gap-8 sm:gap-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.5rem,6vw,4.5rem)] font-extrabold leading-tight tracking-tighter uppercase font-syne"
        >
          I AM A 
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="relative inline-block mx-1 sm:mx-2 overflow-hidden rounded-full w-[1em] h-[1em] sm:w-[2em] sm:h-[0.8em] align-middle"
          >
            <Image 
              src="/head1.jpeg" 
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.span> 
          FREELANCE DESIGNER
          <br className="block sm:hidden" />
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="relative inline-block mx-1 sm:mx-2 overflow-hidden rounded-full w-[1em] h-[1em] sm:w-[2em] sm:h-[0.8em] align-middle"
          >
            <Image 
              src="/head2.png" 
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.span> 
          FROM
          <br />
          SAN FRANCISCO
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 mt-4 sm:mt-8"
        >
          {/* Left column - Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image 
                src="/doradesign.png" 
                alt="Doradesign Logo" 
                width={120}
                height={40}
                className="h-auto w-28 sm:w-32 md:w-36"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image 
                src="/wavefun.png" 
                alt="Wave Logo" 
                width={120}
                height={40}
                className="h-auto w-28 sm:w-32 md:w-36"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image 
                src="/Frame.png" 
                alt="Silkila Logo" 
                width={120}
                height={40}
                className="h-auto w-28 sm:w-32 md:w-36"
              />
            </motion.div>
          </motion.div>
          
          {/* Right column - Text */}
          <div className="md:flex-1">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-poppins">
              Welcome to my portfolio. Here, artistry meets functionality.
              Dive into a curated showcase of distinctive branding and
              web designs, each crafted to captivate and inspire.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
