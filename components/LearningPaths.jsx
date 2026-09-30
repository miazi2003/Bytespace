import React from 'react';

const CATEGORIES = [
  {
    id: 'design',
    name: 'Design',
    icon: '/icon-images/Frame (7).png',
    alt: 'Design Icon',
  },
  {
    id: 'development',
    name: 'Development',
    icon: '/icon-images/Style=Filled.png',
    alt: 'Development Icon',
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    icon: '/icon-images/Style=Filled (1).png',
    alt: 'IT & Software Icon',
  },
  {
    id: 'business',
    name: 'Business',
    icon: '/icon-images/Style=Round.png',
    alt: 'Business Icon',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '/icon-images/Style=Outlined (1).png',
    alt: 'Marketing Icon',
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: '/icon-images/Style=Outlined (2).png',
    alt: 'Photography Icon',
  },
];

export default function LearningPaths() {
  return (
    <section className="w-full py-[72px] bg-white flex flex-col items-center">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Container */}
        <div className="w-full max-w-[880px] mx-auto text-center mb-[70px]">
          <h2 className="font-poppins font-semibold text-[30px] md:text-[36px] text-[#0F172A] leading-tight mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi text-[16px] md:text-[18px] text-[#82868E] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Icon Container: 2 columns on mobile, single flex row on desktop */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-center justify-items-center gap-4 sm:gap-6 lg:gap-[40px]">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="w-full max-w-[167px] h-[167px] bg-white rounded-[24px] border border-[#CED0D3] flex flex-col items-center justify-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center flex-shrink-0">
                <img
                  src={cat.icon}
                  alt={cat.alt}
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <span className="font-poppins font-medium text-[17px] sm:text-[20px] text-[#0F172A] text-center leading-tight px-2">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
