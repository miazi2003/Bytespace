'use client';

import React from 'react';
import Link from 'next/link';
import { FOOTER_NAV_COLUMNS, FOOTER_LEGAL_LINKS } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] pt-[70px] pb-[48px] flex flex-col justify-between">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[90px]">
          <div className="flex flex-col max-w-[500px]">
            <Link href="/" className="flex items-end gap-2.5 select-none focus:outline-none mb-4">
              <img
                src="/logo.png"
                alt="ByteSpace Icon"
                className="w-[29px] h-[32px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logo-text-dark.png"
                alt="ByteSpace"
                className="w-[133px] h-[21px] object-contain flex-shrink-0"
              />
            </Link>

            <p className="font-satoshi text-[14px] text-[#0F172A] leading-relaxed mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

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

            <p className="font-satoshi text-[12px] text-[#82868E] leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-[40px] pt-1">
            {FOOTER_NAV_COLUMNS.map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-y-[16px] list-none p-0 m-0 min-w-[130px]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="font-satoshi text-[14px] text-[#0F172A] hover:text-[#003BE2] transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-[130px]">
          <div className="w-full border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-satoshi text-[12px] text-[#82868E]">
              @ 2023 ByteSpace. All rights reserved.
            </p>

            <div className="flex items-center gap-6 sm:gap-8">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-satoshi text-[12px] text-[#0F172A] hover:text-[#003BE2] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
