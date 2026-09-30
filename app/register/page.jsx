'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CourseCard from '../../components/CourseCard';

const CARD_DATA_1 = {
  id: 2,
  title: 'Build Digital Asset',
  image: '/courseCardImage/c88264191d691ba3300ad4f82a942429bb912fa5.jpg',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  instructor: 'purepearl studio',
  rating: '4.5',
  level: 'Beginner',
  price: '$25',
  period: '/lifetime',
};

const CARD_DATA_2 = {
  id: 3,
  title: 'the Power of Big Data',
  image: '/courseCardImage/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  instructor: 'purepearl studio',
  rating: '4.5',
  level: 'Beginner',
  price: '$25',
  period: '/lifetime',
};

const CUSTOMER_AVATARS = [
  '/customerImage/1e078348a54489bfd231d82fe1944770883c8d80.png',
  '/customerImage/5824acacb3b76175bc84084ec18597109498f96d.png',
  '/customerImage/7fdccc783264eedc4fb989984eecbc4058a219f2.png',
  '/customerImage/83fb3e04056cc892636460bee5791aa3f243854c.png',
  '/customerImage/9ef8cb329b949267cc8214b6727067c4a13af4b4.png',

];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#0052FE] bg-grid-pattern flex flex-col justify-between overflow-x-hidden lg:overflow-hidden">
      {/* Header: Logo Only, Exact Height 120px on Desktop */}
      <header className="w-full h-[80px] sm:h-[100px] lg:h-[120px] flex items-center relative z-30 shrink-0">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] flex items-center">
          <Link href="/" className="select-none focus:outline-none flex items-center">
            <img
              src="/logo.png"
              alt="ByteSpace Logo"
              className="w-[32px] h-[32px] object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area: Top aligned nearby header with 120px max left & right padding */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] pt-0 mt-0 pb-12 lg:pb-0 flex-1 flex items-start">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[96px]">
          {/* Left Column: Heading, Description & Graphic Composition */}
          <div className="contents lg:flex lg:flex-col lg:w-1/2 lg:pt-2">
            {/* 1. Mobile First: Text Header & Description */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-0 order-1 lg:order-none">
              <h1 className="font-poppins font-semibold text-[18px] sm:text-[20px] text-white leading-tight mb-4">
                Sign up and come in
              </h1>
              <p className="font-satoshi text-[16px] text-white/80 max-w-[440px] leading-relaxed min-h-[78px] mb-8 lg:mb-10">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
              </p>
            </div>

            {/* 3. Mobile Third: Visual Composite Layer */}
            <div className="relative w-full max-w-[340px] sm:max-w-[500px] h-[440px] sm:h-[510px] mx-auto lg:mx-0 mt-2 select-none order-3 lg:order-none">
              {/* Floating Lime Torus / Ring (Top Left) */}
              <img
                src="/images/register-torus.png"
                alt=""
                className="absolute lg:top-5 lg:left-4 top-10 -left-4 w-[110px] sm:w-[145px] h-[110px] sm:h-[145px] object-contain z-20 pointer-events-none drop-shadow-md"
              />

              {/* Background Card 1: Build Digital Asset (Aligned flush in straight line with text) */}
              <div className="absolute top-24 left-0 z-0 w-[290px] sm:w-[360px] opacity-100 pointer-events-none">
                <CourseCard course={CARD_DATA_1} />
              </div>

              {/* Foreground Card 2: the Power of Big Data (Shifted right) */}
              <div className="absolute top-0 left-10 sm:left-24 z-10 w-[290px] sm:w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] rounded-[24px]">
                <CourseCard course={CARD_DATA_2} />
              </div>

              {/* Floating Lime 3D Pyramid / Cone (Bottom Left) */}
              <img
                src="/images/register-cone.png"
                alt=""
                className="absolute -bottom-23 sm:-bottom-16 sm:-left-2 left-6 w-[120px] sm:w-[165px] h-[120px] sm:h-[165px] object-contain z-25 pointer-events-none drop-shadow-2xl"
              />

              {/* Floating White 3D Spiral Doodle (Bottom Center-Right) */}
              <img
                src="/images/Frame (1).png"
                alt=""
                className="absolute -bottom-10 sm:bottom-6 -right-6 sm:right-2 w-[120px] sm:w-[165px] h-[150px] sm:h-[165px] object-contain z-40 pointer-events-none drop-shadow-xl"
              />

              {/* Lime Happy Students Card (Foreground Right) */}
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
                  {CUSTOMER_AVATARS.map((imgSrc, idx) => (
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
          </div>

          {/* Right Column: Register Form Container (w: 579px, min-h: 784px) */}
          <div className="w-full max-w-[579px] min-h-0 sm:min-h-[754px] bg-white rounded-[24px] sm:rounded-[32px] px-6 sm:px-[63px] pt-8 sm:pt-[72px] pb-6 sm:pb-[54px] flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.18)] order-2 lg:order-none">
            <div>
              {/* Form Header */}
              <div className="mb-8">
                <span className="font-satoshi font-normal text-[15px] sm:text-[18px] text-[#003BE2] block mb-2">
                  Create an Account
                </span>
                <h2 className="font-poppins font-semibold text-[34px] sm:text-[44px] text-[#0F172A] leading-[1.12]">
                  Welcome to<br />ByteSpace
                </h2>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jamie Davis"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="designer@example.com"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="********"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-9 py-3.5 bg-[#D4FB20] text-[#0F172A] font-satoshi font-semibold text-[15px] rounded-full hover:brightness-95 transition-all cursor-pointer shadow-sm"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>

            {/* Form Footer */}
            <div className="text-center pt-8 border-t border-slate-100 mt-6">
              <p className="font-satoshi text-[16px] text-[#64748B]">
                Already have an account?{' '}
                <Link href="/login" className="text-[#003BE2] font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
