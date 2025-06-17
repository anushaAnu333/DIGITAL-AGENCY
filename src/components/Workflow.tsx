"use client";

import React, { useState, useEffect, useRef } from "react";

const steps = [
  { 
    number: "01", 
    title: "CONCEPT", 
    subtitle: "Understanding Your Vision",
    icon: "💡",
    description: "We start by diving deep into your brand, goals, and audience to create a solid foundation for success.",
    features: ["Brand Analysis", "Market Research", "Creative Ideation", "Strategy Planning"],
    color: "from-orange-400 to-red-500",
    duration: "1-2 weeks",
    deliverable: "Strategy Document"
  },
  { 
    number: "02", 
    title: "BUDGET", 
    subtitle: "Resource Planning",
    icon: "💰",
    description: "Transparent pricing and resource allocation to ensure maximum ROI while maintaining quality standards.",
    features: ["Cost Analysis", "Resource Planning", "Timeline Estimation", "Value Optimization"],
    color: "from-orange-500 to-red-600",
    duration: "2-3 days",
    deliverable: "Budget Plan"
  },
  { 
    number: "03", 
    title: "DEVELOPMENT", 
    subtitle: "Bringing Ideas to Life",
    icon: "🔧",
    description: "Expert execution using cutting-edge technology and proven methodologies for optimal results.",
    features: ["Design Creation", "Content Development", "Technical Implementation", "Quality Assurance"],
    color: "from-red-500 to-orange-500",
    duration: "3-4 weeks",
    deliverable: "Live Solution"
  },
  { 
    number: "04", 
    title: "RESULT", 
    subtitle: "Launch & Growth",
    icon: "📈",
    description: "Measurable outcomes and ongoing optimization to ensure sustained growth and success.",
    features: ["Performance Metrics", "Analytics Review", "Optimization", "Continued Support"],
    color: "from-red-600 to-orange-400",
    duration: "Ongoing",
    deliverable: "Growth Results"
  },
];

const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && visibleSteps.size === steps.length) {
      intervalRef.current = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, visibleSteps.size]);

  // Progress calculation
  useEffect(() => {
    setProgress(((activeStep + 1) / steps.length) * 100);
  }, [activeStep]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, index]));
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

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section 
      ref={sectionRef}
      id="workflow"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-gray-900/40 to-black"></div>
        
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl animate-pulse opacity-20 ${
              i % 2 === 0 ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gradient-to-r from-red-400 to-orange-500'
            }`}
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">Our Proven Process</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="text-orange-400">OUR</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-500">
              WORKFLOW
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, our streamlined process ensures exceptional results 
            through collaboration, creativity, and cutting-edge execution.
          </p>
        </div>

        {/* Main Workflow Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Step Navigation */}
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-slate-400">Progress</span>
                <button 
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-orange-400' : 'bg-red-400'}`}></div>
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </button>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>Start</span>
                <span>Complete</span>
              </div>
            </div>

            {/* Step Cards */}
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  visibleSteps.has(index) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleStepClick(index)}
              >
                <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white/10 border-white/30 shadow-2xl scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}>
                  
                  {/* Active indicator */}
                  {activeStep === index && (
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  )}

                  <div className="flex items-center gap-4">
                    {/* Step Number & Icon */}
                    <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black transition-all duration-300 ${
                      activeStep === index
                        ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                        : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                    }`}>
                      <span className="relative z-10">{step.number}</span>
                      {activeStep === index && (
                        <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        activeStep === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{step.subtitle}</p>
                      
                      {/* Timeline info */}
                      <div className="flex items-center gap-4 mt-3 text-xs">
                        <span className={`px-2 py-1 rounded-md ${
                          activeStep === index ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                        }`}>
                          {step.duration}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{step.deliverable}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`transition-all duration-300 ${
                      activeStep === index 
                        ? 'text-white translate-x-0' 
                        : 'text-gray-600 -translate-x-2 group-hover:translate-x-0 group-hover:text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${steps[activeStep].color} rounded-full blur-2xl animate-pulse`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${steps[activeStep].color} rounded-full blur-xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
              </div>

              <div className="relative z-10">
                {/* Step Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{steps[activeStep].icon}</div>
                  <div>
                    <h3 className="text-3xl font-black text-white">{steps[activeStep].title}</h3>
                    <p className="text-slate-300">{steps[activeStep].subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {steps[activeStep].features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`}></div>
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className={`flex-1 bg-gradient-to-r ${steps[activeStep].color} text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                    Start This Step
                  </button>
                  <button className="px-6 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Step Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStep 
                          ? `bg-gradient-to-r ${steps[activeStep].color}` 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                      onClick={() => handleStepClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "500+", label: "Projects" },
                { value: "99%", label: "Success Rate" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
                >
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Project Today
            </button>
            <button className="border border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;