'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthShowcase from '../../components/AuthShowcase';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#003BE2] bg-grid-pattern flex flex-col justify-between overflow-x-hidden lg:overflow-hidden">
      <header className="w-full h-[80px] sm:h-[100px] lg:h-[120px] flex items-center relative z-30 shrink-0">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] flex items-center">
          <Link href="/" className="select-none focus:outline-none flex items-center">
            <img
              src="/logo.png"
              alt="ByteSpace Logo"
              className="w-[32px] h-[32px] object-contain"
            />
          </Link>
        </div>
      </header>

      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] pt-0 mt-0 pb-12 lg:pb-0 flex-1 flex items-start">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[96px]">
          <div className="contents lg:flex lg:flex-col lg:w-1/2 lg:pt-2">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-0 order-1 lg:order-none">
              <h1 className="font-poppins font-semibold text-[18px] sm:text-[20px] text-white leading-tight mb-4">
                Sign up and come in
              </h1>
              <p className="font-satoshi text-[16px] text-white/80 max-w-[440px] leading-relaxed min-h-[78px] mb-8 lg:mb-10">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
              </p>
            </div>

            <div className="order-3 lg:order-none">
              <AuthShowcase />
            </div>
          </div>

          <div className="w-full max-w-[579px] min-h-0 sm:min-h-[754px] bg-white rounded-[24px] sm:rounded-[32px] px-6 sm:px-[63px] pt-8 sm:pt-[72px] pb-6 sm:pb-[54px] flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.18)] order-2 lg:order-none">
            <div>
              <div className="mb-8">
                <span className="font-satoshi font-normal text-[15px] sm:text-[18px] text-[#003BE2] block mb-2">
                  Create an Account
                </span>
                <h2 className="font-poppins font-semibold text-[34px] sm:text-[44px] text-[#0F172A] leading-[1.12]">
                  Welcome to<br />ByteSpace
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jamie Davis"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="designer@example.com"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="font-satoshi font-medium text-[14px] text-[#0F172A] mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="********"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] font-satoshi text-[14px] text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#003BE2] transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-9 py-3.5 bg-[#D4FB20] text-[#0F172A] font-satoshi font-semibold text-[15px] rounded-full hover:brightness-95 transition-all cursor-pointer shadow-sm"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center pt-8 border-t border-slate-100 mt-6">
              <p className="font-satoshi text-[16px] text-[#64748B]">
                Already have an account?{' '}
                <Link href="/login" className="text-[#003BE2] font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

