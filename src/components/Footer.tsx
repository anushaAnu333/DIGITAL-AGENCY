"use client";

import React, { useState, useEffect, useRef } from "react";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const serviceLinks = [
    { name: "Brand Strategy", href: "#" },
    { name: "Web Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Content Creation", href: "#" },
  ];

  const socialPlatforms = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Behance", icon: "🎨", href: "#" },
    { name: "Dribbble", icon: "🏀", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse"
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
                ? "w-3 h-3 bg-orange-400 rounded-full"
                : "w-4 h-4 border border-orange-400 rotate-45"
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

      {/* Top border with gradient */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

      <div className="relative z-10 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              <div className="mb-6">
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
                  DIGITAL AGENCY
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Transforming brands through creative excellence and strategic
                  innovation. We bring your artistic vision to life.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <span className="text-orange-500">📧</span>
                  <span className="text-sm">hello@digitalagency.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <span className="text-orange-500">📞</span>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <span className="text-orange-500">📍</span>
                  <span className="text-sm">
                    123 Creative Ave, Art City, USA
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Navigation
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h4>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-2 text-sm font-medium"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}>
                    <span className="flex items-center gap-2">
                      {hoveredLink === link.name && (
                        <span className="text-orange-500 text-xs">→</span>
                      )}
                      {link.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h4>
              <nav className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block text-gray-300 hover:text-orange-400 transition-all duration-300 transform hover:translate-x-2 text-sm font-medium">
                    {service.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Newsletter & Social */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Stay Connected
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h4>

              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe for updates, tips, and creative insights.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-orange-500 transition-colors duration-300"
                   
                  />
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-sm font-bold">
                    Join
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-300 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-3">
                  {socialPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-orange-500"
                      title={platform.name}>
                      <span className="text-sm">{platform.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className={`border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}>
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Digital Agency. All rights
                reserved.
              </p>
              <p className="mt-1">Crafted with ❤️ for creative minds</p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-gray-400 text-sm">
              <a
                href="#"
                className="hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110"
              title="Back to top">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
