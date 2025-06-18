"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const team = [
  {
    name: "ANNA WILLIAMS",
    role: "Creative Director",
    experience: "8 Years",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Design is not just what it looks like - it's how it works.",
    specialty: "Brand Strategy",
    projects: 150,
    achievements: ["Adobe Certified", "Design Awards Winner", "Brand Expert"],
  },
  {
    name: "CHRIS MARTINEZ",
    role: "Lead Developer",
    experience: "6 Years",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    quote: "Code is poetry written in logic.",
    specialty: "Full-Stack Development",
    projects: 200,
    achievements: ["React Expert", "Performance Specialist", "Tech Lead"],
  },
  {
    name: "MAYA CHEN",
    role: "Marketing Strategist",
    experience: "5 Years",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Data tells stories, strategy brings them to life.",
    specialty: "Digital Marketing",
    projects: 120,
    achievements: ["Growth Hacker", "Analytics Pro", "Campaign Master"],
  },
  {
    name: "LIAM JOHNSON",
    role: "Content Creator",
    experience: "4 Years",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Every frame tells a story worth sharing.",
    specialty: "Visual Storytelling",
    projects: 180,
    achievements: ["Video Expert", "Creative Visionary", "Content Strategist"],
  },
];

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);


  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 md:px-16 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-orange-500/20 transition-all duration-1000"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animation: "pulse 3s infinite",
                }}
              />
            ))}
          </div>
        </div>

        {/* Rotating circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-96 h-96 border-2 border-orange-500/30 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute top-8 left-8 w-80 h-80 border border-red-500/20 rounded-full animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
          <div
            className="absolute top-16 left-16 w-64 h-64 border border-orange-400/40 rounded-full animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Team Selector */}
          <div className="space-y-8">
            {/* Header */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                <span className="text-orange-400 font-bold text-sm tracking-widest">
                  MEET THE TEAM
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-4">
                THE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  CREATIVE
                </span>
                <br />
                MINDS
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Meet the talented individuals who bring passion, expertise, and
                innovation to every project we tackle.
              </p>
            </div>

            {/* Team Navigation */}
            <div className="space-y-4">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                  onClick={() => setActiveIndex(index)}>
                  <div
                    className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500 shadow-xl scale-105"
                        : "bg-gray-900/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50"
                    }`}>
                    {/* Active indicator line */}
                    {activeIndex === index && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-r" />
                    )}

                    <div className="flex items-center gap-4">
                      {/* Member number */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                        }`}>
                        {(index + 1).toString().padStart(2, "0")}
                      </div>

                      {/* Member info */}
                      <div className="flex-1">
                        <h3
                          className={`font-bold text-lg transition-colors duration-300 ${
                            activeIndex === index
                              ? "text-white"
                              : "text-gray-300 group-hover:text-white"
                          }`}>
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            activeIndex === index
                              ? "text-orange-400"
                              : "text-gray-500 group-hover:text-gray-400"
                          }`}>
                          {member.role} • {member.experience}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`transition-all duration-300 ${
                          activeIndex === index
                            ? "text-orange-400 translate-x-0"
                            : "text-gray-600 -translate-x-2 group-hover:translate-x-0 group-hover:text-gray-400"
                        }`}>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-3 mt-8">
              {team.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Active Member Showcase */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}>
            <div className="relative">
              {/* Main member card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-10 blur-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar section */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <Image
                        src={team[activeIndex].avatar}
                        alt={team[activeIndex].name}
                        className="w-24 h-24 rounded-2xl object-cover border-4 border-orange-500 shadow-xl"
                        width={96}  
height={96}
                      />
                      {/* Status indicator */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {team[activeIndex].name}
                      </h3>
                      <p className="text-orange-400 font-bold text-lg mb-1">
                        {team[activeIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {team[activeIndex].specialty} •{" "}
                        {team[activeIndex].experience} Experience
                      </p>
                    </div>
                  </div>

                 

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        {team[activeIndex].projects}+
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        {team[activeIndex].experience}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        A+
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        Rating
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {team[activeIndex].achievements.map(
                        (achievement, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
                            {achievement}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
                      View Portfolio
                    </button>
                    <button className="px-6 py-3 border border-gray-600 text-white rounded-xl hover:bg-gray-800 transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4", label: "Team Members" },
              { value: "23+", label: "Years Combined" },
              { value: "650+", label: "Projects Done" },
              { value: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
