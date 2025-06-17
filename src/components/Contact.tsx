"use client";
import React, { useState, useEffect, useRef } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      budget: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      value: "hello@digitalagency.com",
      desc: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Call Us",
      value: "+1 (555) 123-4567",
      desc: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Start Chat",
      desc: "Available 24/7 for support",
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "123 Creative Ave",
      desc: "Art City, Creative State 12345",
    },
  ];

  const projectTypes = [
    "Brand Identity",
    "Website Design",
    "Mobile App",
    "Marketing Campaign",
    "Social Media Strategy",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Let's Discuss",
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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

      {/* Enhanced floating banners */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute left-0 right-0 top-8 transition-all duration-1000 ${
            isVisible
              ? "rotate-[-5deg] translate-y-0 opacity-100"
              : "rotate-[-15deg] -translate-y-8 opacity-0"
          }`}>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-xl md:text-2xl py-3 px-8 w-fit mx-auto rounded-2xl shadow-2xl border-2 border-orange-400/20">
            <span className="flex items-center gap-3">🚀 CONNECT WITH US</span>
          </div>
        </div>
        <div
          className={`absolute left-0 right-0 top-20 transition-all duration-1000 delay-200 ${
            isVisible
              ? "rotate-[-3deg] translate-y-0 opacity-100"
              : "rotate-[-8deg] -translate-y-8 opacity-0"
          }`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg md:text-xl py-3 px-8 w-fit mx-auto rounded-2xl shadow-xl border border-orange-400/30">
            ✨ WE LIKE TO START YOUR PROJECT WITH US
          </div>
        </div>
        <div
          className={`absolute left-0 right-0 top-32 transition-all duration-1000 delay-400 ${
            isVisible
              ? "rotate-[2deg] translate-y-0 opacity-100"
              : "rotate-[8deg] -translate-y-8 opacity-0"
          }`}>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-base md:text-lg py-2 px-6 w-fit mx-auto rounded-xl shadow-lg border border-orange-400/20">
            💡 LET&apos;S CREATE SOMETHING AMAZING TOGETHER
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto mt-48">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}>
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none">
                LET&apos;S START
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  SOMETHING
                </span>
                <span className="block text-white">GREAT</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6" />
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Ready to transform your brand and reach new heights? We&apos;re here
                to bring your creative vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {method.title}
                  </h3>
                  <p className="text-orange-400 font-bold text-base mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-400 text-sm">{method.desc}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram", "Behance"].map(
                (platform, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-700">
                    {platform[0]}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Side - Enhanced Form */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}>
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-700/50">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-2">
                  Let&apos;s Talk
                </h3>
                <p className="text-gray-400">
                  Tell us about your project and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                     
                      className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none text-gray-200 ${
                        activeField === "name"
                          ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                     
                      className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none text-gray-200 ${
                        activeField === "email"
                          ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                  
                    className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none text-gray-200 ${
                      activeField === "phone"
                        ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                  />
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("project")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none text-gray-200 ${
                        activeField === "project"
                          ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                          : "border-gray-600 hover:border-gray-500"
                      }`}>
                      <option value="" style={{ color: "#9ca3af" }}>
                        Project Type
                      </option>
                      {projectTypes.map((type, index) => (
                        <option
                          key={index}
                          value={type}
                          className="text-gray-200 bg-gray-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("budget")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none text-gray-200 ${
                        activeField === "budget"
                          ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                          : "border-gray-600 hover:border-gray-500"
                      }`}>
                      <option value="" style={{ color: "#9ca3af" }}>
                        Budget Range
                      </option>
                      {budgetRanges.map((range, index) => (
                        <option
                          key={index}
                          value={range}
                          className="text-gray-200 bg-gray-800">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project... *"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                   
                    className={`w-full p-4 rounded-xl bg-gray-800 border-2 transition-all duration-300 focus:outline-none resize-none text-gray-200 ${
                      activeField === "message"
                        ? "border-orange-500 bg-gray-700 shadow-lg shadow-orange-500/20"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
                  }`}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We&apos;ll never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Company Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <h4 className="font-black text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  DIGITAL AGENCY
                </h4>
                <p className="text-gray-300">
                  Transforming brands through creative excellence
                </p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2 text-orange-400">
                  Contact Info
                </h5>
                <p className="text-gray-300 text-sm">hello@digitalagency.com</p>
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2 text-orange-400">
                  Address
                </h5>
                <p className="text-gray-300 text-sm">123 Creative Avenue</p>
                <p className="text-gray-300 text-sm">
                  Art City, Creative State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
