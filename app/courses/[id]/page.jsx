'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CourseEnrollmentCard from '../../../components/courses/CourseEnrollmentCard';
import CourseTabs from '../../../components/courses/CourseTabs';
import CourseVideoModal from '../../../components/courses/CourseVideoModal';
import { getCourseById } from '../../../data/courses';

export default function CourseDetailsPage() {
  const routeParams = useParams();
  const course = getCourseById(routeParams?.id);

  if (!course) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState('about');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2500);
      } catch {
        setCopiedShare(false);
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <section className="relative w-full bg-[#003BE2] bg-grid-pattern pb-8 lg:pb-10 flex flex-col justify-start">
        <Navbar />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 relative z-20">
          <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
            <div className="flex-1 max-w-[880px]">
              <h1 className="font-poppins font-semibold text-[26px] sm:text-[32px] lg:text-[36px] text-white leading-[1.2]">
                {course.title}: A Comprehensive Guide
              </h1>

              <p className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] text-white/95 leading-relaxed mt-[10px]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="font-satoshi text-[15px] text-white mt-2">
                <span className="text-white/80">by </span>
                <span className="text-[#D5FF00] font-medium">{course.instructor}</span>
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5">
                <div className="bg-white text-[#0F172A] font-satoshi font-medium text-[14px] px-[24px] py-[8px] rounded-[24px] flex items-center gap-2 shadow-sm">
                  <img
                    src="/courseDetailsIcon/Vector (10).png"
                    alt="Level"
                    className="w-[15px] h-[16px] object-contain flex-shrink-0"
                  />
                  <span>{course.level || 'Intermediate'}</span>
                </div>

                <div className="bg-white text-[#0F172A] font-satoshi font-medium text-[14px] px-[24px] py-[8px] rounded-[24px] flex items-center gap-2 shadow-sm">
                  <img
                    src="/courseDetailsIcon/Vector (11).png"
                    alt="Rating"
                    className="w-[16px] h-[16px] object-contain flex-shrink-0"
                  />
                  <span>{course.rating} ({course.comments || '172 reviews'})</span>
                </div>

                <div className="bg-white text-[#0F172A] font-satoshi font-medium text-[14px] px-[24px] py-[8px] rounded-[24px] flex items-center gap-2 shadow-sm">
                  <img
                    src="/courseDetailsIcon/Vector (12).png"
                    alt="Students"
                    className="w-[22px] h-[16px] object-contain flex-shrink-0"
                  />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="self-start md:self-auto bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-95 text-[#0F172A] font-satoshi font-medium text-[14px] px-5 py-2 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-sm flex-shrink-0"
              aria-label="Share Course"
            >
              <img
                src="/courseDetailsIcon/Vector (13).png"
                alt="Share"
                className="w-[18px] h-[18px] object-contain flex-shrink-0"
              />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:mt-10 relative">
            <div className="lg:col-span-8 w-full lg:w-[720px] max-w-[720px] h-[260px] sm:h-[380px] lg:h-[479px] rounded-[24px] overflow-hidden bg-slate-900 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] group flex-shrink-0">
              <img
                src="/courseDetailsIcon/71d7929ee0ecb2198c9955a8e842f4991dcb4655.jpg"
                alt="Course Video Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = course.image;
                }}
              />

              <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-4">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-[82px] h-[82px] sm:w-[96px] sm:h-[96px] rounded-[24px] sm:rounded-[28px] bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play Video"
                >
                  <img
                    src="/courseDetailsIcon/Vector (9).png"
                    alt="Play"
                    className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain drop-shadow"
                  />
                </button>
              </div>
            </div>

            <CourseEnrollmentCard
              course={course}
              isEnrolled={isEnrolled}
              setIsEnrolled={setIsEnrolled}
            />
          </div>
        </div>
      </section>

      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <CourseTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </main>

      <CourseVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        course={course}
        onEnroll={() => {
          setIsEnrolled(true);
          setTimeout(() => setIsEnrolled(false), 3000);
        }}
      />

      <Footer />
    </div>
  );
}
