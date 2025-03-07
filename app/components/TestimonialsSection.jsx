'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    company: "eBay",
    avatar: "/profile.png", 
    quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
  },
  {
    id: 2,
    name: "Jane Cooper",
    company: "Google",
    avatar: "/jane-cooper.png", 
    quote: "The platform made it so easy to highlight my skills and experience. I received multiple interview offers within a week of updating my resume."
  },
  {
    id: 3,
    name: "Robert Fox",
    company: "Microsoft",
    avatar: "/robert-fox.png", 
    quote: "As someone transitioning careers, I was struggling to present my transferable skills. This tool helped me craft a compelling story that resonated with hiring managers."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  
  const handlePrev = () => {
    if (animating) return;
    
    setDirection('right');
    setAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    if (animating) return;
    
    setDirection('left');
    setAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  useEffect(() => {
    if (direction) {
      // Wait for exit animation
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex);
        setAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, direction]);
  
  const currentTestimonial = testimonials[displayIndex];
  
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with star icon */}
        <div className="flex items-center gap-2 mb-10">
          <div className="text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">What they say</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-12">
          {/* Testimonial author */}
          <div className="md:w-1/4">
            <div className={`flex items-center gap-3 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-syne text-lg font-bold">{currentTestimonial.name}</h3>
                <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial content */}
          <div className="md:w-3/4">
            <div className="relative overflow-hidden">
              {/* Smaller quotation mark */}
              <div className="absolute -top-6 -left-2 text-gray-700 opacity-20">
                <svg width="80" height="70" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.8 99.2C22.6 99.2 15 96.4 9 90.8C3 85.2 0 77.6 0 68C0 56.8 3.93333 46.8 11.8 38C19.6667 29.2 30.4 22.8 44 18.8L55.4 33.6C45.4 37.6 38 42.4 33.2 48C28.4 53.6 26 59.3333 26 65.2C26 66.8 26.2667 68.1333 26.8 69.2C27.3333 70.2667 28.1333 71.0667 29.2 71.6C32.4 69.2 36.2667 68 40.8 68C46.6667 68 51.4 69.8667 55 73.6C58.6 77.3333 60.4 82.2667 60.4 88.4C60.4 92.6667 58.6 96.2667 55 99.2C51.4 102.133 47 103.6 41.8 103.6C38.2 103.6 34.8667 102.133 31.8 99.2ZM91.8 99.2C82.6 99.2 75 96.4 69 90.8C63 85.2 60 77.6 60 68C60 56.8 63.9333 46.8 71.8 38C79.6667 29.2 90.4 22.8 104 18.8L115.4 33.6C105.4 37.6 98 42.4 93.2 48C88.4 53.6 86 59.3333 86 65.2C86 66.8 86.2667 68.1333 86.8 69.2C87.3333 70.2667 88.1333 71.0667 89.2 71.6C92.4 69.2 96.2667 68 100.8 68C106.667 68 111.4 69.8667 115 73.6C118.6 77.3333 120.4 82.2667 120.4 88.4C120.4 92.6667 118.6 96.2667 115 99.2C111.4 102.133 107 103.6 101.8 103.6C98.2 103.6 94.8667 102.133 91.8 99.2Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div 
                className={`transform transition-all duration-300 ease-in-out ${
                  animating 
                    ? direction === 'left' 
                      ? 'translate-x-[-20px] opacity-0' 
                      : 'translate-x-[20px] opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
              >
                <p className="text-xl md:text-2xl lg:text-3xl relative z-10 font-poppins leading-relaxed">
                  {currentTestimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm focus:outline-none relative overflow-hidden group"
            aria-label="Previous testimonial"
            disabled={animating}
          >
            <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-100 rounded-full"></div>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm focus:outline-none relative overflow-hidden group"
            aria-label="Next testimonial"
            disabled={animating}
          >
            <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-100 rounded-full"></div>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
        
        @keyframes fadeOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection; 