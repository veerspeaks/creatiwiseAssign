'use client';

import React from 'react';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-8">
      {/* Scrolling text/marquee with hollowed out text */}
      <div className="overflow-hidden relative mb-16">
        <div className="whitespace-nowrap flex items-center animate-marquee">
          <span className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-wide mx-4 text-outline">FLOW</span>
          <span className="mx-4">
            {/* Multi-pointed star */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.428 8.59195L19.5 2.46231L15.5403 10.1273L24 9.39339L16.266 13.228L23.1817 18.2865L15.1138 15.7172L17.5598 23.826L12 17.2308L6.44019 23.826L8.88621 15.7172L0.818327 18.2865L7.73397 13.228L0 9.39339L8.45971 10.1273L4.5 2.46231L10.572 8.59195L12 0Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-wide mx-4 text-outline">FIGMA</span>
          <span className="mx-4">
            {/* Multi-pointed star */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.428 8.59195L19.5 2.46231L15.5403 10.1273L24 9.39339L16.266 13.228L23.1817 18.2865L15.1138 15.7172L17.5598 23.826L12 17.2308L6.44019 23.826L8.88621 15.7172L0.818327 18.2865L7.73397 13.228L0 9.39339L8.45971 10.1273L4.5 2.46231L10.572 8.59195L12 0Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-wide mx-4 text-outline">DESIGNER</span>
          <span className="mx-4">
            {/* Multi-pointed star */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.428 8.59195L19.5 2.46231L15.5403 10.1273L24 9.39339L16.266 13.228L23.1817 18.2865L15.1138 15.7172L17.5598 23.826L12 17.2308L6.44019 23.826L8.88621 15.7172L0.818327 18.2865L7.73397 13.228L0 9.39339L8.45971 10.1273L4.5 2.46231L10.572 8.59195L12 0Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-wide mx-4 text-outline">DEVELOPER</span>
          {/* Duplicate for seamless scrolling */}
          <span className="mx-4">
            {/* Multi-pointed star */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.428 8.59195L19.5 2.46231L15.5403 10.1273L24 9.39339L16.266 13.228L23.1817 18.2865L15.1138 15.7172L17.5598 23.826L12 17.2308L6.44019 23.826L8.88621 15.7172L0.818327 18.2865L7.73397 13.228L0 9.39339L8.45971 10.1273L4.5 2.46231L10.572 8.59195L12 0Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-wide mx-4 text-outline">FLOW</span>
          <span className="mx-4">
            {/* Multi-pointed star */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.428 8.59195L19.5 2.46231L15.5403 10.1273L24 9.39339L16.266 13.228L23.1817 18.2865L15.1138 15.7172L17.5598 23.826L12 17.2308L6.44019 23.826L8.88621 15.7172L0.818327 18.2865L7.73397 13.228L0 9.39339L8.45971 10.1273L4.5 2.46231L10.572 8.59195L12 0Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Let's Talk! */}
        <h2 className="text-5xl md:text-6xl lg:text-6xl font-syne font-extrabold text-center mb-10" 
            style={{ 
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: '80px'
            }}>
          LET'S TALK!
        </h2>

        {/* Email */}
        <div className="flex justify-center mb-24">
          <Link 
            href="mailto:rehanurraihan@gmail.com" 
            className="text-xl md:text-2xl font-syne flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            rehanurraihan@gmail.com
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-gray-400 font-syne">
            © Rehan Raihan - 2023
          </div>

          {/* Social Links */}
          <div className="flex gap-6 font-syne">
            <Link href="https://dribbble.com/" className="text-gray-400 hover:text-white transition-colors">
              Dribbble
            </Link>
            <Link href="https://behance.net/" className="text-gray-400 hover:text-white transition-colors">
              Behance
            </Link>
            <Link href="https://twitter.com/" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="https://instagram.com/" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px white;
          text-stroke: 1px white;
        }
        
        @media (min-width: 768px) {
          .text-outline {
            -webkit-text-stroke: 1.5px white;
            text-stroke: 1.5px white;
          }
        }
        
        @media (min-width: 1024px) {
          .text-outline {
            -webkit-text-stroke: 2px white;
            text-stroke: 2px white;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection; 