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
    <section className="w-full bg-[#F5F5F6] h-auto py-8 lg:py-0 lg:h-[202px] flex items-center relative z-20">
      <div className="w-full max-w-[1240px] px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-center lg:justify-between gap-8 md:gap-12 lg:gap-[72px] flex-wrap lg:flex-nowrap">
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
    </section>
  );
}
