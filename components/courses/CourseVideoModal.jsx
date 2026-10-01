'use client';

import React from 'react';

export default function CourseVideoModal({
  isOpen,
  onClose,
  course,
  onEnroll,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-[800px] bg-black rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10">
          <h3 className="font-poppins font-semibold text-white text-[16px]">
            Preview: {course.title}
          </h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center text-center p-6">
          <img
            src="/courseDetailsIcon/71d7929ee0ecb2198c9955a8e842f4991dcb4655.jpg"
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#D5FF00] flex items-center justify-center text-[#0F172A] mb-4">
              <svg className="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h4 className="font-poppins font-bold text-white text-[20px] mb-2">
              Sample Lesson Preview
            </h4>
            <p className="font-satoshi text-white/80 text-[14px] max-w-[460px] mb-6">
              Experience full HD lesson streaming with exercise assets upon enrollment.
            </p>
            <button
              onClick={() => {
                onClose();
                onEnroll();
              }}
              className="px-8 py-3 bg-[#D5FF00] text-[#0F172A] font-poppins font-semibold text-[14px] rounded-full hover:bg-[#C4EC00] transition-colors cursor-pointer"
            >
              Enroll Now ({course.price || '$25'})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
