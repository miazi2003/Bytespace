'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CourseCard from './CourseCard';
import { ALL_COURSES } from '../data/courses';

const smoothEase = [0.22, 1, 0.36, 1];

const FIGMA_COURSE = ALL_COURSES[0];

const BULLET_POINTS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

function CountUpNumber({ target, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(easeOut * target);

      if (ref.current) {
        ref.current.textContent = `${val}${suffix}`;
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else if (ref.current) {
        ref.current.textContent = `${target}${suffix}`;
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, suffix, duration]);

  return (
    <span
      ref={ref}
      className="font-poppins font-medium text-[40px] sm:text-[42px] lg:text-[36px] text-[#003BE2] leading-none tabular-nums inline-block select-none"
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      0{suffix}
    </span>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="relative w-full py-[72px] lg:py-[120px] bg-white overflow-hidden flex flex-col lg:gap-[140px] gap-[70px]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-[350px] -left-[152px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-80"
          style={{
            background: 'radial-gradient(circle at center, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.28) 23%, rgba(203, 252, 1, 0.08) 50%, transparent 70%)',
          }}
        />

        <div
          className="absolute -top-[350px] left-[60%] lg:left-[811px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.38) 0%, rgba(0, 59, 226, 0.18) 23%, rgba(0, 59, 226, 0.05) 50%, transparent 70%)',
          }}
        />

        <div
          className="absolute top-[48%] -translate-y-1/2 -left-[450px] sm:-left-[550px] w-[1100px] h-[1100px] rounded-full blur-[70px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.20) 25%, rgba(0, 59, 226, 0.06) 50%, transparent 72%)',
          }}
        />

        <div
          className="absolute -bottom-[250px] -left-[180px] sm:-left-[287px] w-[750px] h-[750px] rounded-full blur-[60px] opacity-80"
          style={{
            background: 'radial-gradient(circle at center, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.28) 23%, rgba(203, 252, 1, 0.08) 50%, transparent 70%)',
          }}
        />

        <div
          className="absolute -bottom-[550px] left-[55%] lg:left-[650px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.38) 0%, rgba(0, 59, 226, 0.18) 23%, rgba(0, 59, 226, 0.05) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[00px] lg:gap-[60px]">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] mb-6">
              Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed mb-10 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="w-full flex items-center justify-center lg:justify-start gap-8 sm:gap-10 lg:gap-12 mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[76px] sm:min-w-[90px]">
                <CountUpNumber target={12} suffix="K" duration={1.6} />
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Students
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[76px] sm:min-w-[90px]">
                <CountUpNumber target={70} suffix="+" duration={1.6} />
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Courses
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[76px] sm:min-w-[90px]">
                <CountUpNumber target={16} suffix="" duration={1.6} />
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Creators
                </span>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] lg:max-w-[620px] h-[430px] sm:h-[520px] lg:h-[580px] overflow-visible">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
                className="hidden lg:block absolute top-2 left-0 sm:left-2 z-0 w-[320px] sm:w-[373px]"
              >
                <CourseCard course={FIGMA_COURSE} />
              </motion.div>

              <motion.img
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
                src="/images/Frame (8).png"
                alt=""
                className="hidden lg:block absolute top-6 sm:top-24 right-2 sm:-right-22 w-[120px] sm:w-[200px] object-contain z-22 select-none pointer-events-none"
              />

              <img
                src="/images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="Student with laptop"
                className="absolute bottom-0 left-40 -translate-x-1/2 lg:translate-x-0 lg:bottom-12 lg:left-[3%] w-[450px] sm:w-[420px] lg:w-[580px] max-w-none object-contain z-10 select-none pointer-events-none drop-shadow-2xl"
              />

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
                className="absolute bottom-42 sm:bottom-6 left-[82%] -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:bottom-52 lg:-right-12 z-20 bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-[#F1F5F9] w-[155px] sm:w-[240px]"
              >
                <img
                  src="/images/Frame (8).png"
                  alt=""
                  className="lg:hidden absolute -top-11 -right-4 w-[95px] sm:w-[110px] object-contain z-30 select-none pointer-events-none drop-shadow-md"
                />

                <span className="font-satoshi text-[13px] sm:text-[14px] font-medium text-[#475569] block mb-1">
                  Learning Progress
                </span>
                <span className="font-poppins font-bold text-[34px] sm:text-[40px] text-[#0F172A] leading-none block my-2">
                  55%
                </span>
                <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: 0.4, ease: smoothEase }}
                    style={{ originX: 0 }}
                    className="w-[55%] h-full bg-[#D4FB20] rounded-full" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[620px] h-[550px] sm:h-[580px]">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
                className="absolute top-2 sm:top-4 left-0 sm:left-2 z-0 w-[215px] sm:w-[232px] h-[110px] sm:h-[119px] bg-[#003BE2] rounded-[24px] p-4 sm:p-5 text-white flex flex-col justify-between shadow-[0_16px_36px_rgba(0,59,226,0.35)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-satoshi text-[13px] font-medium text-white/90">
                      Total Revenue
                    </span>
                    <span className="font-satoshi text-[11px] text-white/70">
                      July 1-28
                    </span>
                  </div>
                  <span className="font-poppins font-bold text-[22px] sm:text-[24px] text-white leading-tight block mt-1">
                    $120.29
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.35, ease: smoothEase }}
                    style={{ originX: 0 }}
                    className="w-[68%] h-full bg-[#D4FB20] rounded-full" 
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: 0.18, ease: smoothEase }}
                className="absolute top-[135px] sm:top-[145px] left-0 sm:left-2 z-0 w-[125px] sm:w-[134px] h-[125px] sm:h-[135px] bg-[#003BE2] rounded-[24px] p-4 text-white flex flex-col justify-between shadow-[0_16px_36px_rgba(0,59,226,0.35)]"
              >
                <div>
                  <span className="font-satoshi text-[12px] font-medium text-white/90 block leading-tight">
                    Year to Date
                  </span>
                  <span className="font-satoshi text-[10px] text-white/70 block mt-0.5">
                    2023
                  </span>
                  <span className="font-poppins font-bold text-[16px] sm:text-[18px] text-white leading-tight block mt-1.5">
                    $1,200.38
                  </span>
                </div>
                <div className="bg-[#D4FB20] text-[#0F172A] font-satoshi font-bold text-[10px] px-2 py-0.5 rounded-full w-fit">
                  +12%
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
                src="/images/testimage.png"
                alt=""
                className="absolute top-30 sm:top-18 -right-4 sm:right-28 w-[150px] sm:w-[180px] object-contain z-20 select-none pointer-events-none"
              />

              <img
                src="/images/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="Instructor with headset and tablet"
                className="absolute bottom-0 -left-[30%] sm:-left-[14%] w-[535px] sm:w-[600px] max-w-none object-contain z-10 select-none pointer-events-none drop-shadow-2xl"
              />

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.28, ease: smoothEase }}
                className="absolute bg-white rounded-2xl shadow-[0_16px_36px_-4px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)] z-20 text-left py-3 sm:py-3.5 px-3.5 sm:px-4.5 -bottom-11 sm:bottom-26 right-0 sm:right-[14px] w-max max-w-[95%]"
              >
                <div className="flex flex-col items-start justify-between gap-1 mb-2.5">
                  <span className="font-poppins font-medium text-[14px] sm:text-[16px] text-[#0F172A]">
                    Happy Students
                  </span>
                  <span className="font-satoshi font-medium text-[12px] sm:text-[13px] text-[#64748B] flex items-center gap-1">
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
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left order-1 lg:order-2"
          >
            <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] mb-6">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed mb-8 max-w-[480px]">
              <strong className="font-semibold text-[#0F172A]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="flex flex-col gap-4">
              {BULLET_POINTS.map((point, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease: smoothEase }}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/icon-images/bulleticon.png"
                    alt=""
                    className="w-[20px] h-[20px] object-contain flex-shrink-0"
                  />
                  <span className="font-satoshi font-medium text-[16px] text-[#0F172A]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
