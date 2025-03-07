import React from 'react';

// Experience data array 
const experienceData = [
  {
    id: 'fortknox',
    position: 'Lead Product Designer',
    company: 'Fortknox',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    id: 'omnisafe',
    position: 'Intern Designer',
    company: 'OmniSafe',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    id: 'doradesign',
    position: 'UI Designer',
    company: 'Doradesign',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    id: 'opacity',
    position: 'Frontend Developer',
    company: 'OpacityAuthor',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Star Icon */}
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <div className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">Experience</h2>
        </div>
        
        {/* Experience List */}
        <div className="flex flex-col">
          {experienceData.map((experience, index) => (
            <div key={experience.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 md:py-8">
                <h3 className="font-syne text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
                  {experience.position}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-5">
                  <span className="font-syne text-xl md:text-2xl font-medium text-right">
                    {experience.company}
                  </span>
                  <span className="font-poppins text-gray-400 text-sm md:text-base text-right">
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
              </div>
              
              {/* Divider line (except after last item) */}
              {index < experienceData.length - 1 && (
                <div className="w-full h-px bg-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 