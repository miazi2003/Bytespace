import React from 'react';
import Link from 'next/link';
import { LEARNING_PATH_CATEGORIES } from '../data/categories';

export default function LearningPaths() {
  return (
    <section className="w-full py-[72px] bg-white flex flex-col items-center">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-[880px] mx-auto text-center mb-[70px]">
          <h2 className="font-poppins font-semibold text-[30px] md:text-[36px] text-[#0F172A] leading-tight mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi text-[16px] md:text-[18px] text-[#82868E] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-center justify-items-center gap-4 sm:gap-6 lg:gap-[40px]">
          {LEARNING_PATH_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="w-full max-w-[167px] h-[167px] bg-white rounded-[24px] border border-[#CED0D3] flex flex-col items-center justify-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-[#003BE2]/40 duration-200 cursor-pointer group"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] group-hover:bg-[#C4EC00] flex items-center justify-center flex-shrink-0 transition-colors">
                <img
                  src={cat.icon}
                  alt={cat.alt}
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <span className="font-poppins font-medium text-[17px] sm:text-[20px] text-[#0F172A] text-center leading-tight px-2">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
