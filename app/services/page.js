import { Bot, Send, MonitorSmartphone, Rocket, Settings2, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Voice Agents & Customer Service Automation",
      slug: "ai-voice-agents",
      description:
        "Transform your customer service with intelligent AI voice agents that handle inquiries, qualify leads, and book appointments automatically. Our AI-powered voice assistants provide instant responses 24/7, reducing support costs while improving customer satisfaction.",
      longDescription: "Deploy cutting-edge AI voice technology to automate customer interactions, lead qualification, and appointment scheduling. Our voice agents understand natural language, handle complex queries, and seamlessly integrate with your existing CRM and business systems.",
      benefits: [
        "99.9% uptime with instant response times",
        "Reduce customer support costs by up to 70%",
        "24/7 availability across all time zones",
        "Natural language processing for human-like conversations",
        "Seamless CRM integration and lead qualification"
      ],
      icon: <Bot className="size-6 text-blue-400" />,
      image: "/bot.svg",
      keywords: "AI voice agents, customer service automation, voice AI, automated customer support"
    },
    {
      title: "Multi-Channel Lead Generation & Sales Outreach",
      slug: "multi-channel-outreach",
      description:
        "Scale your sales outreach with automated multi-channel campaigns across email, LinkedIn, SMS, and cold calling. Our data-driven approach targets your ideal customer profile (ICP) with personalized messaging that converts prospects into qualified leads.",
      longDescription: "Maximize your reach with comprehensive outreach automation that combines cold email sequences, LinkedIn prospecting, SMS campaigns, and strategic cold calling. Each campaign is tailored to your specific industry and buyer personas for maximum engagement.",
      benefits: [
        "300% higher engagement rates vs single-channel approaches",
        "Personalized messaging at scale using AI",
        "Consistent pipeline of qualified leads monthly",
        "Advanced targeting based on ICP analysis",
        "Real-time campaign optimization and A/B testing"
      ],
      icon: <Send className="size-6 text-blue-400" />,
      image: "/channel.svg",
      keywords: "lead generation, sales outreach, multi-channel marketing, cold email, LinkedIn prospecting"
    },
    {
      title: "High-Converting Landing Pages & Sales Funnels",
      slug: "landing-pages-funnels",
      description:
        "Boost your conversion rates with professionally designed landing pages and sales funnels optimized for maximum ROI. We create mobile-responsive, fast-loading pages with integrated analytics and A/B testing to drive more sales and leads.",
      longDescription: "Build high-performance sales funnels that guide prospects from awareness to conversion. Our landing pages feature conversion-optimized design, compelling copy, social proof elements, and advanced analytics to maximize your marketing ROI.",
      benefits: [
        "Average 40% increase in conversion rates",
        "Mobile-first responsive design for all devices",
        "Page load speeds under 3 seconds guaranteed",
        "Integrated analytics and conversion tracking",
        "A/B testing for continuous optimization"
      ],
      icon: <MonitorSmartphone className="size-6 text-blue-400" />,
      image: "/LandingPage.svg",
      keywords: "landing page design, sales funnels, conversion optimization, web design, mobile responsive"
    },
    {
      title: "Data-Driven Growth Strategy & Marketing Consulting",
      slug: "growth-strategy",
      description:
        "Accelerate your business growth with comprehensive strategy consulting that includes market positioning, channel optimization, creative direction, and ROI-focused budget allocation. Get a clear roadmap to scale your revenue and market presence.",
      longDescription: "Receive expert growth strategy consulting that combines market analysis, competitive research, and data-driven insights. We develop customized growth plans that align with your business goals and provide clear KPIs for measuring success.",
      benefits: [
        "Clear 90-day and annual execution roadmaps",
        "ROI-focused recommendations with projected returns",
        "Creative strategy aligned with data insights",
        "Competitive analysis and market positioning",
        "Regular strategy reviews and optimization"
      ],
      icon: <Rocket className="size-6 text-blue-400" />,
      image: "/strategy.svg",
      keywords: "growth strategy, marketing consulting, business growth, market positioning, ROI optimization"
    },
    {
      title: "Business Process Automation & Workflow Optimization",
      slug: "automation-systems",
      description:
        "Eliminate time-consuming manual tasks with custom automation systems for CRM management, scheduling, email marketing, and workflow optimization. Save hours weekly while reducing errors and improving operational efficiency.",
      longDescription: "Streamline your business operations with intelligent automation solutions that integrate with your existing tools and systems. From CRM automation to complex workflow orchestration, we build systems that scale with your growth.",
      benefits: [
        "Save 10-20 hours per week on manual tasks",
        "Reduce human errors by up to 95%",
        "Seamless integration with existing business tools",
        "Custom workflows tailored to your processes",
        "Scalable automation that grows with your business"
      ],
      icon: <Settings2 className="size-6 text-blue-400" />,
      image: "/automation.svg",
      keywords: "business automation, workflow optimization, CRM automation, process automation, productivity tools"
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company Name",
    "description": "AI-powered business solutions for lead generation, automation, and growth strategy",
    "url": "https://yourwebsite.com",
    "services": services.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "Your Company Name"
      }
    }))
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
        {/* Hero Section */}
        <section className="px-6 py-16 sm:py-24 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="text-sm font-medium text-blue-400">Premium Business Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                AI-Powered Business Solutions
                <span className="block text-blue-400">That Drive Real Results</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge AI automation, multi-channel lead generation,
                and data-driven growth strategies. Trusted by 500+ companies to scale their operations
                and boost revenue by an average of 300%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="ml-2 size-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-16 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Complete Business Growth Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                From AI automation to strategic growth consulting, we provide end-to-end solutions
                that help businesses scale efficiently and profitably.
              </p>
            </div>

            <div className="space-y-32">
              {services.map((service, index) => (
                <article
                  key={index}
                  className={`flex flex-col-reverse lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    } items-center gap-16`}
                  id={service.slug}
                >
                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                        {service.icon}
                      </div>
                      <div className="w-full">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <div className="w-20 h-1 bg-blue-400 rounded"></div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Benefits:</h4>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="size-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 font-medium rounded-full transition-all duration-300"
                    >
                      Learn More About This Service
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                      <Image
                        src={service.image}
                        alt={`${service.title} - Professional business automation and AI solutions`}
                        width={600}
                        height={400}
                        className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl object-cover w-full hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="px-6 py-16 lg:px-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Trusted by Growing Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Companies Served</div>
              </div>
              <div className="p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-gray-300">Avg Revenue Growth</div>
              </div>
              <div className="p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support Available</div>
              </div>
              <div className="p-6 bg-gray-700/30 rounded-2xl border border-gray-600/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join hundreds of successful businesses that have transformed their operations
              with our AI-powered solutions. Get started with a free strategy consultation
              and discover how we can accelerate your growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Start Your Free Consultation
                <ArrowRight className="ml-3 size-6" />
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg rounded-full transition-all duration-300"
              >
                Call +91 8105871804
              </a>
            </div>

            <p className="text-sm text-gray-400">
              ✓ Free consultation • ✓ No commitment required • ✓ Custom solutions for your industry
            </p>
          </div>
        </section>
      </div>
    </>
  );
}