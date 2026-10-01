'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const smoothEase = [0.22, 1, 0.36, 1];

const FEATURED_COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
];

const ROW_1_CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
];

const ROW_2_CATEGORIES = [
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
];

const ROW_3_CATEGORIES = [
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

const ALL_CATEGORIES = [
  ...ROW_1_CATEGORIES,
  ...ROW_2_CATEGORIES,
  ...ROW_3_CATEGORIES,
];

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: (i % 3) * 0.1,
      ease: smoothEase,
    },
  }),
};

export default function ExploreCourses() {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="w-full py-[72px] bg-white flex flex-col">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="w-full max-w-[760px] mx-auto text-center mb-10"
        >
          <h2 className="font-poppins font-semibold text-[32px] md:text-[44px] text-[#0F172A] leading-tight mb-4">
            Discover Your Passion,<br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="font-satoshi text-[16px] md:text-[18px] text-[#82868E] leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </motion.div>

        {/* Filter Buttons Section: Desktop (100% untouched) */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
          className="hidden md:flex w-full flex-col gap-3 mb-12"
        >
          <div className="w-full flex flex-wrap items-center justify-center gap-[16px]">
            {ROW_1_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-satoshi text-[16px] font-medium px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#475569] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full flex flex-wrap items-center justify-center gap-[16px]">
            {ROW_2_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-satoshi text-[16px] font-medium px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#475569] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full flex flex-wrap items-center justify-center gap-[16px]">
            {ROW_3_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-satoshi text-[16px] font-medium px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#475569] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              type="button"
              className="font-satoshi text-[16px] font-medium text-[#003BE2] hover:underline px-3 py-2 cursor-pointer flex items-center gap-1"
            >
              + More
            </button>
          </div>
        </motion.div>

        {/* Filter Buttons Section: Mobile (Inline 2 balanced lines, expandable with smooth fade) */}
        <div className="flex md:hidden w-full flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 transition-all duration-300">
          {(showAllMobile ? ALL_CATEGORIES : ALL_CATEGORIES.slice(0, 6)).map((cat, idx) => {
            const isExtra = idx >= 6;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-satoshi text-[14px] sm:text-[15px] font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  isExtra ? 'animate-reveal-fade' : ''
                } ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#475569] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="font-satoshi text-[14px] sm:text-[15px] font-medium text-[#003BE2] hover:underline px-3 py-2 cursor-pointer flex items-center gap-1 transition-all"
          >
            {showAllMobile ? '- Less' : '+ More'}
          </button>
        </div>

        {/* Cards Grid with Subtle Fade & Very Little Motion */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {FEATURED_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
              className="w-full max-w-[373px]"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
