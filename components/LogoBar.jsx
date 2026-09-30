import React from 'react';

export default function LogoBar() {
  const logos = [
    { src: '/logoipsumimage/logoipsum1.png', alt: 'Logoipsum 1' },
    { src: '/logoipsumimage/logoipsum2.png', alt: 'Logoipsum 2' },
    { src: '/logoipsumimage/logoipsum3.png', alt: 'Logoipsum 3' },
    { src: '/logoipsumimage/logoipsum4.png', alt: 'Logoipsum 4' },
    { src: '/logoipsumimage/logoipsum5.png', alt: 'Logoipsum 5' },
  ];

  return (
    <section className="w-full bg-[#F5F5F6] h-auto py-8 lg:py-0 lg:h-[202px] flex items-center relative z-20 overflow-hidden">
      {/* Desktop Version: Static Row (100% untouched) */}
      <div className="hidden lg:block w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-[72px]">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-[167px] h-[41px] object-contain select-none opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Mobile Version: Infinite Scrolling Marquee */}
      <div className="lg:hidden w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
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
