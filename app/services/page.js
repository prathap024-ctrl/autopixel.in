import { Bot, Send, MonitorSmartphone, Rocket, Settings2 } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Voice Agents",
      description:
        "Deploy AI-powered voice assistants to handle customer service, lead qualification, appointment setting, and more—24/7.",
      benefits: [
        "Instant response times",
        "Lower customer support costs",
        "Available 24/7 across time zones",
      ],
      icon: <Bot className="size-6 text-blue-400" />,
      image: "/bot.svg",
    },
    {
      title: "Multi-Channel Outreach",
      description:
        "We automate and manage outreach across cold email, LinkedIn, SMS, and calls, tailored to your ICP.",
      benefits: [
        "Higher engagement rates",
        "Personalized campaigns at scale",
        "Consistent pipeline of leads",
      ],
      icon: <Send className="size-6 text-blue-400" />,
      image: "/channel.svg",
    },
    {
      title: "Funnel & Landing Page Builds",
      description:
        "High-converting sales funnels, tailored landing pages, and integrated analytics to drive action and conversions.",
      benefits: [
        "Optimized for conversions",
        "Seamless analytics integration",
        "Mobile-friendly, fast-loading pages",
      ],
      icon: <MonitorSmartphone className="size-6 text-blue-400" />,
      image: "/LandingPage.svg",
    },
    {
      title: "Growth Strategy",
      description:
        "Get a data-driven growth roadmap: positioning, channel strategy, creative direction, and ad budget planning.",
      benefits: [
        "Clear step-by-step execution plan",
        "ROI-focused recommendations",
        "Creative + data synergy",
      ],
      icon: <Rocket className="size-6 text-blue-400" />,
      image: "/strategy.svg",
    },
    {
      title: "Automation Systems",
      description:
        "Eliminate repetitive tasks with backend automations for CRM, scheduling, email, task management, and beyond.",
      benefits: [
        "Save hours weekly",
        "Reduce manual errors",
        "Streamlined business workflows",
      ],
      icon: <Settings2 className="size-6 text-blue-400" />,
      image: "/automation.svg",
    },
  ];

  return (
    <div className="bg-blue-100 text-gray-900 border-t-2 border-b-2 px-6 py-24 sm:py-32 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-base font-semibold text-gray-600">What We Offer</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Smart Solutions. Real Results.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            From automation to client acquisition systems, we bring tailored
            AI-powered services to help your business grow faster and smarter.
            Every solution is built to scale and deliver measurable ROI.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Text */}
              <div className="lg:w-1/2 text-lg text-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <p className="mb-4">{service.description}</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-2xl bg-white border-2 border-gray-900 shadow-xl object-cover w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight">
            Built for startups and growing businesses
          </h2>
          <p className="mt-6 text-gray-600">
            Whether you&apos;re looking to scale lead gen or improve operational
            efficiency, our services are designed for fast-growing brands ready
            to level up. Everything we build is tailored, scalable, and
            conversion-optimized.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block rounded-full bg-blue-400 px-6 py-3 text-white font-medium hover:bg-blue-500 transition"
            >
              Let’s Talk Growth
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
