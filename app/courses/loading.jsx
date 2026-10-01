import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCardSkeleton from '../../components/courses/CourseCardSkeleton';

export default function CoursesLoading() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white" aria-busy="true" aria-label="Loading courses">
      <div className="relative w-full bg-[#003BE2] bg-grid-pattern flex flex-col overflow-hidden">
        <Navbar />

        <section className="w-full h-auto min-h-[220px] lg:h-[240px] flex flex-col items-center justify-center text-center px-4 pt-2 pb-10 relative z-20">
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="font-poppins font-semibold text-[32px] sm:text-[44px] lg:text-[48px] text-white leading-tight mb-7">
              Find Your Next Course
            </h1>

            <div className="flex items-center justify-center gap-3 sm:gap-3.5 mx-auto relative z-20 w-full max-w-[580px]">
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
                <div className="h-4 bg-slate-200 rounded w-28 animate-pulse" />
              </div>
              <div className="w-[104px] h-[52px] bg-[#D5FF00] rounded-full flex items-center justify-center shadow-sm flex-shrink-0 animate-pulse" />
            </div>
          </div>
        </section>
      </div>

      <main className="w-full flex-1 py-10 lg:py-14 bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 relative">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-12 w-24 bg-slate-100 rounded-[24px] animate-pulse" />
              <div className="h-12 w-28 bg-slate-100 rounded-[24px] animate-pulse" />
              <div className="h-12 w-32 bg-slate-100 rounded-[24px] animate-pulse" />
            </div>
            <div className="h-12 w-36 bg-slate-100 rounded-[24px] animate-pulse self-end sm:self-auto" />
          </div>

          <div className="w-full flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 lg:gap-3 mb-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-10 w-24 bg-slate-100 rounded-full animate-pulse" />
            ))}
          </div>

          <div className="flex items-center justify-between text-[#82868E] font-satoshi text-[14px] mb-6">
            <div className="h-4 bg-slate-200 rounded w-44 animate-pulse" />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mb-14">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <CourseCardSkeleton key={idx} />
            ))}
          </div>

          <div className="w-full flex items-center justify-center gap-6 sm:gap-7 my-8">
            <div className="w-[56px] h-[46px] rounded-[24px] bg-slate-100 animate-pulse" />
            <div className="flex items-center gap-5 sm:gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-4 h-4 bg-slate-200 rounded-full animate-pulse" />
              ))}
            </div>
            <div className="w-[56px] h-[46px] rounded-[24px] bg-slate-100 animate-pulse" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
