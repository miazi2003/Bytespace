'use client';

import React from 'react';

const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

const MODULE_LIST = [
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
];

const STAR_BREAKDOWN = [
  { percent: '85%', count: '720' },
  { percent: '40%', count: '120' },
  { percent: '10%', count: '21' },
  { percent: '5%', count: '12' },
  { percent: '6%', count: '16' },
];

const USER_REVIEWS = [
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
];

export default function CourseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="lg:col-span-8 w-full lg:w-[725px] max-w-[725px] flex flex-col">
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

      {activeTab === 'about' && (
        <>
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

          <section className="mb-12">
            <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-5">
              Key Points
            </h3>

            <div className="flex flex-col gap-3.5">
              {KEY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
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

      {activeTab === 'lesson' && (
        <div className="flex flex-col">
          <section className="mb-8">
            <h2 className="font-poppins font-semibold text-[22px] sm:text-[24px] text-[#0F172A] mb-3">
              Explore the Modules
            </h2>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
              Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-6">
              Lesson List
            </h3>

            <div className="flex flex-col gap-5 sm:gap-6">
              {MODULE_LIST.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5">
                  <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[24px] bg-[#D4FB20] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[20px] flex-shrink-0">
                      <rect x="1.5" y="1.5" width="18" height="17" rx="2.5" stroke="#0F172A" strokeWidth="2.5" fill="none" />
                      <path d="M19.5 7.5L28.5 3V17L19.5 12.5V7.5Z" fill="#0F172A" />
                    </svg>
                  </div>

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

          <section className="mb-8">
            <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
              Lesson Content
            </h3>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
              Lesson Progress Tracking
            </h3>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed mb-6">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

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

      {activeTab === 'reviews' && (
        <div className="flex flex-col mb-12">
          <section className="mb-6">
            <h2 className="font-poppins font-semibold text-[20px] sm:text-[22px] text-[#0F172A] mb-3">
              What Learners Are Saying
            </h2>
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#64748B] leading-relaxed">
              Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>
          </section>

          <div className="w-full border border-[#E5E7EB] rounded-[24px] p-6 sm:p-8 lg:p-[40px] flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white shadow-sm mb-10">
            <div className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] bg-[#D4FB20] rounded-[24px] flex flex-col items-center justify-center flex-shrink-0 text-center shadow-sm">
              <span className="font-satoshi text-[13px] font-medium text-[#242528]">
                Ratings
              </span>
              <span className="font-poppins font-semibold text-[34px] sm:text-[36px] text-[#242528] leading-none mt-1">
                4.7
              </span>
            </div>

            <div className="flex-1 w-full flex flex-col gap-2.5">
              {STAR_BREAKDOWN.map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="flex-1 h-[8px] bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4FB20] rounded-full"
                      style={{ width: row.percent }}
                    />
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} width="20" height="20" viewBox="0 0 24 24" fill="#4B4C53" className="w-[20px] h-[20px] flex-shrink-0">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>

                  <span className="font-satoshi text-[13px] sm:text-[14px] text-[#242528] min-w-[28px] text-right font-medium flex-shrink-0">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <section>
            <h3 className="font-poppins font-semibold text-[20px] text-[#242528] mb-4">
              Individual Reviews:
            </h3>

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

            <div className="flex flex-col gap-[24px]">
              {USER_REVIEWS.map((rev, rIdx) => (
                <div
                  key={rIdx}
                  className="w-full border border-[#E5E7EB] rounded-[24px] p-6 sm:p-8 lg:p-[40px] bg-white shadow-sm flex flex-col"
                >
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

                  <div className="flex items-center gap-1 my-2">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} width="20" height="20" viewBox="0 0 24 24" fill="#4B4C53" className="w-[20px] h-[20px] flex-shrink-0">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>

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
  );
}
