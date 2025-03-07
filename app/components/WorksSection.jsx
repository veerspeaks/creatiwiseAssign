'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Project data array - can be expanded with more projects as needed
const projectsData = [
  {
    id: 'analysis-application',
    title: 'Analysis Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: '/envelope-project.png',
    imageAlt: 'Orange envelope design',
    tags: ['FIGMA', 'UX'],
    hasBorders: false
  },
  {
    id: 'fortknox-application',
    title: 'Fortknox Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: '/fortknox-project.png',
    imageAlt: 'Laptop with Fortknox application',
    tags: ['MOBILE', 'WEB'],
    hasBorders: false
  },
  {
    id: 'Zenocide-application',
    title: 'Zenocide Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: '/Zenocide-project.png',
    imageAlt: 'Laptop with Zenocide application',
    tags: ['APP', 'WEB'],
    hasBorders: false
  }
];

// Add this at the top of your file, outside the component
const styles = `
  .glass-effect {
    background: rgba(20, 20, 20, 0.4);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
  
  .cards-container {
    position: relative;
    /* Reserve enough height for scrolling through all cards */
    /* Each card has a scroll range of approximately 100vh */
    min-height: calc(100vh * 3);
  }
  
  .card {
    height: 450px; /* Fixed height for all cards */
    position: sticky;
    /* This determines how much of the previous card remains visible */
    top: 80px; /* Adjust this value to show more/less of the previous card */
    margin-top: 10vh; /* Space between card trigger points */
    border-radius: 1.5rem;
    overflow: hidden;
  }
  
  /* First card doesn't need a margin-top */
  .card:first-child {
    margin-top: 0;
  }
`;

const ProjectCard = ({ project, index }) => {
  return (
    <div className="card">
      <div className="relative rounded-3xl overflow-hidden h-full">
        {/* Common background image with strong glassmorphism effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt="" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex flex-col md:flex-row relative z-10 h-full">
          {/* Project Image */}
          <div className="w-full md:w-1/2 relative">
            <Image 
              src={project.image} 
              alt={project.imageAlt} 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Project Details with enhanced glass effect */}
          <div className="w-full md:w-1/2 p-6 md:p-8 relative">
            <div className="absolute inset-0 glass-effect"></div>
            
            <div className="relative z-10">
              <h3 className="font-syne text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
              
              <p className="font-poppins text-gray-300 mb-6">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-white px-4 py-1 rounded-full text-sm border border-white/100">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/projects/${project.id}`} 
                className="inline-block bg-white text-black px-6 py-3 mt-36 rounded-full font-syne font-medium hover:bg-gray-200 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorksSection = () => {
  return (
    <>
      {/* Add the styles */}
      <style jsx global>{styles}</style>
      
      <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Title and View All link */}
          <div className="flex justify-between items-center mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">Works</h2>
            </div>
            <Link href="/projects" className="text-white underline font-poppins hover:text-gray-300 transition-colors">
              view all
            </Link>
          </div>
          
          {/* Cards with stacking effect */}
          <div className="cards-container">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;