import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoBar from '../components/LogoBar';
import ExploreCourses from '../components/ExploreCourses';
import LearningPaths from '../components/LearningPaths';
import FeatureShowcase from '../components/FeatureShowcase';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="relative w-full bg-[#0052FE] bg-grid-pattern flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <LogoBar />
      <ExploreCourses />
      <LearningPaths />
      <FeatureShowcase />
    </div>
  );
}
