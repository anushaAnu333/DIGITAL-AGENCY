"use client";
import React, { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = [
    { href: "#hero", label: "Home", icon: "🏠" },
    { href: "#services", label: "Services", icon: "🚀" },
    { href: "#workflow", label: "Workflow", icon: "⚡" },
    { href: "#portfolio", label: "Portfolio", icon: "🎨" },
    { href: "#testimonials", label: "Testimonials", icon: "💬" },
    { href: "#team", label: "Team", icon: "👥" },
    { href: "#articles", label: "Articles", icon: "📝" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background change on scroll
      setIsScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Active section detection
      const sections = navLinks.map((link) => link.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-orange-500/50 shadow-2xl shadow-orange-500/10"
            : "bg-black/80 backdrop-blur-sm border-b border-orange-500/30"
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg">
                D
              </div>
              <div className="font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                DIGITAL AGENCY
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group relative px-4 py-2 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === link.href.slice(1)
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}>
                    {link.label}

                    {/* Animated underline */}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0.5"
                      : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-t border-orange-500/30 mx-4 mb-4 rounded-2xl">
            <ul className="p-6 space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}>
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      className="w-4 h-4 ml-auto opacity-50"
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
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
