'use client';

import React from 'react';

export default function CourseEnrollmentCard({
  course,
  isEnrolled,
  setIsEnrolled,
}) {
  return (
    <div className="lg:col-span-4 w-full lg:w-[412px] max-w-[412px] lg:min-h-[956px] bg-white rounded-[24px] p-6 sm:p-8 lg:p-[40px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#E5E7EB] flex flex-col justify-between relative z-30 lg:absolute lg:right-0 lg:top-0">
      <div>
        <h3 className="font-poppins font-semibold text-[18px] sm:text-[20px] text-[#0F172A] mb-5">
          112 Lessons (24 hours)
        </h3>

        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center justify-between text-[14px]">
            <div className="flex items-center gap-2.5">
              <span className="font-poppins font-semibold text-[#64748B]">01</span>
              <span className="font-satoshi text-[#0F172A] font-medium text-[16px]">
                Introduction to Digital Assets
              </span>
            </div>
            <span className="font-satoshi font-medium text-[#003BE2] text-[13px] flex-shrink-0">
              12 mins
            </span>
          </div>

          <div className="flex items-center justify-between text-[14px]">
            <div className="flex items-center gap-2.5">
              <span className="font-poppins font-semibold text-[#64748B]">02</span>
              <span className="font-satoshi text-[#0F172A] font-medium text-[16px]">
                Design Principles for Impacts
              </span>
            </div>
            <span className="font-satoshi font-medium text-[#003BE2] text-[13px] flex-shrink-0">
              21 mins
            </span>
          </div>

          <div className="flex items-center justify-between text-[14px]">
            <div className="flex items-center gap-2.5">
              <span className="font-poppins font-semibold text-[#64748B]">03</span>
              <span className="font-satoshi text-[#0F172A] font-medium text-[16px]">
                Advanced Techniques in Digital Creation
              </span>
            </div>
            <span className="font-satoshi font-medium text-[#003BE2] text-[13px] flex-shrink-0">
              16 mins
            </span>
          </div>

          <p className="font-satoshi text-[13px] text-[#82868E] mt-1">
            99 more videos
          </p>
        </div>

        <p className="font-satoshi text-[13px] sm:text-[16px] text-[#64748B] leading-relaxed mt-6 mb-3">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex items-baseline gap-1 my-2">
          <span className="font-poppins font-semibold text-[32px] sm:text-[36px] text-[#003BE2]">
            {course.price || '$25'}
          </span>
          <span className="font-satoshi text-[14px] text-[#82868E]">
            {course.period || '/lifetime'}
          </span>
        </div>

        <button
          onClick={() => setIsEnrolled(true)}
          className="w-full bg-[#D4FB20] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-poppins font-medium text-[16px] rounded-full transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 mt-2 mb-8 px-6 py-3"
        >
          {isEnrolled ? '✓ Enrolled' : 'Enroll Now'}
        </button>

        <div className="flex flex-col gap-3.5">
          <h4 className="font-poppins font-semibold text-[18px] text-[#0F172A] mb-1">
            This course include
          </h4>

          <div className="flex items-center gap-3">
            <img
              src="/courseDetailsIcon/Vector (14).png"
              alt="Learning Resources"
              className="w-[24px] h-[24px] object-contain flex-shrink-0"
            />
            <span className="font-satoshi text-[14px] text-[#475569]">
              Learning Resources
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/courseDetailsIcon/Vector (15).png"
              alt="Quality Lesson Videos"
              className="w-[24px] h-[24px] object-contain flex-shrink-0"
            />
            <span className="font-satoshi text-[14px] text-[#475569]">
              Quality Lesson Videos
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/courseDetailsIcon/Vector (16).png"
              alt="Certificate of Completion"
              className="w-[24px] h-[24px] object-contain flex-shrink-0"
            />
            <span className="font-satoshi text-[14px] text-[#475569]">
              Certificate of Completion
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/courseDetailsIcon/Vector (17).png"
              alt="Private Consultation"
              className="w-[24px] h-[24px] object-contain flex-shrink-0"
            />
            <span className="font-satoshi text-[14px] text-[#475569]">
              Private Consultation
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-6 mt-8">
        <div className="flex items-center gap-3.5 mb-3">
          <img
            src={course.instructorAvatar || '/customerImage/1e078348a54489bfd231d82fe1944770883c8d80.png'}
            alt={course.instructor}
            className="w-[52px] h-[52px] rounded-full object-cover border border-[#E5E7EB] flex-shrink-0"
          />
          <div>
            <h5 className="font-poppins font-semibold text-[16px] text-[#0F172A] leading-tight">
              {course.instructor || 'PurePearl Studio'}
            </h5>
            <p className="font-satoshi text-[13px] text-[#64748B]">
              Professional Creator
            </p>
          </div>
        </div>

        <p className="font-satoshi text-[13px] text-[#64748B] leading-relaxed mb-4">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button
          type="button"
          className="border border-[#CED0D3] hover:border-[#0F172A] rounded-full px-6 py-2 text-[14px] font-satoshi font-medium text-[#0F172A] hover:bg-slate-50 transition-colors w-max cursor-pointer"
        >
          See Full Profile
        </button>
      </div>
    </div>
  );
}
