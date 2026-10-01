'use client';

import React from 'react';

export default function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="w-full flex items-center justify-center gap-6 sm:gap-7 my-8">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`w-[56px] h-[46px] rounded-[24px] border border-[#E2E8F0] flex items-center justify-center transition-all ${
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed text-[#94A3B8]'
            : 'hover:bg-[#F8FAFC] active:scale-95 text-[#0F172A] cursor-pointer'
        }`}
      >
        <svg
          width="24"
          height="20"
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

      <div className="flex items-center gap-5 sm:gap-6">
        {[1, 2, 3, 4, 5].map((pageNum) => {
          const isActive = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
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

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`w-[56px] h-[46px] rounded-[24px] border border-[#E2E8F0] flex items-center justify-center transition-all ${
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed text-[#94A3B8]'
            : 'hover:bg-[#F8FAFC] active:scale-95 text-[#0F172A] cursor-pointer'
        }`}
      >
        <svg
          width="24"
          height="20"
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
  );
}
