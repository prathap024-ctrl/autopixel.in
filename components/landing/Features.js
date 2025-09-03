import { FEATURES } from "@/data/landingData";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-optimized heading with keywords */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Complete Business Automation & Marketing Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your operations with our comprehensive suite of AI-powered automation tools,
            n8n integrations, and data-driven marketing strategies designed to maximize ROI and scale your business.
          </p>
        </div>

        {/* Enhanced grid with better spacing and visual hierarchy */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start gap-4 bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Enhanced icon container with gradient background */}
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-2">
                <Image
                  width={32}
                  height={32}
                  src={feature.icon}
                  alt={`${feature.title} - Business automation solution`}
                  className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Add benefit points for better SEO and user understanding */}
                <div className="space-y-2">
                  {feature.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-200">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Subtle CTA for each feature */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button
                    className="font-medium text-sm transition-colors duration-200"
                    aria-label={`Learn more about ${feature.title} automation solutions`}
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional trust section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Trusted by Growing Businesses Worldwide
          </h3>
          <div className="flex justify-center items-center gap-8 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">500+ Successful Automations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Average 300% ROI Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}