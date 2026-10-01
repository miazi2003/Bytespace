'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const smoothEase = [0.22, 1, 0.36, 1];

const leftAssetVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 0.95,
    x: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: smoothEase,
    },
  }),
};

const rightAssetVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 0.95,
    x: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: smoothEase,
    },
  }),
};

export default function CreatorCTA() {
  return (
    <section className="relative w-full bg-[#003BE2] bg-grid-pattern overflow-hidden py-[85px]">
      {/* 3D Floating Decorative Assets - Arriving smoothly from Left & Right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Top-Left Lime Squiggle - Arrive from Left */}
        <motion.img
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={leftAssetVariants}
          src="/creatorCtaimage/Mask Group.png"
          alt=""
          className="absolute top-[0px] sm:top-[0px] -left-[0px] sm:-left-[30px] w-[190px] sm:w-[300px] object-contain -rotate-[0deg]"
        />

        {/* Top-Left White Squiggle - Arrive from Left */}
        <motion.img
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={leftAssetVariants}
          src="/creatorCtaimage/Frame (9).png"
          alt=""
          className="absolute top-[15px] sm:top-[25px] left-[12%] sm:left-[10%] w-[80px] sm:w-[170px] object-contain rotate-[5deg] hidden md:block"
        />

        {/* Bottom-Left White Cone - Arrive from Left */}
        <motion.img
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={leftAssetVariants}
          src="/creatorCtaimage/Cone (5).png"
          alt=""
          className="absolute bottom-[60px] -left-[00px] sm:left-[0px] w-[100px] sm:w-[150px] object-contain"
        />

        {/* Bottom-Left Lime Torus Ring - Arrive from Left */}
        <motion.img
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={leftAssetVariants}
          src="/creatorCtaimage/Cone (6).png"
          alt=""
          className="absolute bottom-[0px] sm:bottom-[0px] -left-[10px] sm:left-[45px] w-[190px] sm:w-[320px] object-contain"
        />

        {/* Top-Right Lime Pyramid - Arrive from Right */}
        <motion.img
          custom={0.18}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rightAssetVariants}
          src="/creatorCtaimage/Cone (3).png"
          alt=""
          className="absolute top-[20px] sm:top-[30px] right-[12%] sm:right-[10%] w-[85px] sm:w-[188px] object-contain hidden md:block"
        />

        {/* Top-Right White Cylinder - Arrive from Right */}
        <motion.img
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rightAssetVariants}
          src="/creatorCtaimage/Cone (4).png"
          alt=""
          className="absolute -top-[20px] sm:top-[10px] -right-[20px] sm:-right-[30px] w-[140px] sm:w-[210px] object-contain"
        />

        {/* Bottom-Right Lime 3D Squiggle - Arrive from Right */}
        <motion.img
          custom={0.22}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={rightAssetVariants}
          src="/creatorCtaimage/Frame (11).png"
          alt=""
          className="absolute -bottom-[0px] sm:bottom-[0px] -right-[30px] sm:right-[15px] w-[175px] sm:w-[300px] object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[44px] text-white leading-[1.2] tracking-[-0.01em]">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        <p className="font-satoshi text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-[840px] mx-auto mt-[40px] mb-[40px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          href="/creators"
          className="bg-[#D4FB20] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-satoshi font-medium text-[16px] px-[24px] py-[12px] rounded-full transition-all duration-200 cursor-pointer shadow-sm inline-block"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
