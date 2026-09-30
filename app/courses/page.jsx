'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';

const ALL_COURSES = [
  // Page 1 Items
  {
    id: 1,
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
    level: 'Beginner',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    category: 'Marketing',
    level: 'Beginner',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    category: 'Data Science',
    level: 'Intermediate',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    category: 'Productivity',
    level: 'Beginner',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    category: 'Creative Marketing',
    level: 'Beginner',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    category: 'Marketing',
    level: 'Beginner',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$25',
    period: '/lifetime',
    studentCount: '26+',
  },

  // Page 2 Items
  {
    id: 7,
    title: 'Sound Design & Beat Making',
    category: 'Music',
    level: 'Intermediate',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '22 Lessons',
    duration: '3 hours 10 mins',
    comments: '42 Comments',
    instructor: 'purepearl studio',
    rating: '4.8',
    price: '$35',
    period: '/lifetime',
    studentCount: '48+',
  },
  {
    id: 8,
    title: 'Digital Painting Masterclass',
    category: 'Drawing & Painting',
    level: 'Beginner',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '14 Lessons',
    duration: '1 hour 45 mins',
    comments: '31 Comments',
    instructor: 'purepearl studio',
    rating: '4.6',
    price: '$29',
    period: '/lifetime',
    studentCount: '34+',
  },
  {
    id: 9,
    title: '2D Character Animation',
    category: 'Animation',
    level: 'Intermediate',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '19 Lessons',
    duration: '2 hours 50 mins',
    comments: '67 Comments',
    instructor: 'purepearl studio',
    rating: '4.9',
    price: '$40',
    period: '/lifetime',
    studentCount: '52+',
  },
  {
    id: 10,
    title: 'Social Media Growth Tactics',
    category: 'Social Media',
    level: 'Beginner',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '12 Lessons',
    duration: '1 hour 30 mins',
    comments: '24 Comments',
    instructor: 'purepearl studio',
    rating: '4.4',
    price: '$20',
    period: '/lifetime',
    studentCount: '19+',
  },
  {
    id: 11,
    title: 'Culinary Art & Modern Cooking',
    category: 'Cooking',
    level: 'Beginner',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '15 Lessons',
    duration: '2 hours 05 mins',
    comments: '40 Comments',
    instructor: 'purepearl studio',
    rating: '4.7',
    price: '$30',
    period: '/lifetime',
    studentCount: '38+',
  },
  {
    id: 12,
    title: 'Growth Marketing Strategies',
    category: 'Creative Marketing',
    level: 'Advanced',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '20 Lessons',
    duration: '3 hours 20 mins',
    comments: '88 Comments',
    instructor: 'purepearl studio',
    rating: '4.9',
    price: '$45',
    period: '/lifetime',
    studentCount: '65+',
  },

  // Page 3 Items
  {
    id: 13,
    title: 'Complete UI Design System',
    category: 'UI/UX Design',
    level: 'Advanced',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '25 Lessons',
    duration: '4 hours 15 mins',
    comments: '95 Comments',
    instructor: 'purepearl studio',
    rating: '4.9',
    price: '$49',
    period: '/lifetime',
    studentCount: '90+',
  },
  {
    id: 14,
    title: 'Electronic Music Production',
    category: 'Music',
    level: 'Intermediate',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '18 Lessons',
    duration: '2 hours 40 mins',
    comments: '49 Comments',
    instructor: 'purepearl studio',
    rating: '4.7',
    price: '$32',
    period: '/lifetime',
    studentCount: '41+',
  },
  {
    id: 15,
    title: 'Modern Watercolor Painting',
    category: 'Drawing & Painting',
    level: 'Beginner',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '11 Lessons',
    duration: '1 hour 25 mins',
    comments: '18 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$22',
    period: '/lifetime',
    studentCount: '22+',
  },
  {
    id: 16,
    title: 'Motion Graphics with After Effects',
    category: 'Animation',
    level: 'Advanced',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '28 Lessons',
    duration: '4 hours 50 mins',
    comments: '112 Comments',
    instructor: 'purepearl studio',
    rating: '5.0',
    price: '$55',
    period: '/lifetime',
    studentCount: '120+',
  },
  {
    id: 17,
    title: 'Instagram Brand Storytelling',
    category: 'Social Media',
    level: 'Beginner',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '16 Lessons',
    duration: '2 hours 10 mins',
    comments: '36 Comments',
    instructor: 'purepearl studio',
    rating: '4.6',
    price: '$27',
    period: '/lifetime',
    studentCount: '29+',
  },
  {
    id: 18,
    title: 'Baking Artisan Bread at Home',
    category: 'Cooking',
    level: 'Intermediate',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '13 Lessons',
    duration: '1 hour 55 mins',
    comments: '28 Comments',
    instructor: 'purepearl studio',
    rating: '4.8',
    price: '$28',
    period: '/lifetime',
    studentCount: '35+',
  },

  // Page 4 Items
  {
    id: 19,
    title: 'Mobile App Prototyping',
    category: 'UI/UX Design',
    level: 'Intermediate',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '16 Lessons',
    duration: '2 hours 30 mins',
    comments: '53 Comments',
    instructor: 'purepearl studio',
    rating: '4.7',
    price: '$34',
    period: '/lifetime',
    studentCount: '47+',
  },
  {
    id: 20,
    title: 'Affiliate Marketing Engine',
    category: 'Marketing',
    level: 'Intermediate',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '15 Lessons',
    duration: '2 hours 15 mins',
    comments: '39 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$29',
    period: '/lifetime',
    studentCount: '31+',
  },
  {
    id: 21,
    title: 'Piano Improvisation Basics',
    category: 'Music',
    level: 'Beginner',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '19 Lessons',
    duration: '2 hours 45 mins',
    comments: '61 Comments',
    instructor: 'purepearl studio',
    rating: '4.8',
    price: '$38',
    period: '/lifetime',
    studentCount: '55+',
  },
  {
    id: 22,
    title: '3D Blender Modeling Foundations',
    category: 'Animation',
    level: 'Intermediate',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '24 Lessons',
    duration: '3 hours 50 mins',
    comments: '84 Comments',
    instructor: 'purepearl studio',
    rating: '4.9',
    price: '$44',
    period: '/lifetime',
    studentCount: '78+',
  },
  {
    id: 23,
    title: 'Gourmet Pastry & Desserts',
    category: 'Cooking',
    level: 'Intermediate',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '17 Lessons',
    duration: '2 hours 35 mins',
    comments: '46 Comments',
    instructor: 'purepearl studio',
    rating: '4.7',
    price: '$33',
    period: '/lifetime',
    studentCount: '42+',
  },
  {
    id: 24,
    title: 'TikTok Viral Video Formula',
    category: 'Social Media',
    level: 'Beginner',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '10 Lessons',
    duration: '1 hour 15 mins',
    comments: '50 Comments',
    instructor: 'purepearl studio',
    rating: '4.6',
    price: '$21',
    period: '/lifetime',
    studentCount: '63+',
  },

  // Page 5 Items
  {
    id: 25,
    title: 'Design Thinking & UX Research',
    category: 'UI/UX Design',
    level: 'Advanced',
    image: '/courseCardImage/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg',
    lessons: '21 Lessons',
    duration: '3 hours 40 mins',
    comments: '77 Comments',
    instructor: 'purepearl studio',
    rating: '4.9',
    price: '$48',
    period: '/lifetime',
    studentCount: '85+',
  },
  {
    id: 26,
    title: 'Content Marketing Blueprint',
    category: 'Creative Marketing',
    level: 'Intermediate',
    image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
    lessons: '14 Lessons',
    duration: '2 hours 00 mins',
    comments: '33 Comments',
    instructor: 'purepearl studio',
    rating: '4.5',
    price: '$26',
    period: '/lifetime',
    studentCount: '28+',
  },
  {
    id: 27,
    title: 'Acrylic Landscape Painting',
    category: 'Drawing & Painting',
    level: 'Beginner',
    image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
    lessons: '12 Lessons',
    duration: '1 hour 40 mins',
    comments: '29 Comments',
    instructor: 'purepearl studio',
    rating: '4.6',
    price: '$24',
    period: '/lifetime',
    studentCount: '30+',
  },
  {
    id: 28,
    title: 'Vocal Training & Pitch Control',
    category: 'Music',
    level: 'Beginner',
    image: '/courseCardImage/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg',
    lessons: '18 Lessons',
    duration: '2 hours 20 mins',
    comments: '58 Comments',
    instructor: 'purepearl studio',
    rating: '4.8',
    price: '$36',
    period: '/lifetime',
    studentCount: '50+',
  },
  {
    id: 29,
    title: 'Italian Pasta From Scratch',
    category: 'Cooking',
    level: 'Beginner',
    image: '/courseCardImage/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg',
    lessons: '11 Lessons',
    duration: '1 hour 30 mins',
    comments: '41 Comments',
    instructor: 'purepearl studio',
    rating: '4.7',
    price: '$27',
    period: '/lifetime',
    studentCount: '39+',
  },
  {
    id: 30,
    title: 'Full Stack Brand Creation',
    category: 'Marketing',
    level: 'Advanced',
    image: '/courseCardImage/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg',
    lessons: '26 Lessons',
    duration: '4 hours 30 mins',
    comments: '105 Comments',
    instructor: 'purepearl studio',
    rating: '5.0',
    price: '$59',
    period: '/lifetime',
    studentCount: '110+',
  },
];

const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];

const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const SORT_OPTIONS = ['Most relevant', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Dropdown Visibility States
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    let list = [...ALL_COURSES];

    // Search filter
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeCategory !== 'Featured') {
      list = list.filter((c) => c.category === activeCategory);
    }

    // Level filter
    if (activeLevel !== 'All Levels') {
      list = list.filter((c) => c.level === activeLevel);
    }

    // Sorting
    if (sortBy === 'Price: Low to High') {
      list.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
    } else if (sortBy === 'Price: High to Low') {
      list.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
    } else if (sortBy === 'Highest Rated') {
      list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return list;
  }, [searchTerm, activeCategory, activeLevel, sortBy]);

  // Pagination Calculation: Ensure 18 cards per page across 5 pages (90 total)
  const paddedCourses = useMemo(() => {
    if (filteredCourses.length === 0) return [];
    let list = [];
    while (list.length < 90) {
      list = [...list, ...filteredCourses.map((c, idx) => ({ ...c, id: `${c.id}-${list.length + idx}` }))];
    }
    return list.slice(0, 90);
  }, [filteredCourses]);

  const ITEMS_PER_PAGE = 18;
  const totalPages = Math.max(1, Math.ceil(paddedCourses.length / ITEMS_PER_PAGE));
  const currentCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return paddedCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [paddedCourses, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white">
      {/* Top Hero / Header Section: Height 360px on Desktop, Background #003BE2 with Grid Pattern */}
      <div className="relative w-full bg-[#003BE2] bg-grid-pattern flex flex-col overflow-hidden">
        <Navbar />

        {/* Hero Section Container: Total section height ~360px */}
        <section className="w-full h-auto min-h-[220px] lg:h-[240px] flex flex-col items-center justify-center text-center px-4 pt-2 pb-10 relative z-20">
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[44px] lg:text-[48px] text-white leading-tight mb-7">
              Find Your Next Course
            </h1>

            {/* Search Bar matching Hero */}
            <form
              className="flex items-center justify-center gap-3 sm:gap-3.5 mx-auto relative z-20 w-full max-w-[580px]"
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentPage(1);
              }}
              role="search"
            >
              <div className="w-full max-w-[461px] h-[52px] bg-white rounded-full px-5 sm:px-6 flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <svg
                  className="text-[#94A3B8] flex-shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-transparent border-none outline-none font-satoshi text-[15px] text-[#1E293B] placeholder-[#8E95A2] font-normal"
                  placeholder="Search"
                  aria-label="Search courses"
                />
              </div>
              <button
                type="submit"
                className="font-satoshi h-[52px] px-6 bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-medium text-[16px] rounded-full flex items-center justify-center gap-1.5 cursor-pointer transition-all whitespace-nowrap shadow-sm flex-shrink-0"
              >
                <span>Courses</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <main className="w-full flex-1 py-10 lg:py-14 bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* Top Filter Buttons Row: Radius 24px, Padding 12px 16px, Font 16px, Icon 16px */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 relative">
            {/* Left Filter Group */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('Featured');
                  setActiveLevel('All Levels');
                  setSearchTerm('');
                  setSortBy('Most relevant');
                  setCurrentPage(1);
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-[24px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-satoshi font-medium text-[16px] transition-colors cursor-pointer"
              >
                <img
                  src="/filterIcons/Vector (4).png"
                  alt=""
                  className="w-4 h-4 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span>Filter</span>
              </button>

              {/* Level Filter Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsLevelOpen(!isLevelOpen);
                    setIsCategoryOpen(false);
                    setIsSortOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-[24px] border transition-colors cursor-pointer ${
                    activeLevel !== 'All Levels'
                      ? 'border-[#003BE2] bg-[#EFF6FF] text-[#003BE2]'
                      : 'border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A]'
                  } font-satoshi font-medium text-[16px]`}
                >
                  <img
                    src="/filterIcons/Vector (5).png"
                    alt=""
                    className="w-4 h-4 object-contain shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>{activeLevel === 'All Levels' ? 'Level' : activeLevel}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isLevelOpen && (
                  <div className="absolute top-full mt-2 left-0 w-44 bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30">
                    {LEVELS.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setActiveLevel(lvl);
                          setIsLevelOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2 text-[14px] font-satoshi transition-colors ${
                          activeLevel === lvl ? 'bg-[#F1F5F9] text-[#003BE2] font-semibold' : 'text-[#475569] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter Dropdown Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsLevelOpen(false);
                    setIsSortOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-[24px] border transition-colors cursor-pointer ${
                    activeCategory !== 'Featured'
                      ? 'border-[#003BE2] bg-[#EFF6FF] text-[#003BE2]'
                      : 'border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A]'
                  } font-satoshi font-medium text-[16px]`}
                >
                  <img
                    src="/filterIcons/Vector (6).png"
                    alt=""
                    className="w-4 h-4 object-contain shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>{activeCategory === 'Featured' ? 'Category' : activeCategory}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isCategoryOpen && (
                  <div className="absolute top-full mt-2 left-0 w-52 bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30 max-h-60 overflow-y-auto">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsCategoryOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2 text-[14px] font-satoshi transition-colors ${
                          activeCategory === cat ? 'bg-[#F1F5F9] text-[#003BE2] font-semibold' : 'text-[#475569] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Group: Most relevant */}
            <div className="relative self-end sm:self-auto">
              <button
                type="button"
                onClick={() => {
                  setIsSortOpen(!isSortOpen);
                  setIsLevelOpen(false);
                  setIsCategoryOpen(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-[24px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-satoshi font-medium text-[16px] transition-colors cursor-pointer"
              >
                <img
                  src="/filterIcons/Vector (7).png"
                  alt=""
                  className="w-4 h-4 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span>{sortBy}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isSortOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSortBy(opt);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[14px] font-satoshi transition-colors ${
                        sortBy === opt ? 'bg-[#F1F5F9] text-[#003BE2] font-semibold' : 'text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Pills: Neatly aligned with consistent gap on all screen sizes */}
          <div className="w-full flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 lg:gap-3 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                className={`font-satoshi text-[14px] lg:text-[15px] font-medium px-4 py-2 lg:py-2.5 rounded-full whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#475569] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Filter Indicators / Results count */}
          <div className="flex items-center justify-between text-[#82868E] font-satoshi text-[14px] mb-6">
            <span>
              Showing <strong className="text-[#0F172A]">{currentCourses.length}</strong> of{' '}
              <strong className="text-[#0F172A]">{paddedCourses.length}</strong> courses
            </span>
            {(searchTerm || activeCategory !== 'Featured' || activeLevel !== 'All Levels') && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Featured');
                  setActiveLevel('All Levels');
                  setCurrentPage(1);
                }}
                className="text-[#003BE2] hover:underline cursor-pointer font-medium"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Course Cards Grid: 6 Cards per page */}
          {currentCourses.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mb-14">
              {currentCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center">
              <p className="font-poppins font-semibold text-[22px] text-[#0F172A] mb-2">
                No courses found
              </p>
              <p className="font-satoshi text-[16px] text-[#82868E] mb-6">
                Try searching with different keywords or clearing filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Featured');
                  setActiveLevel('All Levels');
                  setCurrentPage(1);
                }}
                className="px-6 py-2.5 bg-[#D4FB20] text-[#0F172A] font-medium rounded-full cursor-pointer hover:brightness-95 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination Controls: Matching Reference Screenshot Exactly */}
          <div className="w-full flex items-center justify-center gap-6 sm:gap-7 my-8">
            {/* Previous Page Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className={`w-[46px] h-[46px] rounded-[24px] border border-[#E2E8F0] flex items-center justify-center transition-all ${
                currentPage === 1
                  ? 'opacity-40 cursor-not-allowed text-[#94A3B8]'
                  : 'hover:bg-[#F8FAFC] active:scale-95 text-[#0F172A] cursor-pointer'
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-5 sm:gap-6">
              {[1, 2, 3, 4, 5].map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`font-satoshi text-[16px] transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#CBD5E1] font-bold'
                        : 'text-[#0F172A] font-bold hover:text-[#003BE2]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Page Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className={`w-[46px] h-[46px] rounded-[24px] border border-[#E2E8F0] flex items-center justify-center transition-all ${
                currentPage === totalPages
                  ? 'opacity-40 cursor-not-allowed text-[#94A3B8]'
                  : 'hover:bg-[#F8FAFC] active:scale-95 text-[#0F172A] cursor-pointer'
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
