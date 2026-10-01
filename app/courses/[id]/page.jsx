'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CourseCard from '../../../components/CourseCard';
import { getCourseById, getRelatedCourses } from '../../../data/coursesData';

export default function CourseDetailsPage(props) {
  // Support both props.params (async or direct) and useParams hook
  const routeParams = useParams();
  const rawId = routeParams?.id || (props?.params ? (typeof props.params.then === 'function' ? use(props.params)?.id : props.params?.id) : null);
  
  const course = getCourseById(rawId);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course, 3);

  // Interactive UI states
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState({ 0: true, 1: true });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleModule = (idx) => {
    setExpandedModules((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const scrollToSection = (id, tabKey) => {
    setActiveTab(tabKey);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Top Header / Hero Section: Deep Blue #003BE2 with Grid Pattern */}
      <div className="relative w-full bg-[#003BE2] bg-grid-pattern flex flex-col overflow-hidden pb-12 lg:pb-16">
        <Navbar />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-20">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-2 text-[13px] font-satoshi text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-white/90">{course.category}</span>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-[240px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Hero Left Content */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Category & Level Badges */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-md text-[12px] font-satoshi font-medium border border-white/20">
                  {course.category}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#D5FF00] text-[#0F172A] text-[12px] font-satoshi font-semibold">
                  {course.level}
                </span>
              </div>

              {/* Course Main Title */}
              <h1 className="font-poppins font-bold text-[28px] sm:text-[38px] lg:text-[44px] text-white leading-[1.2] mb-4">
                {course.title}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="font-satoshi text-[16px] sm:text-[18px] text-white/85 leading-relaxed mb-6 max-w-[720px]">
                {course.overview}
              </p>

              {/* Rating & Social Proof Meta */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-[14px] font-satoshi text-white/90 border-t border-white/15 pt-5">
                <div className="flex items-center gap-1.5">
                  <span className="font-poppins font-bold text-[16px] text-[#D5FF00]">{course.rating}</span>
                  <div className="flex items-center text-[#D5FF00]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/70">({course.reviewsCount})</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>{course.enrolledCount}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated {course.lastUpdated}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{course.language}</span>
                </div>
              </div>

              {/* Instructor Capsule in Hero */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/40 shadow-sm"
                />
                <div>
                  <p className="text-[12px] font-satoshi text-white/70">Created by</p>
                  <p className="text-[15px] font-poppins font-semibold text-white">
                    {course.instructor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#E2E8F0] shadow-sm">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-3 no-scrollbar">
            {[
              { id: 'overview-sec', key: 'overview', label: 'Overview' },
              { id: 'learn-sec', key: 'learn', label: "What You'll Learn" },
              { id: 'curriculum-sec', key: 'curriculum', label: 'Curriculum' },
              { id: 'instructor-sec', key: 'instructor', label: 'Instructor' },
              { id: 'reviews-sec', key: 'reviews', label: 'Reviews' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => scrollToSection(tab.id, tab.key)}
                className={`font-satoshi text-[14px] sm:text-[15px] font-medium whitespace-nowrap pb-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'border-[#003BE2] text-[#003BE2] font-semibold'
                    : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Body Container: 2-Column Grid */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Detailed Content (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">

            {/* Video / Visual Course Preview Hero Box */}
            <div className="relative w-full h-[240px] sm:h-[360px] lg:h-[400px] rounded-[24px] overflow-hidden bg-slate-900 border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[12px] font-satoshi font-medium border border-white/20">
                    Preview Mode
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-95 flex items-center justify-center text-[#0F172A] shadow-lg transition-all cursor-pointer group-hover:scale-110"
                    aria-label="Play course preview"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div>
                    <h3 className="text-white font-poppins font-semibold text-[18px] sm:text-[20px]">
                      Preview this course
                    </h3>
                    <p className="text-white/80 font-satoshi text-[13px] sm:text-[14px]">
                      Free sample lesson included ({course.duration})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: What You Will Learn */}
            <section id="learn-sec" className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] text-[#0F172A] mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#003BE2] rounded-full inline-block"></span>
                What you will learn
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EBF0FF] text-[#003BE2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-satoshi text-[15px] text-[#334155] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Course Curriculum */}
            <section id="curriculum-sec" className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] text-[#0F172A] flex items-center gap-2.5">
                    <span className="w-2.5 h-6 bg-[#003BE2] rounded-full inline-block"></span>
                    Course Content
                  </h2>
                  <p className="font-satoshi text-[13px] text-[#64748B] mt-1">
                    {course.curriculum.length} modules • {course.lessons} • {course.duration} total length
                  </p>
                </div>

                <button
                  onClick={() => {
                    const allOpen = Object.keys(expandedModules).length === course.curriculum.length;
                    if (allOpen) {
                      setExpandedModules({});
                    } else {
                      const all = {};
                      course.curriculum.forEach((_, i) => {
                        all[i] = true;
                      });
                      setExpandedModules(all);
                    }
                  }}
                  className="font-satoshi text-[14px] text-[#003BE2] font-semibold hover:underline self-start sm:self-auto cursor-pointer"
                >
                  {Object.keys(expandedModules).length === course.curriculum.length
                    ? 'Collapse all sections'
                    : 'Expand all sections'}
                </button>
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-3">
                {course.curriculum.map((module, mIdx) => {
                  const isOpen = expandedModules[mIdx];
                  return (
                    <div
                      key={mIdx}
                      className="border border-[#E2E8F0] rounded-[16px] overflow-hidden transition-all"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleModule(mIdx)}
                        className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] px-5 py-4 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                          <span className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#0F172A]">
                            {module.moduleTitle}
                          </span>
                        </div>
                        <span className="font-satoshi text-[13px] text-[#64748B] flex-shrink-0">
                          {module.lessons.length} lectures • {module.duration}
                        </span>
                      </button>

                      {/* Accordion Body: Lessons */}
                      {isOpen && (
                        <div className="bg-white divide-y divide-[#F1F5F9] px-5 py-2">
                          {module.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="py-3 flex items-center justify-between gap-3 text-[14px]"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center flex-shrink-0 text-[11px] font-medium">
                                  {lIdx + 1}
                                </div>
                                <span className="font-satoshi text-[#1E293B] font-medium">
                                  {lesson.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 flex-shrink-0">
                                {lesson.isPreview ? (
                                  <button
                                    onClick={() => setIsVideoModalOpen(true)}
                                    className="text-[12px] font-satoshi font-semibold text-[#003BE2] hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Preview
                                  </button>
                                ) : (
                                  <svg className="w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                  </svg>
                                )}
                                <span className="font-satoshi text-[12px] text-[#64748B]">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section: Requirements */}
            <section className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] text-[#0F172A] mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#003BE2] rounded-full inline-block"></span>
                Requirements & Prerequisites
              </h2>
              <ul className="list-disc list-inside space-y-2.5 font-satoshi text-[15px] text-[#334155] marker:text-[#003BE2]">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Instructor Profile */}
            <section id="instructor-sec" className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] text-[#0F172A] mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#003BE2] rounded-full inline-block"></span>
                Instructor
              </h2>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#003BE2]/20 shadow-md flex-shrink-0"
                />
                <div>
                  <h3 className="font-poppins font-bold text-[20px] text-[#0F172A]">
                    {course.instructor}
                  </h3>
                  <p className="font-satoshi text-[14px] text-[#003BE2] font-semibold mt-0.5">
                    {course.instructorRole}
                  </p>
                  <div className="flex items-center gap-4 mt-2 font-satoshi text-[13px] text-[#64748B]">
                    <span className="flex items-center gap-1 font-medium text-[#0F172A]">
                      ⭐ {course.rating} Rating
                    </span>
                    <span>•</span>
                    <span>{course.enrolledCount} Students</span>
                    <span>•</span>
                    <span>12 Courses</span>
                  </div>
                </div>
              </div>

              <p className="font-satoshi text-[15px] text-[#475569] leading-relaxed">
                {course.instructorBio}
              </p>
            </section>

            {/* Section: Reviews & Feedback */}
            <section id="reviews-sec" className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] text-[#0F172A] mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#003BE2] rounded-full inline-block"></span>
                Student Reviews
              </h2>

              {/* Review Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Sarah Jenkins',
                    role: 'Junior UI Designer',
                    avatar: '/customerImage/5824acacb3b76175bc84084ec18597109498f96d.png',
                    rating: 5,
                    comment: 'This course completely bridged the gap for me. The auto-layout and design systems modules were explained better than any bootcamp I have taken!',
                  },
                  {
                    name: 'Alexandre Dubois',
                    role: 'Product Manager',
                    avatar: '/customerImage/7fdccc783264eedc4fb989984eecbc4058a219f2.png',
                    rating: 5,
                    comment: 'Crisp, actionable, and straight to the point. The exercise files and real-world workflows gave me instant confidence to collaborate with my design team.',
                  },
                ].map((rev, i) => (
                  <div key={i} className="p-5 rounded-[18px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                    <p className="font-satoshi text-[14px] text-[#334155] italic mb-4 leading-relaxed">
                      "{rev.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover bg-slate-200" />
                      <div>
                        <p className="font-poppins font-semibold text-[14px] text-[#0F172A]">{rev.name}</p>
                        <p className="font-satoshi text-[12px] text-[#64748B]">{rev.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Enrollment Box (4 cols) */}
          <div className="lg:col-span-4 sticky top-20 z-20">
            <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
              
              {/* Mini Thumbnail */}
              <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden mb-6 bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#D5FF00] text-[#0F172A] px-3 py-1 rounded-full text-[12px] font-poppins font-bold shadow-sm">
                  Limited Offer
                </span>
              </div>

              {/* Pricing Section */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-poppins font-bold text-[36px] text-[#003BE2]">
                  {course.price}
                </span>
                <span className="font-satoshi text-[18px] text-[#94A3B8] line-through">
                  {course.originalPrice}
                </span>
                <span className="font-satoshi text-[13px] font-semibold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full">
                  70% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  onClick={() => {
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 3000);
                  }}
                  className="w-full h-[52px] bg-[#D5FF00] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-poppins font-semibold text-[16px] rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {addedToCart ? (
                    <>
                      <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      Enrolled Successfully!
                    </>
                  ) : (
                    'Enroll Now'
                  )}
                </button>

                <button
                  onClick={() => {
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 3000);
                  }}
                  className="w-full h-[48px] bg-[#003BE2] hover:bg-[#0030B8] active:scale-[0.98] text-white font-satoshi font-semibold text-[15px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to Cart
                </button>
              </div>

              {/* 30-day guarantee */}
              <div className="flex items-center justify-center gap-2 text-center text-[13px] font-satoshi text-[#64748B] mb-6">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>30-Day Money-Back Guarantee</span>
              </div>

              {/* Course Checklist */}
              <div className="border-t border-[#E2E8F0] pt-6">
                <h4 className="font-poppins font-semibold text-[15px] text-[#0F172A] mb-3">
                  This course includes:
                </h4>
                <ul className="space-y-3 font-satoshi text-[13px] text-[#475569]">
                  {course.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-[#003BE2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wishlist and Share */}
              <div className="flex items-center justify-between border-t border-[#E2E8F0] mt-6 pt-5">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center gap-1.5 font-satoshi text-[13px] font-semibold text-[#475569] hover:text-[#003BE2] transition-colors cursor-pointer"
                >
                  <svg
                    className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-current' : 'text-[#64748B]'}`}
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? 'currentColor' : 'none'}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Course URL copied to clipboard!');
                    }
                  }}
                  className="flex items-center gap-1.5 font-satoshi text-[13px] font-semibold text-[#475569] hover:text-[#003BE2] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="mt-16 sm:mt-20 pt-12 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-poppins font-bold text-[26px] sm:text-[30px] text-[#0F172A]">
                  You Might Also Like
                </h2>
                <p className="font-satoshi text-[15px] text-[#64748B] mt-1">
                  Explore top-rated courses in {course.category}
                </p>
              </div>
              <Link
                href="/courses"
                className="font-satoshi text-[14px] sm:text-[15px] font-semibold text-[#003BE2] hover:underline flex items-center gap-1"
              >
                View all courses →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedCourses.map((relCourse) => (
                <div key={relCourse.id} className="flex justify-center">
                  <CourseCard course={relCourse} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[800px] bg-black rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10">
              <h3 className="font-poppins font-semibold text-white text-[16px]">
                Preview: {course.title}
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center text-center p-6">
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#D5FF00] flex items-center justify-center text-[#0F172A] mb-4 animate-pulse">
                  <svg className="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="font-poppins font-bold text-white text-[20px] mb-2">
                  Interactive Course Demo
                </h4>
                <p className="font-satoshi text-white/80 text-[14px] max-w-[460px] mb-6">
                  Experience full high-definition video lessons with downloadable assets upon enrollment.
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 3000);
                  }}
                  className="px-8 py-3 bg-[#D5FF00] text-[#0F172A] font-poppins font-semibold text-[14px] rounded-full hover:bg-[#C4EC00] transition-colors cursor-pointer"
                >
                  Enroll Now ({course.price})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
