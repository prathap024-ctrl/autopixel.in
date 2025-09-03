import Image from "next/image";
import { features } from "@/data/landingData";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32 text-white" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-3xl gap-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Enhanced Text Section with SEO content */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                ⚡ Industry Leading Solutions
              </span>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Why Choose Our Automation & Marketing Agency
              </h2>
            </div>
            
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Proven </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Business
              </span>
              <span className="block text-white">Transformation</span>
            </h3>
            
            <p className="text-xl leading-8 text-gray-300 mb-8">
              We combine cutting-edge artificial intelligence, custom n8n workflow automation, 
              and data-driven digital marketing strategies to deliver measurable results that 
              scale your business operations and maximize ROI.
            </p>

            {/* Key differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-white">500+ Successful Projects</span>
                </div>
                <p className="text-sm text-gray-400">Delivered for businesses across 20+ industries</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-white">Average 300% ROI</span>
                </div>
                <p className="text-sm text-gray-400">Within 6 months of implementation</p>
              </div>
            </div>

            {/* Enhanced Feature List with more detailed content */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white mb-6">
                Our Competitive Advantages
              </h4>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={feature.name} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <feature.icon
                            aria-hidden="true"
                            className="w-6 h-6 text-white"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <dt className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {feature.name}
                        </dt>
                        <dd className="text-gray-300 leading-relaxed mb-3">
                          {feature.description}
                        </dd>
                        
                        {/* Add specific benefits for each feature */}
                        <div className="flex flex-wrap gap-2">
                          {feature.tags?.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="inline-flex px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          )) || (
                            // Default tags if not provided in data
                            index === 0 ? (
                              <>
                                <span className="inline-flex px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300 text-xs font-medium">n8n Expert</span>
                                <span className="inline-flex px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300 text-xs font-medium">Custom Workflows</span>
                              </>
                            ) : index === 1 ? (
                              <>
                                <span className="inline-flex px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-300 text-xs font-medium">AI Analytics</span>
                                <span className="inline-flex px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-300 text-xs font-medium">ROI Tracking</span>
                              </>
                            ) : (
                              <>
                                <span className="inline-flex px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-300 text-xs font-medium">24/7 Support</span>
                                <span className="inline-flex px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-300 text-xs font-medium">Scalable</span>
                              </>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
              <h4 className="text-xl font-semibold text-white mb-3">
                Ready to Scale Your Business Operations?
              </h4>
              <p className="text-gray-300 mb-4">
                Join successful businesses that have automated their workflows and increased efficiency by 80%+
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Get Free Automation Audit
                </button>
                <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-md"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                <Image
                  alt="Advanced n8n workflow automation dashboard showing AI-powered business processes, data analytics, and marketing automation tools for enterprise scaling"
                  src="/image04.jpg"
                  width={500}
                  height={400}
                  className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                  priority
                />
                
                {/* Floating stats cards */}
                <div className="absolute -bottom-4 -left-4 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-medium">Efficiency Boost</div>
                  <div className="text-2xl font-bold">+80%</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-medium">Time Saved</div>
                  <div className="text-2xl font-bold">40hrs/week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional trust section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Trusted by Industry Leaders & Growing Businesses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+ Years</div>
              <div className="text-sm">Automation Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm">Uptime Guarantee</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2M+</div>
              <div className="text-sm">Cost Savings Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}