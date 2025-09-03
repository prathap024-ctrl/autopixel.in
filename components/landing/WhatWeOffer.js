import { ExpandableCardSection } from "@/layouts/Spotlight";
import React from "react";

const WhatWeOffer = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Enhanced Section Header with SEO keywords */}
        <div className="mb-16 text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Automation & Marketing Solutions
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            From custom n8n workflow automation to AI-driven digital marketing campaigns,
            we deliver end-to-end solutions that transform how your business operates and grows.
          </p>

          {/* Key value propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI-Focused Approach</h3>
              <p className="text-gray-400 text-sm">Every solution designed to maximize your return on investment</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Integrations</h3>
              <p className="text-gray-400 text-sm">Tailored n8n workflows that fit your unique business needs</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Insights</h3>
              <p className="text-gray-400 text-sm">Data-driven strategies powered by artificial intelligence</p>
            </div>
          </div>

          {/* Service categories overview */}
          <div className="text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Complete Business Transformation Services
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Automation Solutions
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom n8n workflow development & optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    CRM automation & lead management systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    E-commerce automation & inventory management
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    API integrations & data synchronization
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Marketing & Analytics
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    AI-driven digital marketing campaigns
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advanced analytics & performance tracking
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Social media automation & management
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Email marketing automation & nurturing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Cards with enhanced context */}
        <div className="w-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Explore Our Service Portfolio
            </h3>
            <p className="text-gray-400">
              Discover detailed information about each service and how it can transform your business operations
            </p>
          </div>
          <ExpandableCardSection />
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Get a free consultation and discover how our automation solutions can increase your efficiency by up to 80%
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;