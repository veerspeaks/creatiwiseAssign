'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-black text-white py-4 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-auto h-8 sm:h-10"
            />
          </Link>
        </motion.div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="bg-white text-black px-5 py-2 rounded-full font-medium font-syne">
              Home
            </Link>
          </motion.div>
          
          {/* More nav links with animations... */}
          <motion.div whileHover={{ y: -2 }}>
            <Link href="/about" className="font-medium hover:text-gray-300 transition font-syne">
              About
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="/projects" className="font-medium hover:text-gray-300 transition font-syne">
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="/contact" className="font-medium hover:text-gray-300 transition font-syne">
              Contact
            </Link>
          </motion.div>
        </div>
        
        {/* Hire Me Button - Hide on smallest screens */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact" 
            className="hidden sm:block border border-white rounded-full px-4 sm:px-6 md:px-8 py-2 font-medium hover:bg-white hover:text-black transition font-syne text-sm sm:text-base"
          >
            HIRE ME
          </Link>
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 mt-4 py-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6">
              <Link 
                href="/" 
                className="bg-white text-black px-4 py-2 rounded-full font-medium w-full text-center font-syne"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="font-medium hover:text-gray-300 transition font-syne w-full text-center py-2"
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="font-medium hover:text-gray-300 transition font-syne w-full text-center py-2"
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="font-medium hover:text-gray-300 transition font-syne w-full text-center py-2"
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="sm:hidden border border-white rounded-full px-4 py-2 font-medium hover:bg-white hover:text-black transition font-syne w-full text-center mt-2"
              >
                HIRE ME
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 