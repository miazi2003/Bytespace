import React from 'react';
import { PARTNER_LOGOS } from '../data/partners';

export default function LogoBar() {
  return (
    <section className="w-full bg-[#F5F5F6] h-auto py-8 lg:py-0 lg:h-[202px] flex items-center relative z-20 overflow-hidden">
      <div className="hidden lg:block w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-[72px]">
          {PARTNER_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-[167px] h-[41px] object-contain select-none opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      <div className="lg:hidden w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-[130px] sm:w-[150px] h-[32px] sm:h-[38px] object-contain select-none opacity-85 shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
