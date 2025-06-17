"use client";

import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "SOCIAL MEDIA STRATEGY",
    description:
      "We craft tailored social media strategies to boost your brand's online presence and engagement.",

    color: "from-orange-400 to-red-500",
  },
  {
    number: "02",
    title: "REPUTATION MANAGEMENT",
    description:
      "Protect and enhance your brand's reputation with our expert online management services.",

    color: "from-orange-500 to-red-600",
  },
  {
    number: "03",
    title: "BLOG DESIGN",
    description:
      "Engaging and visually stunning blog designs to captivate your audience and drive conversations.",

    color: "from-red-500 to-orange-500",
  },
  {
    number: "04",
    title: "SITE DESIGN",
    description:
      "Modern, responsive websites designed to convert visitors into loyal customers.",

    color: "from-orange-500 to-red-500",
  },
  {
    number: "05",
    title: "MARKET EXPLORATION",
    description:
      "In-depth market research and exploration to find new growth opportunities.",

    color: "from-red-600 to-orange-400",
  },
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState<Set<string>>(
    new Set()
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger service animations
          services.forEach((service, index) => {
            setTimeout(() => {
              setVisibleServices((prev) => new Set([...prev, service.number]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 md:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 border-2 border-orange-400/30 rotate-45 animate-bounce ${
              i % 2 === 0 ? "rounded-none" : "rounded-full"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              OUR
            </span>{" "}
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 mx-auto" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and
            drive meaningful results in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Services horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative transition-all duration-700 ${
                visibleServices.has(service.number)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(service.number)}
              onMouseLeave={() => setHoveredService(null)}>
              {/* Service card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 group-hover:scale-105 h-full flex flex-col">
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className={`text-lg font-bold mb-3 uppercase tracking-wide transition-colors duration-300 leading-tight ${
                        hoveredService === service.number
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                          : "text-orange-400"
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">
                      {service.description}
                    </p>

                    {/* Hover arrow */}
                    <div
                      className={`mt-4 flex items-center justify-center text-orange-400 transition-all duration-300 ${
                        hoveredService === service.number
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}>
                      <span className="text-sm font-medium mr-2">
                        Learn More
                      </span>
                      <svg
                        className="w-4 h-4"
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
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
          <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Explore All Services
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

      
      </div>
    </section>
  );
};

export default Services;
