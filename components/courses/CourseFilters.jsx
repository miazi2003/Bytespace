'use client';

import React from 'react';
import {
  COURSE_FILTER_CATEGORIES,
  COURSE_LEVELS,
  COURSE_SORT_OPTIONS,
} from '../../data/categories';

export default function CourseFilters({
  activeCategory,
  setActiveCategory,
  activeLevel,
  setActiveLevel,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
  isLevelOpen,
  setIsLevelOpen,
  isCategoryOpen,
  setIsCategoryOpen,
  isSortOpen,
  setIsSortOpen,
}) {
  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveCategory('Featured');
    setActiveLevel('All Levels');
    setSortBy('Most relevant');
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 mb-6 relative">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleResetFilters}
            aria-label="Filter"
            className="inline-flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-[20px] sm:rounded-[24px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-satoshi font-medium text-[16px] transition-colors cursor-pointer"
          >
            <img
              src="/filterIcons/Vector (4).png"
              alt=""
              className="w-4 h-4 object-contain shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="hidden sm:inline">Filter</span>
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsLevelOpen(!isLevelOpen);
                setIsCategoryOpen(false);
                setIsSortOpen(false);
              }}
              aria-label={activeLevel === 'All Levels' ? 'Level' : activeLevel}
              className={`inline-flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-[20px] sm:rounded-[24px] border transition-colors cursor-pointer ${
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
              <span className="hidden sm:inline">{activeLevel === 'All Levels' ? 'Level' : activeLevel}</span>
              <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isLevelOpen && (
              <div className="absolute top-full mt-2 left-0 w-44 bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30">
                {COURSE_LEVELS.map((lvl) => (
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

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsLevelOpen(false);
                setIsSortOpen(false);
              }}
              aria-label={activeCategory === 'Featured' ? 'Category' : activeCategory}
              className={`inline-flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-[20px] sm:rounded-[24px] border transition-colors cursor-pointer ${
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
              <span className="hidden sm:inline">{activeCategory === 'Featured' ? 'Category' : activeCategory}</span>
              <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full mt-2 left-0 w-52 max-w-[calc(100vw-32px)] bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30 max-h-60 overflow-y-auto">
                {COURSE_FILTER_CATEGORIES.map((cat) => (
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

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsSortOpen(!isSortOpen);
              setIsLevelOpen(false);
              setIsCategoryOpen(false);
            }}
            aria-label={sortBy}
            className="inline-flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-[20px] sm:rounded-[24px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-satoshi font-medium text-[16px] transition-colors cursor-pointer"
          >
            <img
              src="/filterIcons/Vector (7).png"
              alt=""
              className="w-4 h-4 object-contain shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="hidden sm:inline">{sortBy}</span>
            <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {isSortOpen && (
            <div className="absolute top-full mt-2 right-0 w-48 max-w-[calc(100vw-32px)] bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg py-2 z-30">
              {COURSE_SORT_OPTIONS.map((opt) => (
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

      <div className="w-full flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 lg:gap-3 mb-8">
        {COURSE_FILTER_CATEGORIES.map((cat) => (
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
    </>
  );
}
