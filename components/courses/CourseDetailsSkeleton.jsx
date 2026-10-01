import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function CourseDetailsSkeleton() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white overflow-x-hidden" aria-hidden="true">
      <section className="relative w-full bg-[#003BE2] bg-grid-pattern pb-8 lg:pb-10 flex flex-col justify-start">
        <Navbar />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 relative z-20">
          <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
            <div className="flex-1 max-w-[880px]">
              <div className="h-9 sm:h-11 bg-white/20 rounded-xl w-3/4 animate-pulse" />
              <div className="h-6 bg-white/15 rounded-lg w-1/2 mt-3 animate-pulse" />
              <div className="h-5 bg-white/15 rounded-md w-1/4 mt-2.5 animate-pulse" />

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5">
                <div className="h-9 w-32 bg-white/90 rounded-full animate-pulse shadow-sm" />
                <div className="h-9 w-36 bg-white/90 rounded-full animate-pulse shadow-sm" />
                <div className="h-9 w-32 bg-white/90 rounded-full animate-pulse shadow-sm" />
              </div>
            </div>

            <div className="h-9 w-24 bg-[#D5FF00]/80 rounded-full animate-pulse self-start md:self-auto flex-shrink-0" />
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:mt-10 relative">
            <div className="lg:col-span-8 w-full lg:w-[720px] max-w-[720px] h-[260px] sm:h-[380px] lg:h-[479px] rounded-[24px] bg-slate-900/60 border border-white/10 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center animate-pulse flex-shrink-0">
              <div className="w-[82px] h-[82px] sm:w-[96px] sm:h-[96px] rounded-[24px] sm:rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center" />
            </div>

            <div className="lg:col-span-4 w-full lg:w-[412px] max-w-[412px] lg:min-h-[956px] bg-white rounded-[24px] p-6 sm:p-8 lg:p-[40px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#E5E7EB] flex flex-col justify-between relative z-30 lg:absolute lg:right-0 lg:top-0">
              <div>
                <div className="h-6 bg-slate-200 rounded-lg w-3/4 mb-5 animate-pulse" />

                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5 w-3/4">
                        <div className="h-5 w-6 bg-slate-200 rounded animate-pulse" />
                        <div className="h-5 bg-slate-200 rounded w-full animate-pulse" />
                      </div>
                      <div className="h-4 w-12 bg-slate-200 rounded animate-pulse" />
                    </div>
                  ))}
                  <div className="h-4 bg-slate-200 rounded w-24 mt-1 animate-pulse" />
                </div>

                <div className="h-4 bg-slate-200 rounded w-full mt-6 mb-3 animate-pulse" />

                <div className="flex items-baseline gap-2 my-3">
                  <div className="h-9 bg-slate-200 rounded-lg w-20 animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
                </div>

                <div className="w-full h-12 bg-[#D4FB20]/70 rounded-full animate-pulse mt-2 mb-8" />

                <div className="flex flex-col gap-3.5">
                  <div className="h-5 bg-slate-200 rounded w-40 mb-1 animate-pulse" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-slate-200 animate-pulse flex-shrink-0" />
                      <div className="h-4 bg-slate-200 rounded w-48 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-6 mt-8">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-[52px] h-[52px] rounded-full bg-slate-200 animate-pulse flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-5 bg-slate-200 rounded w-32 mb-1.5 animate-pulse" />
                    <div className="h-4 bg-slate-200 rounded w-24 animate-pulse" />
                  </div>
                </div>
                <div className="h-4 bg-slate-200 rounded w-full mb-4 animate-pulse" />
                <div className="h-9 w-32 bg-slate-100 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 w-full lg:w-[725px] max-w-[725px] flex flex-col">
            <div className="flex items-center gap-2 sm:gap-3 mb-8">
              <div className="h-11 w-20 bg-slate-200 rounded-full animate-pulse" />
              <div className="h-11 w-20 bg-slate-100 rounded-full animate-pulse" />
              <div className="h-11 w-24 bg-slate-100 rounded-full animate-pulse" />
            </div>

            <section className="mb-10">
              <div className="h-7 bg-slate-200 rounded-lg w-36 mb-4 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-100 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-100 rounded w-4/5 animate-pulse" />
                <div className="h-4 bg-slate-100 rounded w-full animate-pulse" />
                <div className="h-4 bg-slate-100 rounded w-2/3 animate-pulse" />
              </div>
            </section>

            <section className="mb-12">
              <div className="h-7 bg-slate-200 rounded-lg w-36 mb-5 animate-pulse" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-[110px] sm:h-[120px] rounded-[16px] bg-slate-200 animate-pulse" />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <div className="h-7 bg-slate-200 rounded-lg w-36 mb-5 animate-pulse" />
              <div className="flex flex-col gap-3.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 animate-pulse flex-shrink-0" />
                    <div className="h-4 bg-slate-100 rounded w-2/3 animate-pulse" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
