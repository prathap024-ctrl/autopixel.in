"use client";

import Link from "next/link";
import { WordRotate } from "@/components/magicui/word-rotate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Funnel, IndianRupee } from "lucide-react";
import {
  IconBrandTeams,
  IconGrowth,
  IconProgressCheck,
  IconTools,
  IconStackFront,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "../contact";
import { useRouter } from "next/navigation";

const features = [
  {
    name: "Efficient AI Workflows",
    description:
      "Streamlined, transparent processes powered by AI to deliver predictable results with maximum efficiency.",
    icon: IconProgressCheck,
  },
  {
    name: "Agile AI-Powered Teams",
    description:
      "Our expert team leverages AI to deliver rapid, high-quality solutions tailored to your business needs.",
    icon: IconBrandTeams,
  },
  {
    name: "Scalable Automation Solutions",
    description:
      "We design AI-driven systems to support sustainable growth, ensuring your business scales effortlessly.",
    icon: IconGrowth,
  },
  {
    name: "Cutting-Edge AI Technology",
    description:
      "From advanced AI automation to intelligent analytics, we use innovative tools to keep you ahead of the curve.",
    icon: IconTools,
  },
];

const texts = ["AI Automation", "Digital Marketing", "Smart Web Solutions"];

const Skeleton = () => <div></div>;

const items = [
  {
    title: "AI-Driven Ad Campaigns",
    description:
      "Maximize ROI with targeted, AI-optimized ad campaigns that drive qualified leads and boost conversions.",
    header: (
      <Image
        src="/personalized_ads.svg"
        alt="AI-Driven Ad Campaigns"
        width={500}
        height={500}
        className="w-full h-50 object-contain rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IndianRupee className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Sales Funnels",
    description:
      "We craft intelligent sales funnels using AI to guide prospects from clicks to loyal customers seamlessly.",
    header: (
      <Image
        src="/Filter-bro.svg"
        alt="AI-Powered Sales Funnels"
        width={500}
        height={500}
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <Funnel className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Enhanced Growth Strategies",
    description:
      "Custom, data-driven strategies powered by AI to align with your business goals and accelerate growth.",
    header: (
      <Image
        src="/Growth.svg"
        alt="AI-Enhanced Growth Strategies"
        width={500}
        height={500}
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <IconStackFront className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Crafted Creative Content",
    description:
      "Engaging visuals and AI-optimized content designed to captivate your audience and elevate your brand.",
    header: (
      <Image
        src="/Content.svg"
        alt="AI-Crafted Creative Content"
        width={500}
        height={500}
        className="w-full h-50 object-contain rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

const testimonials = [
  {
    quote:
      "Our AI-powered chat and voice agents work 24/7 to enhance customer support, qualify leads, and boost sales.",
    name: "🤖 Non-Stop AI Agents",
    title: "",
  },
  {
    quote:
      "We deliver measurable results with AI-driven marketing strategies that prioritize conversions over metrics.",
    name: "📊 AI Marketing That Works",
    title: "",
  },
  {
    quote:
      "Our AI-optimized websites are fast, user-friendly, and designed to turn visitors into loyal customers.",
    name: "🌐 AI-Powered Web Solutions",
    title: "",
  },
  {
    quote:
      "Streamline operations and save time with AI automation workflows tailored to your business processes.",
    name: "🔄 AI Automation for Efficiency",
    title: "",
  },
  {
    quote:
      "Our AI-driven sales funnels guide prospects seamlessly from awareness to purchase, maximizing conversions.",
    name: "🚀 AI Funnels That Convert",
    title: "",
  },
  {
    quote:
      "We combine AI insights with strategic expertise to deliver smart, scalable solutions for business growth.",
    name: "🧠 AI-Driven Business Strategies",
    title: "",
  },
];

const posts = [
  {
    id: 1,
    title: "Top 5 AI Funnel Mistakes Sabotaging Your Sales",
    href: "#",
    description:
      "Discover common AI-powered funnel errors and proven strategies to optimize conversions and drive revenue.",
    date: "Aug 01, 2025",
    datetime: "2025-08-01",
    category: { title: "AI Funnels", href: "#" },
    author: {
      name: "",
      role: "",
      href: "#",
      imageUrl: "/user-round.svg",
    },
  },
  {
    id: 2,
    title: "How AI Automation Enhances Customer Support Without Losing Empathy",
    href: "#",
    description:
      "Learn how AI chatbots and voice agents can improve customer experience while maintaining a human touch.",
    date: "Jul 25, 2025",
    datetime: "2025-07-25",
    category: { title: "AI Automation", href: "#" },
    author: {
      name: "",
      role: "",
      href: "#",
      imageUrl: "user-round.svg",
    },
  },
  {
    id: 3,
    title: "Scaling with AI: Smart Automation for Service-Based Businesses",
    href: "#",
    description:
      "Explore how AI automation and intelligent funnels help lean teams scale efficiently without burnout.",
    date: "Jul 18, 2025",
    datetime: "2025-07-18",
    category: { title: "AI Growth", href: "#" },
    author: {
      name: "",
      role: "",
      href: "#",
      imageUrl: "user-round.svg",
    },
  },
];

export default function LandingPage() {
  const router = useRouter();
  const handleClick = () => router.push("/contact");
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black w-full h-full top-0 left-0">
        <div className="relative isolate">
          <div className="mx-auto max-w-2xl py-28 sm:py-46 lg:py-40">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-normal text-balance text-white sm:text-7xl">
                <span className="text-4xl">Unlock Smarter Growth with AI</span>{" "}
                <WordRotate words={texts} />
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8">
                At AutoPixel, we empower businesses with AI automation,
                intelligent marketing, and high-performance websites. Our
                AI-driven solutions streamline processes, boost conversions, and
                deliver measurable results — saving you time and driving growth.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <InteractiveHoverButton
                  className="border border-white"
                  onClick={handleClick}
                >
                  Schedule Your Free AI Strategy Call
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we offer */}
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-4 md:mb-8">
          Our AI-Powered Mission
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      {/* Why choose us */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-24 sm:py-32">
        <div className="overflow-hidden mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-white">
                  Our AI-Driven Approach
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Intelligent Automation, Made Simple
                </p>
                <p className="mt-6 text-lg/8 text-white">
                  We combine AI expertise with agile execution to deliver fast,
                  effective, and scalable solutions that transform your
                  business.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-white"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <Image
              alt="AI Automation Dashboard"
              src="/image1.svg"
              width={500}
              height={200}
              className="sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      {/*What we offer*/}
      <div className="my-4 md:my-24 flex flex-col items-center">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-4 md:mb-24">
          AI Solutions to Fuel Your Business Growth
        </h2>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-6 md:p-0">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
      {/* Call to action */}
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
                Supercharge Your Business with AI Automation
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-900">
                Ready to automate processes, optimize funnels, and scale
                smarter? Our AI-driven solutions deliver measurable results with
                no fluff — just impact.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/"
                  className="text-sm/6 font-semibold text-gray-900 hover:text-gray-100"
                >
                  <InteractiveHoverButton>
                    Schedule Your Free AI Strategy Session
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 lg:mt-8 w-full md:mx-auto max-w-md lg:max-w-lg">
              <Image
                alt="AI Automation Workflow"
                src="/build.svg"
                width={1824}
                height={1080}
                className="bg-white/5 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              AI Insights from Our Blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Unlock expert tips on AI automation, intelligent marketing, and
              business growth strategies.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <Image
                    width={32}
                    height={32}
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-gradient-to-r from-gray-900 to-black h-fit py-24 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white mb-12">
          AI Automation FAQs
        </h2>

        <div className="w-full md:max-w-3/4 bg-white p-4 md:p-12 text-gray-900 rounded-2xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What AI automation services does AutoPixel provide?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We specialize in AI automation, intelligent digital marketing,
                  AI-driven ad campaigns, smart sales funnels, custom web
                  development, and seamless CRM integrations — all designed to
                  optimize and grow your business.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can you work with startups and established businesses alike?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes, we partner with businesses of all sizes — from startups
                  to global enterprises. Our AI solutions are customized to meet
                  your unique goals and scale with your growth.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How quickly can you launch an AI automation project?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Depending on project complexity, most AI-driven projects are
                  launched within 2–4 weeks, ensuring speed, quality, and
                  precision in every deliverable.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the cost of your AI automation services?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Costs depend on your project’s scope and objectives. After a
                  free consultation, we’ll provide a tailored quote to match
                  your budget and business needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I hire you for a single AI service?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes, you can engage us for individual services like AI
                  funnels, ad campaigns, or automation — or opt for a
                  comprehensive AI-powered solution for maximum impact.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer support after launching an AI project?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. We provide ongoing support, including AI system
                  maintenance, performance monitoring, and continuous
                  optimization to ensure lasting success.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I view your AI automation portfolio?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Definitely! Schedule a free discovery call, and we’ll share
                  relevant case studies and examples of our AI-driven projects
                  tailored to your industry.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </>
  );
}
