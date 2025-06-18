"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Brand Kit",
    category: "Branding",
    desc: "Create your brand's unique identity with our design solutions.",
    tags: ["Logo Design", "Style Guide", "Brand Colors"],
    featured: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App",
    category: "App Design",
    desc: "Modern, user-friendly mobile app interfaces.",
    tags: ["UI/UX", "Prototyping", "User Testing"],
    featured: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Packaging",
    category: "Print Design",
    desc: "Eye-catching packaging for your products.",
    tags: ["Package Design", "Print Ready", "3D Mockups"],
    featured: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Web Design",
    category: "Web Development",
    desc: "Responsive and creative web design.",
    tags: ["Responsive", "SEO Optimized", "Fast Loading"],
    featured: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "Stationery",
    category: "Print Design",
    desc: "Professional stationery and print materials.",
    tags: ["Business Cards", "Letterheads", "Templates"],
    featured: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&q=80",
    title: "Product Showcase",
    category: "Photography",
    desc: "Showcase your products with style.",
    tags: ["Photography", "Retouching", "Composition"],
    featured: true,
  },
];

const categories = [
  "All",
  "Branding",
  "App Design",
  "Web Development",
  "Print Design",
  "Photography",
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    new Set()
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevCategoryRef = useRef(activeCategory);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const filtered = projects.filter(
            (project) =>
              activeCategory === "All" || project.category === activeCategory
          );
          filtered.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => new Set([...prev, index]));
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
  }, [activeCategory]);

  // Reset animations when category changes
  useEffect(() => {
    if (prevCategoryRef.current !== activeCategory) {
      setVisibleProjects(new Set());
      const filtered = projects.filter(
        (project) =>
          activeCategory === "All" || project.category === activeCategory
      );
      setTimeout(() => {
        filtered.forEach((_, index) => {
          setTimeout(() => {
            setVisibleProjects((prev) => new Set([...prev, index]));
          }, index * 150);
        });
      }, 100);
      prevCategoryRef.current = activeCategory;
    }
  }, [activeCategory]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      ref={sectionRef}
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

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 ${
              i % 3 === 0
                ? "w-4 h-4 bg-orange-400 rounded-full"
                : i % 3 === 1
                ? "w-6 h-6 border-2 border-orange-400 rotate-45"
                : "w-3 h-12 bg-gradient-to-b from-orange-400 to-transparent"
            } animate-bounce`}
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
            RESULTS TELL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              MORE ABOUT US
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of successful projects that showcase our
            expertise in creating impactful digital experiences for brands
            worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white hover:scale-105"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleProjects.has(idx)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}>
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500 group-hover:scale-105 group-hover:border-orange-500/50">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    width={400}
                    height={400}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Hover Actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                      hoveredProject === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}>
                    <button className="bg-orange-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                      <svg
                        className="w-5 h-5"
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
                    </button>
                    <button className="bg-orange-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-orange-500/30">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-gray-800 text-orange-400 text-xs font-medium rounded-full border border-gray-700 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredProject === idx
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
              View All Projects
            </button>
            <button className="border-2 border-gray-700 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 hover:border-orange-500 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
