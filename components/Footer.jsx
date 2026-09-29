'use client';

import React from 'react';

const NAV_COLUMNS = [
  {
    links: [
      { label: 'Featured Courses', href: '#courses' },
      { label: 'Featured Categories', href: '#categories' },
      { label: 'Business', href: '#business' },
      { label: 'IT', href: '#it' },
      { label: 'Design', href: '#design' },
    ],
  },
  {
    links: [
      { label: 'Development', href: '#development' },
      { label: 'Marketing', href: '#marketing' },
      { label: 'Photography', href: '#photography' },
      { label: 'Finance', href: '#finance' },
      { label: 'Sport', href: '#sport' },
    ],
  },
  {
    links: [
      { label: 'Become a Creator', href: '#creator' },
      { label: 'Affiliate Program', href: '#affiliate' },
      { label: 'Contact', href: '#contact' },
      { label: 'Help', href: '#help' },
      { label: 'About', href: '#about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-[70px] pb-[48px] flex flex-col justify-between">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[90px]">
          {/* Left Column: Logo & Newsletter */}
          <div className="flex flex-col max-w-[500px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 select-none focus:outline-none mb-4">
              <img
                src="/logo.png"
                alt="ByteSpace"
                className="w-[28px] h-[32px] object-contain flex-shrink-0"
              />
              <span className="font-clash font-bold text-[24px] text-[#0F172A] leading-none">
                ByteSpace
              </span>
            </a>

            {/* Newsletter Heading / Subtitle */}
            <p className="font-satoshi text-[14px] text-[#0F172A] leading-relaxed mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[376px] h-[52px] px-6 rounded-full border border-[#CED0D3] text-[14px] font-satoshi text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
              />
              <button
                type="submit"
                className="px-[28px] py-[10px] h-[52px] bg-[#D4FB20] text-[#0F172A] font-satoshi font-medium text-[14px] rounded-full hover:brightness-95 transition-all flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Privacy note */}
            <p className="font-satoshi text-[12px] text-[#82868E] leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: 3 Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-[40px] pt-1">
            {NAV_COLUMNS.map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-y-[16px] list-none p-0 m-0 min-w-[130px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="font-satoshi text-[14px] text-[#0F172A] hover:text-[#003BE2] transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Gap between footer top and bottom: 130px */}
        <div className="mt-[130px]">
          {/* Top Divider */}
          <div className="w-full border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-satoshi text-[12px] text-[#82868E]">
              @ 2023 ByteSpace. All rights reserved.
            </p>

            {/* Legal / Policy Links */}
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#privacy"
                className="font-satoshi text-[12px] text-[#0F172A] hover:text-[#003BE2] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="font-satoshi text-[12px] text-[#0F172A] hover:text-[#003BE2] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="font-satoshi text-[12px] text-[#0F172A] hover:text-[#003BE2] transition-colors"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
