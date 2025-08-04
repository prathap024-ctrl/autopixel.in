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
    name: "Streamlined Process",
    description:
      "A clear, step-by-step approach that keeps everything transparent and predictable.",
    icon: IconProgressCheck,
  },
  {
    name: "Agile Team, Rapid Delivery",
    description:
      "A lean setup built for speed — we execute fast without sacrificing quality.",
    icon: IconBrandTeams,
  },
  {
    name: "Built for Growth",
    description:
      "Scaling is in our DNA — we design systems and strategies to help you grow sustainably.",
    icon: IconGrowth,
  },
  {
    name: "Future-Ready Tech",
    description:
      "From AI to automation, we use the latest tools that drive performance and keep you ahead.",
    icon: IconTools,
  },
];

const texts = ["AI Automation", "Digital Marketing", "Web Development"];

const Skeleton = () => <div></div>;

const items = [
  {
    title: "Performance Ads",
    description:
      "We run targeted ad campaigns designed to drive clicks, leads, and real business growth.",
    header: (
      <Image
        src="/personalized_ads.svg"
        alt="Performance Ads"
        width={500}
        height={500}
        className="w-full h-50 object-contain rounded-xl"
      />
    ),
    className: "md:col-span-2",
    icon: <IndianRupee className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conversion Funnels",
    description:
      "From landing pages to automated flows — we build funnels that turn traffic into customers.",
    header: (
      <Image
        src="/Filter-bro.svg"
        alt="Conversion Funnel"
        width={500}
        height={500}
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <Funnel className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Growth Strategy",
    description:
      "Custom marketing strategies built around your goals, audience, and growth stage.",
    header: (
      <Image
        src="/Growth.svg"
        alt="Conversion Funnel"
        width={500}
        height={500}
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: "md:col-span-1",
    icon: <IconStackFront className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creative Content",
    description:
      "We design thumb-stopping visuals and messaging that bring your brand and campaigns to life.",
    header: (
      <Image
        src="/Content.svg"
        alt="Conversion Funnel"
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
      "Automate interactions with intelligent voice and chat agents that handle support, qualify leads, and drive conversions.",
    name: "🤖 AI Agents That Never Sleep",
    title: "",
  },
  {
    quote:
      "We focus on real results — more traffic, better leads, and measurable growth, not just vanity metrics.",
    name: "📊 Marketing That Actually Converts",
    title: "",
  },
  {
    quote:
      "Fast, modern websites tailored to your brand — designed to engage visitors and turn them into paying customers.",
    name: "🌐 Websites Built to Perform",
    title: "",
  },
  {
    quote:
      "Connect your apps, simplify your processes, and free up hours each week with custom-built automation flows.",
    name: "🔄 Automation That Saves Time",
    title: "",
  },
  {
    quote:
      "We design and optimize sales funnels that guide your audience from first click to final conversion — seamlessly.",
    name: "🚀 Funnels That Drive Sales",
    title: "",
  },
  {
    quote:
      "We blend AI-driven insights with real-world expertise to craft clear, strategic solutions that accelerate business growth.",
    name: "🧠 Smarter Strategy Backed by Data",
    title: "",
  },
];

const posts = [
  {
    id: 1,
    title: "5 Funnel Mistakes That Are Killing Your Conversions",
    href: "#",
    description:
      "A breakdown of common funnel flaws and how to fix them to turn more clicks into paying customers.",
    date: "Aug 01, 2025",
    datetime: "2025-08-01",
    category: { title: "Funnels", href: "#" },
    author: {
      name: "",
      role: "",
      href: "#",
      imageUrl: "/user-round.svg",
    },
  },
  {
    id: 2,
    title:
      "Using AI to Automate Customer Support (Without Losing the Human Touch)",
    href: "#",
    description:
      "Learn how AI voice and chat agents can improve customer experience, reduce workload, and stay on-brand.",
    date: "Jul 25, 2025",
    datetime: "2025-07-25",
    category: { title: "Automation", href: "#" },
    author: {
      name: "",
      role: "",
      href: "#",
      imageUrl: "user-round.svg",
    },
  },
  {
    id: 3,
    title: "Scaling Smart: A Lean Strategy for Service-Based Businesses",
    href: "#",
    description:
      "Discover how lean teams can use automation, digital funnels, and smart tools to scale without burning out.",
    date: "Jul 18, 2025",
    datetime: "2025-07-18",
    category: { title: "Growth", href: "#" },
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
                <span className="text-4xl">Smarter Growth Starts Here</span>{" "}
                <WordRotate words={texts} />
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8">
                At AutoPixel, we help businesses simplify the complicated. From
                intelligent AI workflows to high-converting websites and
                marketing that actually works — we build systems that save time
                and boost results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <InteractiveHoverButton
                  className="border border-white"
                  onClick={handleClick}
                >
                  Book a Free Discovery Call
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we offer */}
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-4 md:mb-8">
          What Drives Us
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
                  Our Operating Framework
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg/8 text-white">
                  We’re built for speed, clarity, and results — the kind of team
                  you&apos;d want in your corner from day one.
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
              alt="Product screenshot"
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
          What We Build to Power Your Growth
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
                Ready to Build Smarter, Scale Faster?
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-900">
                Let’s turn your ideas into automated systems, high-performing
                funnels, and campaigns that actually move the needle. No fluff —
                just results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/"
                  className="text-sm/6 font-semibold text-gray-900 hover:text-gray-100"
                >
                  <InteractiveHoverButton>
                    Book a Free Strategy Call
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src="/build.svg"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
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
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Learn how to grow your business with our expert advice.
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

      {/* faq section */}
      <div className="bg-gradient-to-r from-gray-900 to-black h-fit py-24 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white mb-12">
          Frequently Asked Questions
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
                What services does AutoPixel offer?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer AI automation, digital marketing, paid ad campaigns,
                  sales funnels, custom web development, and CRM integration —
                  all tailored to help you grow efficiently.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do you work with startups or only established brands?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We work with businesses of all sizes — from early-stage
                  startups to established agencies and enterprises. Our
                  solutions scale with your needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long does it take to launch a project?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Most projects are delivered within 2–4 weeks, depending on
                  complexity. We move fast while ensuring top quality and smooth
                  delivery.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How much do your services cost?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Pricing varies based on your goals and scope of work. After a
                  free consultation, we’ll provide a custom quote that fits your
                  budget and priorities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I hire you for just one service?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. You can hire us for a single service like funnel
                  setup, paid ads, or automation — or combine multiple services
                  for a full-stack solution.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you provide post-launch support?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes, we offer post-launch support including system
                  maintenance, performance tracking, and ongoing optimization —
                  so you’re never left hanging.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I see examples of your work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Of course. We’re happy to share case studies or portfolio
                  pieces relevant to your business. Just book a discovery call
                  to get started.
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
