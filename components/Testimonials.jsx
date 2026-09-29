import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    image: '/images/author-sarah.png',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    image: '/images/author-james.png',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    image: '/images/author-alex.png',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-[120px] bg-white overflow-hidden">
      {/* 3 Exact Background Radial Gradients from Figma Dev Mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ellipse 12: Lime Top-Center (w: 672px, h: 672px, top: -138px, left: 395px) */}
        <div
          className="absolute w-[672px] h-[672px] rounded-full blur-[80px] pointer-events-none"
          style={{
            top: '-138px',
            left: 'calc(50% - 325px)',
            background:
              'radial-gradient(circle at center, rgba(203, 252, 1, 0.50) 0%, rgba(203, 252, 1, 0.23) 35%, rgba(203, 252, 1, 0.06) 65%, transparent 85%)',
          }}
        />

        {/* Ellipse 8: Blue Bottom-Left (w: 1137px, h: 1137px, top: 149px, left: -442px) */}
        <div
          className="absolute w-[1137px] h-[1137px] rounded-full blur-[90px] pointer-events-none"
          style={{
            top: '149px',
            left: 'calc(50% - 1162px)',
            background:
              'radial-gradient(circle at center, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.18) 35%, rgba(0, 59, 226, 0.05) 65%, transparent 85%)',
          }}
        />

        {/* Ellipse 11: Lime Top-Right (w: 1137px, h: 1137px, top: -241px, left: 842px) */}
        <div
          className="absolute w-[1137px] h-[1137px] rounded-full blur-[90px] pointer-events-none"
          style={{
            top: '-241px',
            left: 'calc(50% + 122px)',
            background:
              'radial-gradient(circle, rgba(203, 252, 1, 0.48) 0%, rgba(203, 252, 1, 0.22) 24%, rgba(203, 252, 1, 0.06) 50%, transparent 85%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Heading & Description in Flex Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[40px] mb-14">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] max-w-[500px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-full max-w-[374px] min-h-[432px] bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-start border-none"
            >
              {/* Author Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-[80px] h-[80px] rounded-full object-cover bg-slate-100 mb-5"
              />

              {/* Author Details */}
              <h3 className="font-poppins font-semibold text-[20px] text-[#0F172A] leading-snug">
                {t.name}
              </h3>
              <span className="font-satoshi font-medium text-[14px] text-[#003BE2] mt-0.5 block">
                {t.role}
              </span>

              {/* Review Description */}
              <p className="font-satoshi text-[16px] lg:text-[18px] text-[#475569] leading-relaxed mt-4">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
