import React from 'react';

const BULLET_POINTS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const STUDENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces',
];

export default function CourseCreation() {
  return (
    <section className="relative w-full py-[120px] bg-white overflow-hidden">
      {/* Background Radial Gradient Ellipses - Smooth & vibrant ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Left Blue Radial Gradient (Connecting between sections, half out to left) */}
        <div
          className="absolute -top-[450px] -left-[400px] sm:-left-[550px] w-[1100px] h-[1100px] rounded-full blur-[70px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.20) 25%, rgba(0, 59, 226, 0.06) 50%, transparent 72%)',
          }}
        />
        {/* Bottom-Left Lime Radial Gradient (Ellipse 12) */}
        <div
          className="absolute bottom-0 -left-[180px] sm:-left-[287px] w-[672px] h-[672px] rounded-full blur-[60px] opacity-80"
          style={{
            background: 'radial-gradient(circle at center, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.28) 23%, rgba(203, 252, 1, 0.08) 50%, transparent 70%)',
          }}
        />
        {/* Bottom-Right Blue Radial Gradient (Ellipse 8) */}
        <div
          className="absolute top-[10%] sm:top-[20%] left-[50%] lg:left-[722px] w-[1137px] h-[1137px] rounded-full blur-[60px] opacity-75"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 59, 226, 0.38) 0%, rgba(0, 59, 226, 0.18) 23%, rgba(0, 59, 226, 0.05) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
          {/* Left Composite Graphic Column */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[620px] h-[550px] sm:h-[580px]">
              {/* Card 1: Total Revenue Card (Top Left Base) */}
              <div className="absolute top-2 sm:top-4 left-0 sm:left-2 z-0 w-[215px] sm:w-[232px] h-[110px] sm:h-[119px] bg-[#003BE2] rounded-[24px] p-4 sm:p-5 text-white flex flex-col justify-between shadow-[0_16px_36px_rgba(0,59,226,0.35)]">
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
                  <div className="w-[68%] h-full bg-[#D4FB20] rounded-full" />
                </div>
              </div>

              {/* Card 2: Year to Date Card (Middle Left Base) */}
              <div className="absolute top-[135px] sm:top-[145px] left-0 sm:left-2 z-0 w-[125px] sm:w-[134px] h-[125px] sm:h-[135px] bg-[#003BE2] rounded-[24px] p-4 text-white flex flex-col justify-between shadow-[0_16px_36px_rgba(0,59,226,0.35)]">
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
                <div className="bg-[#D4FB20] text-[#0F172A] font-poppins font-bold text-[10px] px-2 py-0.5 rounded-full w-fit">
                  +12%
                </div>
              </div>

              {/* 3D Lime Doodle (Frame (8).png) */}
              <img
                src="/images/Frame (8).png"
                alt=""
                className="absolute transform scale-x-[-1] top-10 sm:top-22 right-6 sm:right-28 w-[150px] sm:w-[180px] object-contain z-12 select-none pointer-events-none"
              />

              {/* Woman Instructor Image (Larger and positioned with clear overlap over blue cards) */}
              <img
                src="/images/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="Instructor with headset and tablet"
                className="absolute bottom-0 left-[18%] sm:-left-[12%] w-[390px] sm:w-[610px] max-w-none object-contain z-10 select-none pointer-events-none drop-shadow-2xl"
              />

              {/* Card 3: Happy Students Card (Exact block from Hero) */}
              <div className="absolute bg-white rounded-2xl shadow-[0_16px_36px_-4px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)] z-20 text-left py-3 sm:py-3.5 px-3.5 sm:px-4.5 bottom-6 sm:bottom-10 right-0 sm:-right-4 w-[230px] sm:w-[258px]">
                <div className="flex flex-col items-start justify-between gap-1 mb-2.5">
                  <span className="font-poppins font-medium text-[14px] sm:text-[16px] text-[#0F172A]">
                    Happy Students
                  </span>
                  <span className="font-satoshi font-medium text-[12px] sm:text-[13px] text-[#64748B] flex items-center gap-1">
                    4.5 (240)<span className="text-[#D4FB20] text-[11px]">★</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <img 
                    className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full border-2 border-white object-cover bg-slate-300 first:ml-0 -ml-2" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" 
                    alt="Student 1" 
                  />
                  <img 
                    className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full border-2 border-white object-cover bg-slate-300 -ml-2" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" 
                    alt="Student 2" 
                  />
                  <img 
                    className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full border-2 border-white object-cover bg-slate-300 -ml-2" 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                    alt="Student 3" 
                  />
                  <img 
                    className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full border-2 border-white object-cover bg-slate-300 -ml-2" 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" 
                    alt="Student 4" 
                  />
                  <img 
                    className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full border-2 border-white object-cover bg-slate-300 -ml-2" 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces" 
                    alt="Student 5" 
                  />
                  <div className="font-satoshi w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] rounded-full bg-[#D5FF00] border-2 border-white -ml-2 flex items-center justify-center font-poppins font-bold text-[10px] sm:text-[12px] text-[#0F172A] z-10">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Bullets Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#0F172A] leading-[1.18] mb-6">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="font-satoshi text-[16px] lg:text-[18px] text-[#82868E] leading-relaxed mb-8 max-w-[480px]">
              <strong className="font-semibold text-[#0F172A]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Bullet Points List */}
            <div className="flex flex-col gap-4">
              {BULLET_POINTS.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src="/icon-images/bulleticon.png"
                    alt=""
                    className="w-[20px] h-[20px] object-contain flex-shrink-0"
                  />
                  <span className="font-satoshi font-medium text-[16px] text-[#0F172A]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
