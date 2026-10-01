'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getCourseById } from '../../../data/coursesData';

export default function CourseDetailsPage(props) {
  const routeParams = useParams();
  const rawId =
    routeParams?.id ||
    (props?.params
      ? typeof props.params.then === 'function'
        ? use(props.params)?.id
        : props.params?.id
      : null);

  const course = getCourseById(rawId);

  if (!course) {
    notFound();
  }

  // Interactive UI states
  const [activeTab, setActiveTab] = useState('about');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top Hero Section: Background #003BE2 with Grid Pattern, Tight bottom spacing */}
      <section className="relative w-full bg-[#003BE2] bg-grid-pattern pb-8 lg:pb-10 flex flex-col justify-start">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content Container: Max Width 1240px */}
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 relative z-20">
          
          {/* Header Row: Title & Share Button */}
          <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
            <div className="flex-1 max-w-[880px]">
              {/* Main Heading: 36px font-semibold */}
              <h1 className="font-poppins font-semibold text-[26px] sm:text-[32px] lg:text-[36px] text-white leading-[1.2]">
                {course.title}: A Comprehensive Guide
              </h1>

              {/* Description: 20px with 10px gap between heading & description */}
              <p className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] text-white/95 leading-relaxed mt-[10px]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              {/* Instructor Line */}
              <p className="font-satoshi text-[15px] text-white mt-2">
                <span className="text-white/80">by </span>
                <span className="text-[#D5FF00] font-medium">{course.instructor}</span>
              </p>

              {/* 3 Information Capsules: Padding 8px 24px, Radius 24px */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5">
                {/* Intermediate / Level Capsule */}
                <div className="bg-white text-[#0F172A] font-satoshi font-medium text-[14px] px-[24px] py-[8px] rounded-[24px] flex items-center gap-2 shadow-sm">
                  <img
                    src="/courseDetailsIcon/Vector (10).png"
                    alt="Level"
                    className="w-[15px] h-[16px] object-contain flex-shrink-0"
                  />
                  <span>{course.level || 'Intermediate'}</span>
                </div>

                {/* Rating Capsule */}
                <div className="bg-white text-[#0F172A] font-satoshi font-medium text-[14px] px-[24px] py-[8px] rounded-[24px] flex items-center gap-2 shadow-sm">
                  <img
                    src="/courseDetailsIcon/Vector (11).png"
                    alt="Rating"
                    className="w-[16px] h-[16px] object-contain flex-shrink-0"
                  />
                  <span>{course.rating} ({course.comments || '172 reviews'})</span>
                </div>

                {/* Students Count Capsule */}
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

            {/* Share Button (Top Right in Hero) */}
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

          {/* Main Visual Row: Video Block (Left 720px x 479px) & Enroll Block (Right 412px x 956px) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:mt-10 relative">
            
            {/* Left Video Block: Width 720px on desktop, Height 479px, Radius 24px */}
            <div className="lg:col-span-8 w-full lg:w-[720px] max-w-[720px] h-[260px] sm:h-[380px] lg:h-[479px] rounded-[24px] overflow-hidden bg-slate-900 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] group flex-shrink-0">
              <img
                src="/courseDetailsIcon/71d7929ee0ecb2198c9955a8e842f4991dcb4655.jpg"
                alt="Course Video Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = course.image;
                }}
              />
              
              {/* Play Button Overlay: Squircle glassmorphic container matching reference image */}
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

            {/* Right Enroll Block: Width 412px on desktop, Min-Height 956px, Padding 40px, Radius 24px */}
            {/* Sits right at the top of the video block and extends down across the blue/white threshold */}
            <div className="lg:col-span-4 w-full lg:w-[412px] max-w-[412px] lg:min-h-[956px] bg-white rounded-[24px] p-6 sm:p-8 lg:p-[40px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#E5E7EB] flex flex-col justify-between relative z-30 lg:absolute lg:right-0 lg:top-0">
              
              <div>
                {/* Lessons Header */}
                <h3 className="font-poppins font-semibold text-[18px] sm:text-[20px] text-[#0F172A] mb-5">
                  112 Lessons (24 hours)
                </h3>

                {/* Lesson Preview Rows */}
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

                {/* Callout Message */}
                <p className="font-satoshi text-[13px] sm:text-[16px] text-[#64748B] leading-relaxed mt-6 mb-3">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-poppins font-semibold text-[32px] sm:text-[36px] text-[#003BE2]">
                    {course.price || '$25'}
                  </span>
                  <span className="font-satoshi text-[14px] text-[#82868E]">
                    {course.period || '/lifetime'}
                  </span>
                </div>

                {/* Enroll Now Button */}
                <button
                  onClick={() => {
                    setIsEnrolled(true);
                    setTimeout(() => setIsEnrolled(false), 3000);
                  }}
                  className="w-full bg-[#D4FB20] hover:bg-[#C4EC00] active:scale-[0.98] text-[#0F172A] font-poppins font-medium text-[16px] rounded-full transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 mt-2 mb-8 px-6 py-3"
                >
                  {isEnrolled ? 'Enrolled Successfully!' : 'Enroll Now'}
                </button>

                {/* This course include Section with exact 24px vector icons */}
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

              {/* Bottom Profile Section */}
              <div className="border-t border-[#E5E7EB] pt-6 mt-8">
                <div className="flex items-center gap-3.5 mb-3">
                  {/* Round Avatar: 52px */}
                  <img
                    src={course.instructorAvatar || '/customerImage/1e078348a54489bfd231d82fe1944770883c8d80.png'}
                    alt={course.instructor}
                    className="w-[52px] h-[52px] rounded-full object-cover border border-[#E5E7EB] flex-shrink-0"
                  />
                  <div>
                    <h5 className="font-poppins font-semibold text-[16px] text-[#0F172A] leading-tight">
                      PurePearl Studio
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

          </div>

        </div>
      </section>

      {/* Main Content Area Below Hero: White background */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Content Container: Width 725px */}
          <div className="lg:col-span-8 w-full lg:w-[725px] max-w-[725px] flex flex-col">
            
            {/* Tab Buttons: Padding 12px 16px, Rounded-full */}
            <div className="flex items-center gap-2 sm:gap-3 mb-8">
              <button
                onClick={() => setActiveTab('about')}
                className={`font-satoshi text-[14px] font-medium px-[16px] py-[12px] rounded-full transition-all cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#64748B] hover:bg-[#EAEAEA]'
                }`}
              >
                About
              </button>

              <button
                onClick={() => setActiveTab('lesson')}
                className={`font-satoshi text-[14px] font-medium px-[16px] py-[12px] rounded-full transition-all cursor-pointer ${
                  activeTab === 'lesson'
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#64748B] hover:bg-[#EAEAEA]'
                }`}
              >
                Lesson
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`font-satoshi text-[14px] font-medium px-[16px] py-[12px] rounded-full transition-all cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'bg-[#D4FB20] text-[#0F172A]'
                    : 'bg-[#F5F5F6] text-[#64748B] hover:bg-[#EAEAEA]'
                }`}
              >
                Reviews
              </button>
            </div>

            {/* TAB CONTENT: ABOUT */}
            {activeTab === 'about' && (
              <>
                {/* Description Section */}
                <section className="mb-10">
                  <h2 className="font-poppins font-semibold text-[22px] sm:text-[24px] text-[#0F172A] mb-4">
                    Description
                  </h2>

                  <div className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7] space-y-4">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>

                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>

                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </section>

                {/* Sneak Peak Section with 4 Rounded Visual Cards */}
                <section className="mb-12">
                  <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-5">
                    Sneak Peak
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                    <div className="h-[110px] sm:h-[120px] rounded-[16px] overflow-hidden shadow-sm bg-slate-100">
                      <img
                        src="/courseDetailsIcon/0c1762672f5c64aa67de3991c2ac4aa729328623.jpg"
                        alt="Sneak peak 1"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="h-[110px] sm:h-[120px] rounded-[16px] overflow-hidden shadow-sm bg-slate-100">
                      <img
                        src="/courseDetailsIcon/2e1b62a2460ffba94cc633550f3a06e03b29b432.jpg"
                        alt="Sneak peak 2"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="h-[110px] sm:h-[120px] rounded-[16px] overflow-hidden shadow-sm bg-slate-100">
                      <img
                        src="/courseDetailsIcon/a7c9406fd05787fc6c03edf5db05f212b96366a6.jpg"
                        alt="Sneak peak 3"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="h-[110px] sm:h-[120px] rounded-[16px] overflow-hidden shadow-sm bg-slate-100">
                      <img
                        src="/courseDetailsIcon/d443b5217bfd460249d4ac0712aa129bc29a8919.jpg"
                        alt="Sneak peak 4"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </section>

                {/* Key Points Section: 8 Items with Blue Checkmark Icons */}
                <section className="mb-12">
                  <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-5">
                    Key Points
                  </h3>

                  <div className="flex flex-col gap-3.5">
                    {[
                      'Foundational Concepts',
                      'Design Principles Mastery',
                      'Advanced Techniques in Digital Creation',
                      'Project Showcase and Critique',
                      'Optimizing for Various Platforms',
                      'Digital Asset Management Best Practices',
                      'Monetization Strategies',
                      'Capstone Project: Building Your Portfolio',
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {/* Blue Round Checkmark */}
                        <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-satoshi text-[15px] sm:text-[16px] text-[#334155]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* TAB CONTENT: LESSON */}
            {activeTab === 'lesson' && (
              <div className="flex flex-col">
                {/* Explore the Modules Header */}
                <section className="mb-8">
                  <h2 className="font-poppins font-semibold text-[22px] sm:text-[24px] text-[#0F172A] mb-3">
                    Explore the Modules
                  </h2>
                  <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </section>

                {/* Lesson List with Lime #D4FB20 Video Icons & 24px Radius */}
                <section className="mb-10">
                  <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-6">
                    Lesson List
                  </h3>

                  <div className="flex flex-col gap-5 sm:gap-6">
                    {[
                      {
                        title: 'Module 1: Introduction to Digital Assets',
                        desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                      },
                      {
                        title: 'Module 2: Design Principles for Impact',
                        desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                      },
                      {
                        title: 'Module 4: User-Centric Design Strategies',
                        desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                      },
                      {
                        title: 'Module 5: Interactive Media and Engagement',
                        desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                      },
                      {
                        title: 'Module 6: Project Showcase and Critique',
                        desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                      },
                      {
                        title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                        desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                      },
                    ].map((mod, idx) => (
                      <div key={idx} className="flex items-start gap-4 sm:gap-5">
                        {/* Video icon container: bg #D4FB20, radius 24px */}
                        <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[24px] bg-[#D4FB20] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[20px] flex-shrink-0">
                            <rect x="1.5" y="1.5" width="18" height="17" rx="2.5" stroke="#0F172A" strokeWidth="2.5" fill="none" />
                            <path d="M19.5 7.5L28.5 3V17L19.5 12.5V7.5Z" fill="#0F172A" />
                          </svg>
                        </div>

                        {/* Module Text Info */}
                        <div className="flex-1 pt-0.5">
                          <h4 className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#0F172A] leading-snug">
                            {mod.title}
                          </h4>
                          <p className="font-satoshi text-[14px] text-[#64748B] leading-relaxed mt-1">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lesson Content Section */}
                <section className="mb-8">
                  <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
                    Lesson Content
                  </h3>
                  <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </section>

                {/* Lesson Progress Tracking Section */}
                <section className="mb-12">
                  <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
                    Lesson Progress Tracking
                  </h3>
                  <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed mb-6">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  {/* Progress Card */}
                  <div className="w-full border border-[#E5E7EB] rounded-[24px] p-6 sm:p-7 bg-white shadow-sm">
                    <p className="font-satoshi text-[14px] text-[#0F172A] font-medium">
                      Learning Progress
                    </p>
                    <p className="font-poppins font-bold text-[36px] text-[#0F172A] leading-none my-2">
                      55%
                    </p>
                    <div className="w-full h-[7px] bg-[#E2E8F0] rounded-full overflow-hidden mt-3">
                      <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* TAB CONTENT: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="flex flex-col mb-12">
                {/* What Learners Are Saying Header */}
                <section className="mb-6">
                  <h2 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
                    What Learners Are Saying
                  </h2>
                  <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </section>

                {/* Overall Ratings Breakdown Card: Padding 40px, Radius 24px */}
                <div className="w-full border border-[#E5E7EB] rounded-[24px] p-6 sm:p-8 lg:p-[40px] flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white shadow-sm mb-10">
                  {/* Left Lime Rating Box */}
                  <div className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] bg-[#D4FB20] rounded-[24px] flex flex-col items-center justify-center flex-shrink-0 text-center shadow-sm">
                    <span className="font-satoshi text-[13px] font-medium text-[#242528]">
                      Ratings
                    </span>
                    <span className="font-poppins font-semibold text-[34px] sm:text-[36px] text-[#242528] leading-none mt-1">
                      4.7
                    </span>
                  </div>

                  {/* Right 5-Row Star Breakdown */}
                  <div className="flex-1 w-full flex flex-col gap-2.5">
                    {[
                      { percent: '85%', count: '720' },
                      { percent: '40%', count: '120' },
                      { percent: '10%', count: '21' },
                      { percent: '5%', count: '12' },
                      { percent: '6%', count: '16' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4 w-full">
                        {/* Progress Bar with Lime Fill */}
                        <div className="flex-1 h-[8px] bg-[#E2E8F0] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#D4FB20] rounded-full"
                            style={{ width: row.percent }}
                          />
                        </div>

                        {/* 5 Stars: Color #4B4C53, Size 20px x 20px */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {[...Array(5)].map((_, sIdx) => (
                            <svg key={sIdx} width="20" height="20" viewBox="0 0 24 24" fill="#4B4C53" className="w-[20px] h-[20px] flex-shrink-0">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          ))}
                        </div>

                        {/* Count: Color #242528 */}
                        <span className="font-satoshi text-[13px] sm:text-[14px] text-[#242528] min-w-[28px] text-right font-medium flex-shrink-0">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Section */}
                <section>
                  <h3 className="font-poppins font-semibold text-[20px] text-[#242528] mb-4">
                    Individual Reviews:
                  </h3>

                  {/* Rating Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
                    {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((pill, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        className={`font-satoshi text-[14px] px-4 py-2 rounded-full transition-all cursor-pointer ${
                          pIdx === 0
                            ? 'bg-[#D4FB20] text-[#242528] font-medium shadow-sm'
                            : 'bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEA]'
                        }`}
                      >
                        {pill}
                      </button>
                    ))}
                  </div>

                  {/* Review Cards List: Padding 40px, Gap 24px, Radius 24px */}
                  <div className="flex flex-col gap-[24px]">
                    {[
                      {
                        name: 'PurePearl Studio',
                        role: 'UI/UX Designer',
                        avatar: '/reviewimages/efb6f62056dfdd8faea9ed52a81fbdcd844baa28.png',
                        time: 'a year ago',
                        comment: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
                      },
                      {
                        name: 'Albert Flores',
                        role: 'UI/UX Designer',
                        avatar: '/reviewimages/13d1f8e83dbc0f34bfd2aed999007fa6b98dad04.png',
                        time: 'a year ago',
                        comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
                      },
                      {
                        name: 'Cody Fisher',
                        role: 'UI/UX Designer',
                        avatar: '/reviewimages/63c4be83222c85e6c852819bc5d4b24a87a87fb6 (1).png',
                        time: 'a year ago',
                        comment: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
                      },
                      {
                        name: 'Brooklyn Simmons',
                        role: 'UI/UX Designer',
                        avatar: '/reviewimages/9ef8cb329b949267cc8214b6727067c4a13af4b4 (1).png',
                        time: 'a year ago',
                        comment: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
                      },
                    ].map((rev, rIdx) => (
                      <div
                        key={rIdx}
                        className="w-full border border-[#E5E7EB] rounded-[24px] p-6 sm:p-8 lg:p-[40px] bg-white shadow-sm flex flex-col"
                      >
                        {/* Header: Avatar, Name, Role & Timestamp */}
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3.5">
                            <img
                              src={rev.avatar}
                              alt={rev.name}
                              className="w-[48px] h-[48px] rounded-full object-cover border border-[#E5E7EB] flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-poppins font-semibold text-[16px] text-[#242528] leading-tight">
                                {rev.name}
                              </h4>
                              <p className="font-satoshi text-[13px] text-[#64748B]">
                                {rev.role}
                              </p>
                            </div>
                          </div>

                          <span className="font-satoshi text-[13px] text-[#82868E] flex-shrink-0">
                            {rev.time}
                          </span>
                        </div>

                        {/* 5 Stars Row: Color #4B4C53, Size 20px x 20px */}
                        <div className="flex items-center gap-1 my-2">
                          {[...Array(5)].map((_, sIdx) => (
                            <svg key={sIdx} width="20" height="20" viewBox="0 0 24 24" fill="#4B4C53" className="w-[20px] h-[20px] flex-shrink-0">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Content */}
                        <p className="font-satoshi text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mt-2">
                          &quot;{rev.comment}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

          </div>

          {/* Spacer Column on Desktop to balance the layout alongside Enroll Card */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </main>

      {/* Video Modal Preview */}
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
                src="/courseDetailsIcon/71d7929ee0ecb2198c9955a8e842f4991dcb4655.jpg"
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#D5FF00] flex items-center justify-center text-[#0F172A] mb-4">
                  <svg className="w-8 h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="font-poppins font-bold text-white text-[20px] mb-2">
                  Sample Lesson Preview
                </h4>
                <p className="font-satoshi text-white/80 text-[14px] max-w-[460px] mb-6">
                  Experience full HD lesson streaming with exercise assets upon enrollment.
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    setIsEnrolled(true);
                    setTimeout(() => setIsEnrolled(false), 3000);
                  }}
                  className="px-8 py-3 bg-[#D5FF00] text-[#0F172A] font-poppins font-semibold text-[14px] rounded-full hover:bg-[#C4EC00] transition-colors cursor-pointer"
                >
                  Enroll Now ({course.price || '$25'})
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
