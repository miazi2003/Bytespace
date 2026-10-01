import React from 'react';
import CourseCard from './CourseCard';
import { AUTH_CARD_1, AUTH_CARD_2, AUTH_CUSTOMER_AVATARS } from '../data/authShowcase';

export default function AuthShowcase() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[500px] h-[440px] sm:h-[510px] mx-auto lg:mx-0 mt-2 select-none">
      <img
        src="/images/register-torus.png"
        alt=""
        className="absolute lg:top-5 lg:left-4 top-10 -left-4 w-[110px] sm:w-[145px] h-[110px] sm:h-[145px] object-contain z-20 pointer-events-none drop-shadow-md"
      />

      <div className="absolute top-24 left-0 z-0 w-[290px] sm:w-[360px] opacity-100 pointer-events-none">
        <CourseCard course={AUTH_CARD_1} />
      </div>

      <div className="absolute top-0 left-10 sm:left-24 z-10 w-[290px] sm:w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] rounded-[24px]">
        <CourseCard course={AUTH_CARD_2} />
      </div>

      <img
        src="/images/register-cone.png"
        alt=""
        className="absolute -bottom-23 sm:-bottom-16 sm:-left-2 left-6 w-[120px] sm:w-[165px] h-[120px] sm:h-[165px] object-contain z-25 pointer-events-none drop-shadow-2xl"
      />

      <img
        src="/images/Frame (1).png"
        alt=""
        className="absolute -bottom-10 sm:bottom-6 -right-6 sm:right-2 w-[120px] sm:w-[165px] h-[150px] sm:h-[165px] object-contain z-40 pointer-events-none drop-shadow-xl"
      />

      <div className="absolute -bottom-23 sm:-bottom-12 right-0 sm:right-11 z-25 bg-[#D4FB20] rounded-[20px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.2)] w-max max-w-[95%]">
        <div className="flex flex-col items-start justify-between gap-1 mb-2.5">
          <span className="font-poppins font-semibold text-[13px] sm:text-[15px] text-[#0F172A]">
            Happy Students
          </span>
          <span className="font-satoshi font-medium text-[11px] sm:text-[12.5px] text-[#0F172A]/80 flex items-center gap-1">
            4.5 (240)<span className="text-[#0F172A] text-[10px]">★</span>
          </span>
        </div>
        <div className="flex items-center">
          {AUTH_CUSTOMER_AVATARS.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Student ${idx + 1}`}
              className="w-[26px] sm:w-[45px] h-[26px] sm:h-[45px] rounded-full flex-shrink-0 border-2 border-[#D4FB20] object-cover bg-slate-300 first:ml-0 -ml-1.5 sm:-ml-2"
            />
          ))}
          <div className="font-satoshi w-[26px] sm:w-[45px] h-[26px] sm:h-[45px] rounded-full flex-shrink-0 bg-[#0F172A] border-2 border-[#D4FB20] -ml-1.5 sm:-ml-2 flex items-center justify-center font-poppins font-bold text-[9px] sm:text-[11px] text-white z-10">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
