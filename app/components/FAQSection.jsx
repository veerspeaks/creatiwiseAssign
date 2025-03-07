'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
  },
  {
    id: 2,
    question: "What tools and software do you use for UX design?",
    answer: "I primarily use Figma for creating wireframes, prototypes, and high-fidelity designs. I also utilize Adobe Creative Suite for graphic design, Miro for user journey mapping, and UserTesting for gathering user feedback. For design systems, I leverage Storybook and maintain components in Figma libraries to ensure consistency across projects."
  },
  {
    id: 3,
    question: "How do you measure the success of your UX designs?",
    answer: "I measure success through a combination of quantitative and qualitative metrics. Quantitatively, I track key performance indicators like conversion rates, time-on-task, and error rates. Qualitatively, I conduct user interviews, analyze feedback, and perform usability testing to assess satisfaction and identify pain points. The ultimate measure is whether the design solves the user's problem effectively while meeting business objectives."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with star icon */}
        <div className="flex items-center gap-2 mb-12">
          <div className="text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
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
            Frequently Asked Questions
          </motion.h2>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-8 md:space-y-12">
          {faqData.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-gray-800 pb-8"
            >
              <div 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left focus:outline-none"
              >
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-syne font-medium mb-4 hover:text-gray-300 transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Your dropdown icon */}
                </motion.div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 