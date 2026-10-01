'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-[#003BE2] bg-grid-pattern flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-12 lg:px-[260px] mt-4 lg:mt-[40px] pb-16">
        <div className="relative w-full max-w-[860px] mx-auto flex flex-col items-center">
          <img
            src="/images/404.png"
            alt="404"
            className="w-full max-w-[860px] h-auto object-contain select-none pointer-events-none"
          />

          <h1 className="font-poppins font-semibold text-[26px] sm:text-[48px] md:text-[58px] lg:text-[72px] text-white leading-[1.18] sm:leading-[1.14] text-center -mt-5 sm:-mt-8 lg:-mt-12 w-full flex flex-col items-center px-4 sm:px-0">
            <span className="block sm:whitespace-nowrap">The page you are looking</span>
            <span className="block sm:whitespace-nowrap">for doesn’t exist</span>
          </h1>
        </div>

        <p className="font-satoshi text-[15px] sm:text-[18px] text-white/90 text-center font-normal mt-5 sm:mt-6 lg:mt-[32px] mb-7 lg:mb-[32px] max-w-[620px] px-4 sm:px-0">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="font-satoshi h-[48px] sm:h-[52px] px-8 bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-medium text-[16px] rounded-full inline-flex items-center justify-center cursor-pointer transition-all shadow-sm"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
