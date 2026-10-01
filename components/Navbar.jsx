'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-auto lg:h-[120px] flex items-center pt-6 pb-4 lg:py-0 relative z-30">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between relative" aria-label="Main Navigation">
          {/* Left: Mobile Hamburger + Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              type="button"
              className="md:hidden text-white p-1 focus:outline-none cursor-pointer flex items-center justify-center relative w-7 h-7"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </button>

            <a href="/" className="flex items-end gap-2.5 select-none focus:outline-none">
              <img 
                src="/logo.png" 
                alt="ByteSpace Icon" 
                className="w-[29px] h-[32px] object-contain flex-shrink-0" 
              />
              <img
                src="/images/logo-text-dark.png"
                alt="ByteSpace"
                className="w-[133px] h-[21px] object-contain flex-shrink-0 brightness-0 invert"
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2 list-none">
            <li>
              <a href="/" className="font-satoshi text-[16px] font-thin text-white/95 hover:text-white transition-opacity">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="font-satoshi text-[16px] font-thin text-white/95 hover:text-white transition-opacity">
                Courses
              </a>
            </li>
            <li>
              <a href="/creators" className="font-satoshi text-[16px] font-thin text-white/95 hover:text-white transition-opacity">
                Creators
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-7">
            <a href="/login" className="font-satoshi text-[16px] font-thin text-white/95 hover:text-white transition-opacity">
              Sign In
            </a>
            <a href="/register" className="font-satoshi text-[16px] font-thin text-white/95 hover:text-white transition-opacity">
              Join Us
            </a>
            <a
              href="/cart"
              className="text-white/95 hover:text-white hover:scale-105 transition-all p-0.5 relative cursor-pointer"
              aria-label="Shopping Bag"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="7" width="17" height="14" rx="2.5" />
                <path d="M8 9.5V5a4 4 0 0 1 8 0v4.5" />
              </svg>
            </a>
          </div>

          {/* Mobile Right: Cart Icon */}
          <a
            href="/cart"
            className="md:hidden text-white/95 hover:text-white p-1 relative cursor-pointer focus:outline-none"
            aria-label="Shopping Bag"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.5" y="7" width="17" height="14" rx="2.5" />
              <path d="M8 9.5V5a4 4 0 0 1 8 0v4.5" />
            </svg>
          </a>
        </nav>
      </div>

      {/* Mobile Menu Dropdown with Smooth Slide & Fade Transition */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#003BE2] border-t border-white/10 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden z-50 ${
          mobileMenuOpen
            ? 'max-h-[440px] opacity-100 translate-y-0 pointer-events-auto visible'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
      >
        <div className="px-6 sm:px-8 py-5 flex flex-col gap-3.5">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-satoshi text-[16px] font-medium text-white hover:text-[#D4FB20] transition-colors py-1 flex items-center justify-between"
          >
            <span>Home</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
          <a
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="font-satoshi text-[16px] font-medium text-white hover:text-[#D4FB20] transition-colors py-1 flex items-center justify-between"
          >
            <span>Courses</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
          <a
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="font-satoshi text-[16px] font-medium text-white hover:text-[#D4FB20] transition-colors py-1 flex items-center justify-between"
          >
            <span>Creators</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
          <a
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="font-satoshi text-[16px] font-medium text-white hover:text-[#D4FB20] transition-colors py-1 flex items-center justify-between"
          >
            <span>Cart</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>

          <hr className="border-white/15 my-1" />

          <div className="flex items-center gap-3 pt-1">
            <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full border border-white/20 text-white font-satoshi text-[15px] font-medium hover:bg-white/10 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full bg-[#D4FB20] text-[#0F172A] font-poppins text-[15px] font-semibold hover:bg-[#C4EC00] transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
