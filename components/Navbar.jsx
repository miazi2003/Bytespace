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
              className="md:hidden text-white p-1 focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

            <a href="/" className="flex items-center gap-2.5 select-none focus:outline-none">
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

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 w-full bg-[#0047df] px-8 py-6 shadow-2xl flex flex-col gap-4 z-50 border-t border-white/10">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]">
            Home
          </a>
          <a href="/courses" onClick={() => setMobileMenuOpen(false)} className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]">
            Courses
          </a>
          <a href="/creators" onClick={() => setMobileMenuOpen(false)} className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]">
            Creators
          </a>
          <a
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]"
          >
            Cart
          </a>
          <hr className="border-white/15 my-1" />
          <a href="/login" onClick={() => setMobileMenuOpen(false)} className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]">
            Sign In
          </a>
          <a href="/register" onClick={() => setMobileMenuOpen(false)} className="font-satoshi text-[17px] font-thin text-white hover:text-[#D5FF00]">
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
