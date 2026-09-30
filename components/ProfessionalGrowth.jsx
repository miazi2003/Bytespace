import React from 'react';
import CourseCard from './CourseCard';

const FIGMA_COURSE = {
  id: 1,
  title: 'Learn Figma from Basic',
  image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  instructor: 'purepearl studio',
  rating: '4.5',
  level: 'Beginner',
  price: '$25',
  period: '/lifetime',
  studentCount: '26+',
};

export default function ProfessionalGrowth() {
  return (
    <section className="relative w-full py-[72px] lg:py-[120px] bg-white overflow-hidden">
      {/* Background Radial Gradient Ellipses - Smooth & vibrant ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Left Lime Radial Gradient (Ellipse 11) */}
        <div
          className="absolute -top-[466px] -left-[152px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-80"
          style={{
            background: 'radial-gradient(circle at center, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.28) 23%, rgba(203, 252, 1, 0.08) 50%, transparent 70%)',
          }}
        />
        {/* Top-Right Blue Radial Gradient (Ellipse 10) */}
        <div
          className="absolute -top-[458px] left-[60%] lg:left-[811px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.38) 0%, rgba(0, 59, 226, 0.18) 23%, rgba(0, 59, 226, 0.05) 50%, transparent 70%)',
          }}
        />
        {/* Bottom-Left Blue Radial Gradient (Connecting between sections, half out to left) */}
        <div
          className="absolute -bottom-[450px] -left-[400px] sm:-left-[550px] w-[1100px] h-[1100px] rounded-full blur-[70px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.20) 25%, rgba(0, 59, 226, 0.06) 50%, transparent 72%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
          {/* Left Text & Stats Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] mb-6">
              Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed mb-10 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Counter Row */}
            <div className="w-full flex items-center justify-center lg:justify-start gap-8 sm:gap-10 lg:gap-12 mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-poppins font-medium text-[40px] sm:text-[42px] lg:text-[36px] text-[#003BE2] leading-none block">
                  12K
                </span>
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Students
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-poppins font-medium text-[40px] sm:text-[42px] lg:text-[36px] text-[#003BE2] leading-none block">
                  70+
                </span>
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Courses
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="font-poppins font-medium text-[40px] sm:text-[42px] lg:text-[36px] text-[#003BE2] leading-none block">
                  16
                </span>
                <span className="font-satoshi text-[15px] sm:text-[16px] lg:text-[14px] text-[#82868E] mt-1.5 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Composite Graphic Column */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] lg:max-w-[620px] h-[480px] sm:h-[520px] lg:h-[580px] overflow-visible">
              {/* Background Course Card (Desktop Only - hidden on mobile) */}
              <div className="hidden lg:block absolute top-2 left-0 sm:left-2 z-0 w-[320px] sm:w-[373px]">
                <CourseCard course={FIGMA_COURSE} />
              </div>

              {/* Desktop 3D Lime Doodle (Frame (8).png) */}
              <img
                src="/images/Frame (8).png"
                alt=""
                className="hidden lg:block absolute top-6 sm:top-29 right-6 sm:-right-16 w-[150px] sm:w-[200px] object-contain z-22 select-none pointer-events-none"
              />

              {/* Man Student Image (Large and Centered on Mobile) */}
              <img
                src="/images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="Student with laptop"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[3%] w-[330px] sm:w-[420px] lg:w-[580px] max-w-none object-contain z-10 select-none pointer-events-none drop-shadow-2xl"
              />

              {/* Floating Learning Progress Card (Foreground on top of laptop with Doodle on Mobile) */}
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:bottom-52 lg:-right-4 z-20 bg-white rounded-[16px] p-4 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-[#F1F5F9] w-[215px] sm:w-[230px]">
                {/* Mobile Doodle: on top of the 55% card */}
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
                  <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
