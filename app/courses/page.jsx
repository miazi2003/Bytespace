'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import CourseFilters from '../../components/courses/CourseFilters';
import CoursePagination from '../../components/courses/CoursePagination';
import { ALL_COURSES } from '../../data/courses';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCourses = useMemo(() => {
    let list = [...ALL_COURSES];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== 'Featured') {
      list = list.filter((c) => c.category === activeCategory);
    }

    if (activeLevel !== 'All Levels') {
      list = list.filter((c) => c.level === activeLevel);
    }

    if (sortBy === 'Price: Low to High') {
      list.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
    } else if (sortBy === 'Price: High to Low') {
      list.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
    } else if (sortBy === 'Highest Rated') {
      list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return list;
  }, [searchTerm, activeCategory, activeLevel, sortBy]);

  const paddedCourses = useMemo(() => {
    if (filteredCourses.length === 0) return [];
    let list = [];
    while (list.length < 90) {
      list = [...list, ...filteredCourses.map((c, idx) => ({ ...c, id: `${c.id}-${list.length + idx}` }))];
    }
    return list.slice(0, 90);
  }, [filteredCourses]);

  const ITEMS_PER_PAGE = isMobile ? 6 : 18;
  const totalPages = Math.max(1, Math.ceil(paddedCourses.length / ITEMS_PER_PAGE));
  const currentCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return paddedCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [paddedCourses, currentPage, ITEMS_PER_PAGE]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white">
      <div className="relative w-full bg-[#003BE2] bg-grid-pattern flex flex-col overflow-hidden">
        <Navbar />

        <section className="w-full h-auto min-h-[220px] lg:h-[240px] flex flex-col items-center justify-center text-center px-4 pt-2 pb-10 relative z-20">
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[44px] lg:text-[48px] text-white leading-tight mb-7">
              Find Your Next Course
            </h1>

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

      <main className="w-full flex-1 py-10 lg:py-14 bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <CourseFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeLevel={activeLevel}
            setActiveLevel={setActiveLevel}
            sortBy={sortBy}
            setSortBy={setSortBy}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCurrentPage={setCurrentPage}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            isLevelOpen={isLevelOpen}
            setIsLevelOpen={setIsLevelOpen}
            isCategoryOpen={isCategoryOpen}
            setIsCategoryOpen={setIsCategoryOpen}
            isSortOpen={isSortOpen}
            setIsSortOpen={setIsSortOpen}
          />

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

          <CoursePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
