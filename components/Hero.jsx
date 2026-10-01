'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Ultra-smooth velvety easing curve
const smoothEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <main className="relative w-full pt-8 sm:pt-10 lg:pt-[50px] pb-0 text-center z-10 flex-1 flex flex-col items-center overflow-hidden">
      {/* Floating Background 3D Shapes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[3] overflow-hidden" aria-hidden="true">
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Frame.png" 
          alt="" 
          className="absolute top-[210px] sm:top-[70px] -left-2 sm:left-2 lg:left-0 w-[85px] sm:w-[150px] lg:w-[350px] -rotate-[1deg] select-none pointer-events-none" 
        />
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Frame (1).png" 
          alt="" 
          className="absolute top-[340px] sm:top-[380px] left-[10%] sm:left-[12%] lg:left-[15%] w-[65px] sm:w-[185px] -rotate-[15deg] select-none pointer-events-none hidden md:block" 
        />
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Cone (1).png" 
          alt="" 
          className="absolute top-[210px] sm:top-[100px] -right-2 sm:right-2 lg:-right-[4px] w-[80px] sm:w-[140px] lg:w-[250px] rotate-[1deg] select-none pointer-events-none" 
        />
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Cone.png" 
          alt="" 
          className="absolute top-[370px] sm:top-[360px] right-[10%] sm:right-[12%] lg:right-[8%] w-[75px] sm:w-[190px] select-none pointer-events-none hidden md:block" 
        />
      </div>

      {/* Main Text Content */}
      <div className="w-full max-w-[960px] mx-auto px-5 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="font-poppins font-semibold text-[36px] sm:text-[56px] md:text-[62px] lg:text-[72px] leading-[1.14] text-white tracking-[-0.02em] mb-4 sm:mb-[18px] drop-shadow-sm"
        >
          Get Access to Hundreds<br />Courses Available
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="font-satoshi font-thin text-[15px] sm:text-[18px] text-white/90 leading-[1.5] max-w-[840px] mx-auto mb-7 sm:mb-9"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.46, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="flex items-center justify-center gap-3 sm:gap-3.5 mx-auto relative z-20 w-full max-w-[580px]"
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.querySelector('input');
            const val = input ? input.value.trim() : '';
            if (val) {
              window.location.href = `/courses?search=${encodeURIComponent(val)}`;
            } else {
              window.location.href = '/courses';
            }
          }}
          role="search"
        >
          <div className="w-full max-w-[461px] h-[52px] bg-white rounded-full px-5 sm:px-6 flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
            <svg 
              className="text-[#94A3B8] flex-shrink-0" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="w-full bg-transparent border-none outline-none font-satoshi text-[15px] text-[#1E293B] placeholder-[#8E95A2] font-normal"
              placeholder="Course, topic, creator"
              aria-label="Search for courses, topics, or creators"
            />
          </div>
          <button 
            type="submit" 
            className="font-satoshi w-[104px] h-[46px] bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-medium text-[16px] rounded-full flex items-center justify-center cursor-pointer transition-all whitespace-nowrap shadow-sm flex-shrink-0"
          >
            Search
          </button>
        </motion.form>
      </div>

      {/* Visual Composition Section */}
      <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] mt-2">
        {/* Green Ellipse under man - Still */}
        <img 
          src="/images/Ellipse 7.png" 
          alt="" 
          className="absolute -bottom-[30px] sm:-bottom-[80px] left-1/2 -translate-x-1/2 w-[520px] sm:w-[780px] md:w-[1020px] lg:w-[1240px] max-w-full lg:max-w-[1240px] h-auto z-[2] lg:z-[1] select-none pointer-events-none" 
        />

        {/* Round Element (Cone 2): under man, above green ellipse - Animated */}
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Cone (2).png" 
          alt="" 
          className="absolute bottom-[40px] sm:bottom-0 left-0 sm:left-4 lg:left-56 w-[170px] sm:w-[220px] lg:w-[380px] -rotate-[10deg] select-none pointer-events-none z-[5] lg:z-[5]" 
        />

        {/* Right White Spiral Ribbon: Frame (1) - Animated */}
        <motion.img 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          src="/images/Frame (1).png" 
          alt="" 
          className="absolute bottom-[65px] sm:-bottom-[30px] right-0 sm:right-2 lg:right-[150px] w-[120px] sm:w-[150px] lg:w-[400px] rotate-[3deg] select-none pointer-events-none z-[5] lg:z-[3]" 
        />

        {/* The Man: above round element, happy students, and green ellipse - Still */}
        <img 
          src="/images/29a52a24e51266edcd7d57d73392ee5fc4833220.png" 
          alt="Student with headphones and laptop" 
          className="absolute -bottom-[30px] sm:-bottom-[80px] left-1/2 -translate-x-1/2 w-[310px] sm:w-[430px] md:w-[700px] max-w-full h-auto z-[10] lg:z-[4] select-none pointer-events-none" 
        />

        {/* UI/UX Design Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.76, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bg-white rounded-2xl shadow-[0_16px_36px_-4px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)] z-[12] lg:z-[12] text-left py-3 sm:py-3.5 px-4 sm:px-5 top-[50px] sm:top-[85px] md:top-[135px] left-3 sm:left-[10%] md:left-[22%] lg:left-[26%]"
        >
          <div className="font-poppins font-medium text-[13px] sm:text-[18px] text-[#0F172A] mb-0.5">
            UI/UX Design
          </div>
          <div className="font-satoshi text-[10.5px] sm:text-[14px] text-[#64748B] font-medium">
            200 Courses &bull; 1000+ Students
          </div>
        </motion.div>

        {/* Learning Progress Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.88, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bg-white rounded-2xl shadow-[0_16px_36px_-4px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)] z-[12] lg:z-[12] text-left py-3.5 sm:py-4 px-4 sm:px-5.5 min-w-[145px] sm:min-w-[210px] sm:min-h-[120px] top-[65px] sm:top-[100px] md:top-[150px] right-3 sm:right-[10%] md:right-[21%] lg:right-[25%]"
        >
          <div className="font-satoshi font-medium text-[11px] sm:text-[12px] text-[#475569] mb-1">
            Learning Progress
          </div>
          <div className="font-poppins font-bold text-[26px] sm:text-[44px] text-[#0F172A] leading-none mb-2">
            55%
          </div>
          <div className="w-full h-[6px] sm:h-[7px] bg-[#E2E8F0] rounded-full overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.05, ease: smoothEase }}
              style={{ originX: 0, willChange: 'transform' }}
              className="w-[55%] h-full bg-[#D5FF00] rounded-full"
            />
          </div>
        </motion.div>

        {/* Happy Students Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.0, ease: smoothEase }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bg-white rounded-2xl shadow-[0_16px_36px_-4px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)] z-[8] lg:z-[15] text-left py-3 sm:py-3.5 px-3.5 sm:px-4.5 bottom-[130px] sm:bottom-8 md:bottom-[45px] left-3 sm:left-[8%] md:left-[17%] lg:left-[30%] w-max max-w-[95%]"
        >
          <div className="flex flex-col items-left justify-between gap-3 sm:gap-1 mb-2 sm:mb-2.5">
            <span className="font-poppins font-medium text-[12.5px] sm:text-[16px] text-[#0F172A]">
              Happy Students
            </span>
            <span className="font-satoshi font-medium text-[10.5px] sm:text-[13px] text-[#64748B] flex items-center gap-1">
              4.5 (240)<span className="text-[#D4FB20] text-[11px]">★</span>
            </span>
          </div>
          <div className="flex items-center">
            {[
              '/customerImage/1e078348a54489bfd231d82fe1944770883c8d80.png',
              '/customerImage/5824acacb3b76175bc84084ec18597109498f96d.png',
              '/customerImage/7fdccc783264eedc4fb989984eecbc4058a219f2.png',
              '/customerImage/83fb3e04056cc892636460bee5791aa3f243854c.png',
              '/customerImage/9ef8cb329b949267cc8214b6727067c4a13af4b4.png',
              '/customerImage/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png',
            ].map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Student ${idx + 1}`}
                className="w-[28px] sm:w-[36px] h-[28px] sm:h-[36px] rounded-full flex-shrink-0 border-2 border-white object-cover bg-slate-300 first:ml-0 -ml-1.5 sm:-ml-2"
              />
            ))}
            <div className="font-satoshi w-[28px] sm:w-[36px] h-[28px] sm:h-[36px] rounded-full flex-shrink-0 bg-[#D4FB20] border-2 border-white -ml-1.5 sm:-ml-2 flex items-center justify-center font-poppins font-bold text-[10px] sm:text-[11px] text-[#0F172A] z-10">
              2K+
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
