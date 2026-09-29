import React from 'react';

export default function CourseCard({ course }) {
  const {
    image,
    lessons = '17 Lessons',
    duration = '2 hours 16 mins',
    comments = '59 Comments',
    title,
    instructor = 'purepearl studio',
    rating = '4.5',
    level = 'Beginner',
    price = '$25',
    period = '/lifetime',
    avatars = [
      '/customerImage/1e078348a54489bfd231d82fe1944770883c8d80.png',
      '/customerImage/5824acacb3b76175bc84084ec18597109498f96d.png',
      '/customerImage/7fdccc783264eedc4fb989984eecbc4058a219f2.png',
      '/customerImage/83fb3e04056cc892636460bee5791aa3f243854c.png',
    ],
    studentCount = '26+',
  } = course;

  return (
    <div className="w-full max-w-[373px] h-[384px] bg-white rounded-[24px] border border-[#E5E7EB] p-4 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div>
        <div className="relative w-full h-[165px] rounded-[12px] overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-[12px]">
            <span className="bg-white/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-satoshi font-medium text-[#1E293B]">
              {lessons}
            </span>
            <span className="bg-white/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-satoshi font-medium text-[#1E293B]">
              {duration}
            </span>
            <span className="bg-white/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-satoshi font-medium text-[#1E293B]">
              {comments}
            </span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-poppins font-semibold text-[20px] text-[#0F172A] leading-tight truncate">
              {title}
            </h3>
            <span className="flex items-center gap-1 font-satoshi font-medium text-[14px] text-[#64748B] flex-shrink-0">
              {rating}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#CED0D3" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
          </div>
          <p className="font-satoshi text-[13px] font-medium mt-1">
            <span className="text-[#82868E]">by </span>
            <span className="text-[#003BE2]">{instructor}</span>
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] rounded-full text-[12px] font-satoshi font-medium text-[#475569] flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="14" width="3.5" height="7" rx="1" />
              <rect x="9.5" y="9" width="3.5" height="12" rx="1" />
              <rect x="16" y="4" width="3.5" height="17" rx="1" />
            </svg>
            <span>{level}</span>
          </div>

          <div className="flex items-center flex-shrink-0">
            {avatars.map((av, idx) => (
              <img
                key={idx}
                src={av}
                alt="Student"
                className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-slate-200 -ml-2 first:ml-0 flex-shrink-0"
              />
            ))}
            <div className="w-[32px] h-[32px] rounded-full bg-[#D4FB20] border-2 border-white -ml-2 flex items-center justify-center font-poppins font-bold text-[11px] text-[#0F172A] flex-shrink-0">
              {studentCount}
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-0.5 mt-3 pt-1">
          <span className="font-poppins font-bold text-[20px] text-[#003BE2]">
            {price}
          </span>
          <span className="font-satoshi text-[13px] text-[#82868E]">
            {period}
          </span>
        </div>
      </div>
    </div>
  );
}
