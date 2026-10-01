'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { TESTIMONIALS } from '../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <section className="relative w-full py-[72px] bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-[672px] h-[672px] rounded-full blur-[80px] pointer-events-none"
          style={{
            top: '-138px',
            left: 'calc(50% - 325px)',
            background:
              'radial-gradient(circle at center, rgba(203, 252, 1, 0.50) 0%, rgba(203, 252, 1, 0.23) 35%, rgba(203, 252, 1, 0.06) 65%, transparent 85%)',
          }}
        />

        <div
          className="absolute w-[1137px] h-[1137px] rounded-full blur-[90px] pointer-events-none"
          style={{
            top: '149px',
            left: 'calc(50% - 1162px)',
            background:
              'radial-gradient(circle at center, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.18) 35%, rgba(0, 59, 226, 0.05) 65%, transparent 85%)',
          }}
        />

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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[40px] mb-14">
          <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] max-w-[500px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-full max-w-[374px] min-h-[432px] bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-start border-none"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-[80px] h-[80px] rounded-full object-cover bg-slate-100 mb-5"
              />

              <h3 className="font-poppins font-semibold text-[20px] text-[#0F172A] leading-snug">
                {t.name}
              </h3>
              <span className="font-satoshi font-medium text-[14px] text-[#003BE2] mt-0.5 block">
                {t.role}
              </span>

              <p className="font-satoshi text-[16px] lg:text-[18px] text-[#475569] leading-relaxed mt-4">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden w-full pb-2">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoHeight={false}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="flex justify-center">
                <div className="w-full max-w-[340px] sm:max-w-[360px] min-h-[380px] bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-start border-none mx-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-[72px] h-[72px] rounded-full object-cover bg-slate-100 mb-4"
                  />

                  <h3 className="font-poppins font-semibold text-[19px] text-[#0F172A] leading-snug">
                    {t.name}
                  </h3>
                  <span className="font-satoshi font-medium text-[14px] text-[#003BE2] mt-0.5 block">
                    {t.role}
                  </span>

                  <p className="font-satoshi text-[15px] text-[#475569] leading-relaxed mt-3">
                    {t.quote}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              aria-label="Previous Testimonial"
              className="testimonial-prev w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0F172A] hover:bg-[#F5F5F6] active:scale-95 transition-all cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="testimonial-pagination flex items-center justify-center !w-auto"></div>

            <button
              type="button"
              aria-label="Next Testimonial"
              className="testimonial-next w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0F172A] hover:bg-[#F5F5F6] active:scale-95 transition-all cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
