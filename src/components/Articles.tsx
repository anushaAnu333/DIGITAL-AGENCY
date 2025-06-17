"use client";
import React, { useState, useEffect, useRef } from "react";

const articles = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "VT FORMATUM",
    category: "Digital Marketing",
    desc: "Latest trends in digital art marketing and branding strategies that are reshaping the creative industry.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Marketing", "Branding", "Trends"],
    featured: true,
    excerpt:
      "Discover how cutting-edge digital marketing techniques are revolutionizing the way artists connect with their audiences and build sustainable brands.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963588720-838fd19183ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjB0aGlua2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "CREATIVE THINKING",
    category: "Strategy",
    desc: "How creativity drives successful campaigns and transforms business outcomes.",
    author: "Alex Rivera",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    tags: ["Creativity", "Strategy", "Innovation"],
    featured: false,
    excerpt:
      "Explore the psychology behind creative thinking and learn practical frameworks that top agencies use to develop breakthrough campaigns.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1738835439444-b497a003bd02?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fElNQUdJTkUlMjBCRVlPTkR8ZW58MHx8MHx8fDA%3D",
    title: "IMAGINE BEYOND",
    category: "Design",
    desc: "Pushing boundaries in digital design and exploring new creative frontiers.",
    author: "Maya Chen",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["Design", "Innovation", "Future"],
    featured: true,
    excerpt:
      "Step into the future of digital design where AI, VR, and human creativity converge to create unprecedented user experiences.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1150734727/photo/businesswoman-hand-placing-or-pulling-wooden-dominoes-with-brand-text-and-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=QrrGZkeQHKyajwKTg56X6v-ZbLB2qOiNqS2DeU_mVsI=",
    title: "BRAND EVOLUTION",
    category: "Branding",
    desc: "The evolution of brand identity in the digital age and what it means for artists.",
    author: "Chris Martinez",
    date: "Dec 8, 2024",
    readTime: "4 min read",
    tags: ["Branding", "Digital", "Identity"],
    featured: false,
    excerpt:
      "Understanding how traditional branding principles adapt to digital-first environments and create authentic connections.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1733938563538-cb03d87c9385?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEZVVFVSRSUyMElOU0lHSFRTfGVufDB8fDB8fHww",
    title: "FUTURE INSIGHTS",
    category: "Technology",
    desc: "Emerging technologies that will shape the future of creative marketing.",
    author: "David Wilson",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    tags: ["Technology", "Future", "AI"],
    featured: true,
    excerpt:
      "From AI-powered content creation to immersive AR experiences, discover the technologies revolutionizing creative marketing.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661284906133-8b49a34de7a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFSVElTVCUyMFNVQ0NFU1N8ZW58MHx8MHx8fDA%3D",
    title: "ARTIST SUCCESS",
    category: "Case Study",
    desc: "Real success stories from artists who transformed their careers with strategic marketing.",
    author: "Anna Williams",
    date: "Dec 3, 2024",
    readTime: "10 min read",
    tags: ["Success", "Case Study", "Artists"],
    featured: false,
    excerpt:
      "Inspiring stories of artists who leveraged strategic marketing to build thriving creative businesses and reach global audiences.",
  },
];

const categories = [
  "All",
  "Digital Marketing",
  "Strategy",
  "Design",
  "Branding",
  "Technology",
  "Case Study",
];

const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
  const [visibleArticles, setVisibleArticles] = useState<Set<number>>(
    new Set()
  );
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredArticles = articles.filter(
    (article) => activeCategory === "All" || article.category === activeCategory
  );

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          filteredArticles.forEach((_, index) => {
            setTimeout(() => {
              setVisibleArticles((prev) => new Set([...prev, index]));
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredArticles]);

  // Reset animations when category changes
  useEffect(() => {
    setVisibleArticles(new Set());
    setTimeout(() => {
      filteredArticles.forEach((_, index) => {
        setTimeout(() => {
          setVisibleArticles((prev) => new Set([...prev, index]));
        }, index * 100);
      });
    }, 100);
  }, [activeCategory]);

  return (
    <section
      id="articles"
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
              Latest Insights
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
            WHAT&apos;S OUR NEW{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              ARTICLE
            </span>{" "}
            <span className="text-orange-400">?</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest insights, trends, and
            strategies for creative marketing and brand development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-70">
                  ({articles.filter((a) => a.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Article (First article in filtered list) */}
        {filteredArticles.length > 0 && (
          <div
            className={`mb-16 transition-all duration-1000 ${
              visibleArticles.has(0)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}>
            <div
              className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group cursor-pointer"
              onClick={() => setSelectedArticle(0)}>
              {/* Featured Badge */}
              <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 Featured Article
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-sm font-bold border border-orange-500/30">
                    {filteredArticles[0].category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-orange-400 transition-colors duration-300 mb-4">
                    {filteredArticles[0].title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {filteredArticles[0].excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {filteredArticles[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {filteredArticles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {filteredArticles[0].readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredArticles[0].tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read button */}
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, idx) => {
            const actualIndex = idx + 1;
            return (
              <div
                key={`${article.title}-${idx}`}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleArticles.has(actualIndex)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${actualIndex * 150}ms` }}
                onMouseEnter={() => setHoveredArticle(actualIndex)}
                onMouseLeave={() => setHoveredArticle(null)}
                onClick={() => setSelectedArticle(actualIndex)}>
                {/* Article Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500 group-hover:scale-105 group-hover:border-orange-500/50 h-full">
                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-orange-500/30">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors duration-300 mb-3">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 flex-1">
                      {article.desc}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        By {article.author}
                      </span>

                      {/* Read more arrow */}
                      <div
                        className={`transition-all duration-300 ${
                          hoveredArticle === actualIndex
                            ? "text-orange-400 translate-x-0"
                            : "text-gray-600 -translate-x-2"
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
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
            Load More Articles
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "50+", label: "Articles Published" },
            { value: "10K+", label: "Monthly Readers" },
            { value: "95%", label: "Reader Satisfaction" },
            { value: "24/7", label: "Fresh Content" },
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
      </div>

      {/* Article Preview Modal */}
      {selectedArticle !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}>
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 border border-gray-700"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-black text-white">
                {filteredArticles[selectedArticle].title}
              </h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <img
              src={filteredArticles[selectedArticle].image}
              alt={filteredArticles[selectedArticle].title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {filteredArticles[selectedArticle].excerpt}
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              {filteredArticles[selectedArticle].desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
