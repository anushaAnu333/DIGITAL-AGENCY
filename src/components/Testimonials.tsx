"use client";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "JOSH MARTINEZ",
    role: "Music Producer",
    company: "Rhythm Studios",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The team truly understands artists! My brand has grown exponentially since working with them. Their creative approach and strategic thinking transformed my entire online presence.",
    rating: 5,
    project: "Brand Identity & Website",
    featured: true,
  },
  {
    name: "GLITZ WILLIAMS",
    role: "Digital Artist",
    company: "Creative Collective",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Creative, professional, and always on point. They helped me reach audiences I never thought possible. The results speak for themselves - my engagement increased by 300%!",
    rating: 5,
    project: "Social Media Strategy",
    featured: false,
  },
  {
    name: "DAVID CHEN",
    role: "Independent Filmmaker",
    company: "Indie Films Co.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "They made marketing easy and fun for me as an artist. What seemed impossible before became achievable with their guidance. Truly a game-changing partnership!",
    rating: 5,
    project: "Marketing Campaign",
    featured: true,
  },
  {
    name: "SARA JOHNSON",
    role: "Photographer",
    company: "Visual Stories",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Outstanding work! Their attention to detail and creative vision helped me establish a strong brand presence. My bookings have tripled since launching the new brand.",
    rating: 5,
    project: "Complete Rebrand",
    featured: false,
  },
  {
    name: "ALEX RIVERA",
    role: "Graphic Designer",
    company: "Design Studio",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Professional, innovative, and results-driven. They understand the creative industry like no other agency. My portfolio website is now my biggest client acquisition tool.",
    rating: 5,
    project: "Portfolio Website",
    featured: true,
  },
];

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<number>>(
    new Set()
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && visibleTestimonials.size === testimonials.length) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, visibleTestimonials.size]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTestimonials((prev) => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 md:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 ${
              i % 2 === 0
                ? "w-4 h-4 bg-orange-400 rounded-full"
                : "w-6 h-6 border-2 border-orange-400 rotate-45"
            } animate-bounce`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
            WHAT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              CLIENTS
            </span>{" "}
            SAY
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ABOUT <span className="text-orange-400">US</span>{" "}
            <span className="text-orange-400">?</span>
          </h3>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from the artists and
            creators who&apos;ve transformed their brands and grown their
            businesses with our help.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Featured Testimonial */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                &ldquo;
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
                <span className="text-orange-400 ml-2 font-bold">5.0</span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-white leading-relaxed mb-8 font-light">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-orange-500 shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-bold text-orange-400">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-300 font-medium">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project Badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {testimonials[activeTestimonial].project}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="order-1 lg:order-2 space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  visibleTestimonials.has(index)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleTestimonialClick(index)}>
                <div
                  className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-white/10 border-orange-500 shadow-lg scale-105"
                      : "bg-white/5 border-gray-700 hover:bg-white/8 hover:border-gray-600"
                  }`}>
                  {/* Active indicator */}
                  {activeTestimonial === index && (
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  )}

                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className={`w-12 h-12 rounded-full object-cover transition-all duration-300 ${
                          activeTestimonial === index
                            ? "border-2 border-orange-500"
                            : "border border-gray-600"
                        }`}
                      />
                      {testimonial.featured && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-bold transition-colors duration-300 ${
                          activeTestimonial === index
                            ? "text-orange-400"
                            : "text-white group-hover:text-orange-400"
                        }`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`transition-all duration-300 ${
                        activeTestimonial === index
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

            {/* Auto-play Control */}
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isAutoPlaying ? "bg-orange-400" : "bg-gray-600"
                  }`}></div>
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "5.0★", label: "Average Rating" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
              Start Your Success Story
            </button>
            <button className="border-2 border-gray-700 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 hover:border-orange-500 transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
