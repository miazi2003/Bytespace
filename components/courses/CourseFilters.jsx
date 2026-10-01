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
  isFilterOpen,
  setIsFilterOpen,
  isLevelOpen,
  setIsLevelOpen,
  isCategoryOpen,
  setIsCategoryOpen,
  isSortOpen,
  setIsSortOpen,
}) {
  const activeFilterCount =
    (activeCategory !== 'Featured' ? 1 : 0) +
    (activeLevel !== 'All Levels' ? 1 : 0) +
    (searchTerm.trim() ? 1 : 0) +
    (sortBy !== 'Most relevant' ? 1 : 0);

  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveCategory('Featured');
    setActiveLevel('All Levels');
    setSortBy('Most relevant');
    setCurrentPage(1);
    if (setIsFilterOpen) setIsFilterOpen(false);
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 mb-6 relative">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                if (setIsFilterOpen) setIsFilterOpen(!isFilterOpen);
                setIsLevelOpen(false);
                setIsCategoryOpen(false);
                setIsSortOpen(false);
              }}
              aria-label="Filter"
              className={`inline-flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-[20px] sm:rounded-[24px] border transition-colors cursor-pointer ${
                activeFilterCount > 0 || isFilterOpen
                  ? 'border-[#003BE2] bg-[#EFF6FF] text-[#003BE2]'
                  : 'border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A]'
              } font-satoshi font-medium text-[16px]`}
            >
              <img
                src="/filterIcons/Vector (4).png"
                alt=""
                className="w-4 h-4 object-contain shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="hidden sm:inline">
                Filter{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
              </span>
              {activeFilterCount > 0 && (
                <span className="sm:hidden w-2 h-2 rounded-full bg-[#003BE2]" />
              )}
              <svg className="hidden sm:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isFilterOpen && (
              <div className="absolute top-full mt-2 left-0 w-64 max-w-[calc(100vw-32px)] bg-white border border-[#E2E8F0] rounded-[20px] shadow-xl p-4 z-40">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-semibold text-[15px] text-[#0F172A]">
                      Active Filters
                    </span>
                    {activeFilterCount > 0 && (
                      <span className="w-5 h-5 rounded-full bg-[#003BE2] text-white text-[11px] font-bold flex items-center justify-center">
                        {activeFilterCount}
                      </span>
                    )}
                  </div>
                  {activeFilterCount > 0 && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="text-[12px] font-satoshi font-medium text-[#003BE2] hover:underline cursor-pointer"
                    >
                      Reset all
                    </button>
                  )}
                </div>

                <div className="py-3 flex flex-col gap-2.5 text-[13px] font-satoshi">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Category:</span>
                    <span className={`font-medium ${activeCategory !== 'Featured' ? 'text-[#003BE2]' : 'text-[#0F172A]'}`}>
                      {activeCategory}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Level:</span>
                    <span className={`font-medium ${activeLevel !== 'All Levels' ? 'text-[#003BE2]' : 'text-[#0F172A]'}`}>
                      {activeLevel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Sort:</span>
                    <span className={`font-medium ${sortBy !== 'Most relevant' ? 'text-[#003BE2]' : 'text-[#0F172A]'}`}>
                      {sortBy}
                    </span>
                  </div>

                  {searchTerm.trim() && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B]">Search:</span>
                      <span className="font-medium text-[#003BE2] truncate max-w-[120px]">
                        &quot;{searchTerm}&quot;
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[#E2E8F0] flex gap-2">
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    disabled={activeFilterCount === 0}
                    className={`flex-1 py-2 text-center text-[13px] font-medium rounded-full transition-colors ${
                      activeFilterCount > 0
                        ? 'bg-[#D4FB20] text-[#0F172A] hover:bg-[#C4EC00] cursor-pointer'
                        : 'bg-slate-100 text-[#94A3B8] cursor-not-allowed'
                    }`}
                  >
                    Clear All
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFilterOpen(false)}
                    className="px-4 py-2 text-center text-[13px] font-medium rounded-full border border-[#E2E8F0] text-[#475569] hover:bg-slate-50 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsLevelOpen(!isLevelOpen);
                if (setIsFilterOpen) setIsFilterOpen(false);
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
                if (setIsFilterOpen) setIsFilterOpen(false);
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
              if (setIsFilterOpen) setIsFilterOpen(false);
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
