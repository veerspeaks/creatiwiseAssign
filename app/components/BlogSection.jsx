import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Blog posts data array
const blogPostsData = [
  {
    id: 'how-ux-works-in-web',
    title: 'How UX works in web',
    date: 'Nov 9, 2023',
    image: '/envelope-project.png',
    imageAlt: 'Orange envelope design',
    tags: ['UI', 'UX'],
    slug: '/blog/how-ux-works-in-web'
  },
  {
    id: 'case-study-analysis-application',
    title: 'Case study - Analysis Application.',
    date: 'Aug 18, 2023',
    image: '/fortknox-project.png',
    imageAlt: 'Laptop with application',
    tags: ['DESIGN', 'PRINT'],
    slug: '/blog/case-study-analysis-application'
  },
  {
    id: '3-ways-to-develop-skill',
    title: '3 ways to develop your skill',
    date: 'Feb 16, 2023',
    image: '/Zenocide-project.png',
    imageAlt: 'Orange and white cards',
    tags: ['FIGMA', 'WEB'],
    slug: '/blog/3-ways-to-develop-skill'
  }
];

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8 mb-12 md:mb-16">
      {/* Blog Post Image */}
      <div className="w-full md:w-[300px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0">
        <Image 
          src={post.image} 
          alt={post.imageAlt} 
          width={300} 
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blog Post Content */}
      <div className="flex-grow flex flex-col py-2 mt-8">
        <span className="text-gray-400 font-poppins text-sm mb-2">{post.date}</span>
        
        <h3 className="font-syne text-2xl md:text-3xl font-bold mb-4">{post.title}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-transparent border border-white text-white px-5 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Read Button - Right Aligned */}
      <div className="self-center mt-4 md:mt-0 md:self-center w-full md:w-auto flex justify-end">
        <Link 
          href={post.slug} 
          className="bg-white text-black px-8 py-3 rounded-full font-syne font-medium hover:bg-gray-200 transition-colors"
        >
          Read
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
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
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">Blog</h2>
          </div>
          <Link href="/blog" className="text-white underline font-poppins hover:text-gray-300 transition-colors">
            view all
          </Link>
        </div>
        
        {/* Blog Posts */}
        <div className="flex flex-col">
          {blogPostsData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 