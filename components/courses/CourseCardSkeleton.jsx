import React from 'react';

export default function CourseCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[373px] h-[384px] bg-white rounded-[24px] border border-[#E5E7EB] p-4 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
    >
      <div>
        <div className="relative w-full h-[165px] rounded-[12px] overflow-hidden bg-slate-200 animate-pulse">
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-[12px]">
            <div className="h-5 w-16 bg-white/70 backdrop-blur-md rounded-full" />
            <div className="h-5 w-20 bg-white/70 backdrop-blur-md rounded-full" />
            <div className="h-5 w-18 bg-white/70 backdrop-blur-md rounded-full" />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="h-6 bg-slate-200 rounded-lg w-2/3 animate-pulse" />
            <div className="h-5 bg-slate-200 rounded-lg w-10 animate-pulse flex-shrink-0" />
          </div>
          <div className="h-4 bg-slate-200 rounded-md w-1/3 mt-2.5 animate-pulse" />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-7 w-24 bg-slate-100 rounded-full animate-pulse flex-shrink-0" />
          <div className="flex items-center flex-shrink-0">
            <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full bg-slate-200 border-2 border-white first:ml-0 -ml-2 animate-pulse flex-shrink-0" />
            <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full bg-slate-200 border-2 border-white -ml-2 animate-pulse flex-shrink-0" />
            <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full bg-slate-200 border-2 border-white -ml-2 animate-pulse flex-shrink-0" />
            <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] rounded-full bg-slate-300 border-2 border-white -ml-2 animate-pulse flex-shrink-0" />
          </div>
        </div>

        <div className="flex items-baseline gap-1.5 mt-3 pt-1">
          <div className="h-6 bg-slate-200 rounded-md w-14 animate-pulse" />
          <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
