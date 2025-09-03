import { AnimatedBeamSection } from "@/layouts/automation";

export default function BentoFeatures() {
  return (
    <section className="py-16 md:py-28 flex flex-col items-center px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="automation-showcase">
      <div className="max-w-7xl mx-auto w-full">
        {/* Enhanced Section Heading with SEO keywords */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
            <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-400 text-sm font-medium">Live Automation Demo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            <span className="text-white">Advanced </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              n8n Workflow Automation
            </span>
            <span className="block text-white mt-2">in Action</span>
          </h2>

          <p className="max-w-4xl mx-auto text-center text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed">
            Experience how our custom n8n integrations, AI-powered automation workflows, and intelligent
            data processing systems work together to eliminate manual tasks, reduce operational costs by up to 70%,
            and accelerate your business growth.
          </p>

          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Save 40+ Hours Weekly</h3>
              <p className="text-gray-400 text-sm">Automate repetitive tasks and focus on strategic growth initiatives</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400 text-sm">Monitor performance with AI-driven insights and automated reporting</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Seamless Integration</h3>
              <p className="text-gray-400 text-sm">Connect 500+ apps and services with zero-code automation</p>
            </div>
          </div>
        </div>

        {/* Process overview section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            How Our Automation Workflows Transform Your Business
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h4 className="font-semibold text-white mb-2">Data Collection</h4>
              <p className="text-gray-400 text-sm">Automatically gather data from multiple sources: CRM, emails, social media, and analytics platforms</p>

              {/* Connection line */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h4 className="font-semibold text-white mb-2">AI Processing</h4>
              <p className="text-gray-400 text-sm">Intelligent algorithms analyze patterns, identify opportunities, and trigger automated responses</p>

              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h4 className="font-semibold text-white mb-2">Smart Actions</h4>
              <p className="text-gray-400 text-sm">Execute automated workflows: send emails, update records, generate reports, and notify teams</p>

              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-yellow-500"></div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">4</div>
              <h4 className="font-semibold text-white mb-2">Continuous Optimization</h4>
              <p className="text-gray-400 text-sm">Monitor performance, learn from results, and automatically improve processes for maximum efficiency</p>
            </div>
          </div>
        </div>

        {/* Animated Beam Section with enhanced context */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interactive Workflow Visualization
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Watch how data flows through our custom n8n automation system, connecting your business tools
                and eliminating manual processes in real-time.
              </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
              <AnimatedBeamSection />
            </div>
          </div>
        </div>

        {/* Use cases section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            Popular Automation Use Cases
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Lead Management Automation</h4>
              <p className="text-gray-400 text-sm">Automatically capture, qualify, and nurture leads from multiple channels</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">E-commerce Order Processing</h4>
              <p className="text-gray-400 text-sm">Streamline order fulfillment, inventory updates, and customer notifications</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Customer Support Automation</h4>
              <p className="text-gray-400 text-sm">Auto-route tickets, send responses, and escalate complex issues intelligently</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Social Media Management</h4>
              <p className="text-gray-400 text-sm">Schedule posts, monitor mentions, and engage with audiences across platforms</p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Financial Reporting</h4>
              <p className="text-gray-400 text-sm">Generate automated reports, track KPIs, and send financial summaries</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Quality Assurance</h4>
              <p className="text-gray-400 text-sm">Automated testing, monitoring, and alert systems for consistent quality</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See Your Workflows in Action?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a personalized demo of how n8n automation can transform your specific business processes.
              See real results, real workflows, and real ROI potential in just 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Schedule Live Demo
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Download Automation Guide
              </button>
            </div>

            <p className="text-gray-400 text-sm">
              ✓ Free consultation ✓ Custom workflow analysis ✓ ROI calculator ✓ Implementation roadmap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}