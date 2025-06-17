"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "DIGITAL MARKETING",
    "BRAND STRATEGY",
    "CREATIVE SOLUTIONS",
    "GROWTH STRATEGIES",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen overflow-hidden">
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-red-600 to-orange-400 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${
              -mousePosition.y * 0.01
            }px)`,
            transition: "transform 0.1s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              -mousePosition.y * 0.015
            }px)`,
            transition: "transform 0.1s ease-out",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-30 animate-bounce ${
              i % 4 === 0
                ? "w-3 h-3 bg-orange-400 rounded-full"
                : i % 4 === 1
                ? "w-2 h-2 bg-red-500 rounded-full"
                : i % 4 === 2
                ? "w-4 h-4 border-2 border-orange-500 rotate-45"
                : "w-1 h-6 bg-gradient-to-b from-orange-400 to-transparent"
            }`}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Animated hero image */}

      {/* Main content with enhanced animations */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
        {/* Main headline with rotating text */}
        <div className="mt-20 mb-6 relative">
          <h1 className="relative">
            {/* Static text with enhanced animation */}
            <span
              className={`block text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 tracking-tight leading-none transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}>
              CREATIVE
            </span>

            {/* Rotating text */}
            <div className="relative h-20 md:h-24 overflow-hidden">
              {rotatingTexts.map((text, index) => (
                <span
                  key={index}
                  className={`absolute inset-0 block text-4xl md:text-6xl font-light text-white transition-all duration-500 ${
                    index === currentTextIndex
                      ? "translate-y-0 opacity-100"
                      : index < currentTextIndex
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                  }`}>
                  {text}
                </span>
              ))}
            </div>

            <span
              className={`block text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transition-all duration-700 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}>
              FOR ARTISTS
            </span>
          </h1>

          {/* Enhanced divider with animation */}
          <div
            className={`w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full shadow-lg transition-all duration-700 delay-500 ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          <div
            className={`text-orange-400 font-bold text-xl mt-4 tracking-[0.3em] uppercase transition-all duration-700 delay-600 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}>
            by CREATIVE PROFESSIONALS
          </div>
        </div>

        {/* Enhanced description */}
        <p
          className={`text-lg md:text-2xl text-gray-300 mt-6 mb-10 max-w-3xl font-light leading-relaxed relative transition-all duration-700 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
          Transform your artistic vision into a{" "}
          <span className="text-orange-400 font-medium">thriving brand</span>{" "}
          with our innovative digital marketing solutions designed specifically
          for creative minds.
        </p>

        {/* Enhanced CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-800 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
          <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

          <button className="group border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              View Our Work
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Enhanced micro-interactions */}
        <div
          className={`mt-12 flex justify-center space-x-6 transition-all duration-700 delay-900 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              500+
            </div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              98%
            </div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              24/7
            </div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce transition-all duration-700 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
        <div className="flex flex-col items-center cursor-pointer hover:text-orange-400 transition-colors duration-300">
          <div className="text-sm font-medium mb-2">Scroll to explore</div>
          <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent mb-2" />
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Custom CSS for scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(500px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
