'use client';

import React, { useState } from 'react';
import CourseCard from './CourseCard';

const FEATURED_COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
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

export default function ExploreCourses() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <section className="w-full py-[72px] bg-white flex flex-col">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full max-w-[760px] mx-auto text-center mb-10">
          <h2 className="font-poppins font-semibold text-[32px] md:text-[44px] text-[#0F172A] leading-tight mb-4">
            Discover Your Passion,<br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="font-satoshi text-[16px] md:text-[18px] text-[#82868E] leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Buttons Section */}
        <div className="w-full flex flex-col gap-3 mb-12">
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
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
