"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import {
  Brain,
  Laptop,
  Palette,
  Settings,
  TrendingUp,
  Zap,
} from "lucide-react";
import { IconSeedling } from "@tabler/icons-react";

export function ExpandableCardSection() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-20"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-30 grid place-items-center px-4">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {active.title}
                </motion.h3>
                <button
                  onClick={() => setActive(null)}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>
              <motion.p
                layoutId={`description-${active.description}-${id}`}
                className="text-gray-700 dark:text-gray-300 text-justify mb-4"
              >
                {active.description}
              </motion.p>
              <motion.div className="text-gray-600 dark:text-gray-400 space-y-4 text-sm md:text-base overflow-y-auto max-h-80">
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards Grid */}
      <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.li
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-gradient-to-r from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex-shrink-0">
              {React.isValidElement(card.src) ? (
                React.cloneElement(card.src, {
                  size: 48,
                  className: "text-gray-800 dark:text-gray-200",
                })
              ) : (
                <Image
                  src={card.src}
                  alt={card.title}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-3 mt-1">
                {card.description}
              </p>
            </div>
            <button className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-semibold text-sm transition">
              {card.ctaText}
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Helping brands thrive online with ROI-focused SEO, email marketing, and performance analytics.",
    title: "Growth-Driven Internet Marketing",
    src: <TrendingUp />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>SEO Services</strong>
            <br />
            We help your website show up higher on Google so more people can
            find you. From local searches to link building, we make your site
            easier to discover.
          </p>
          <br />
          <p>
            <strong>Conversion Rate Optimization</strong>
            <br />
            Your visitors are already coming — we help more of them become
            customers. Small changes can make a big difference in sales and
            leads.
          </p>
          <br />
          <p>
            <strong>Email Marketing</strong>
            <br />
            Stay in touch with your audience using friendly, automated emails.
            It’s a simple way to bring customers back again and again.
          </p>
          <br />
          <p>
            <strong>Website Analytics</strong>
            <br />
            See what’s working and what’s not on your website. We use clear
            reports and tools like GA4 to guide smart decisions.
          </p>
          <br />
          <p>
            <strong>Website Check-up</strong>
            <br />
            Think of it like a health check for your website. We find and fix
            problems that slow it down or hurt performance.
          </p>
        </div>
      );
    },
  },
  {
    description:
      "Deliver your message to the right people at the right time with ads that perform.",
    title: "Creative Ads That Convert",
    src: <Zap />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>Google Search Ads</strong>
            <br />
            Be seen at the very top of Google when people search for what you
            offer. Fast, targeted ads that bring customers to you instantly.
          </p>
          <br />
          <p>
            <strong>Banner & Display Promotions</strong>
            <br />
            Show your brand on popular websites and apps your audience visits
            every day. Bright, eye-catching visuals that keep you top of mind.
          </p>
          <br />
          <p>
            <strong>Video Promotions</strong>
            <br />
            Grab attention with short, powerful videos on YouTube and beyond.{" "}
            Perfect for telling your story in seconds.
          </p>
          <br />
          <p>
            <strong>Professional Network Ads</strong>
            <br />
            Connect directly with business owners and decision-makers. The best
            way to get noticed in the professional world.
          </p>
          <br />
          <p>
            <strong>Product Shopping Campaigns</strong>
            <br />
            Show your products with pictures and prices right in Google search.{" "}
            Reach people who are ready to buy now.
          </p>
        </div>
      );
    },
  },

  {
    description:
      "Complete digital marketing made simple — strategy, content, and automation to increase your visibility and profits.",
    title: "Helping Brands Grow & Stand Out",
    src: <IconSeedling />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>Complete Campaign Management</strong>
            <br />
            Plan, run, and optimize full-scale digital campaigns across SEO,
            paid ads, social media, and email. We handle everything from launch
            to measurable results.
          </p>
          <br />
          <p>
            <strong>Social Media Growth (Organic + Paid)</strong>
            <br />
            Build your brand with engaging content, creative ads, and strategies
            tailored for each platform. Grow followers, boost engagement, and
            increase sales.
          </p>
          <br />
          <p>
            <strong>Content Strategy & Automation</strong>
            <br />
            Create SEO-rich, high-converting content at scale using tools like
            HubSpot, Mailchimp, and AI. Save time while reaching more of the
            right audience.
          </p>
          <br />
          <p>
            <strong>AI-Driven SEO Content</strong>
            <br />
            Leverage automation and AI to craft content that ranks on Google and
            features in AI-powered answers. Stay ahead of competitors in search
            visibility.
          </p>
          <br />
          <p>
            <strong>Targeted B2B & Local Leads</strong>
            <br />
            Reach ideal customers through LinkedIn, Google Ads, and
            location-based marketing funnels. We design campaigns that deliver
            high-quality leads.
          </p>
        </div>
      );
    },
  },
  {
    description:
      "We help you build a unique brand that stands out and earns trust. By crafting a strong visual identity, your business will be instantly recognizable and memorable to your customers.",
    title: "Brand Creation & Visual Identity",
    src: <Palette />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>Custom Logo Design</strong>
            <br />
            Your logo is the face of your brand. We design logos that are not
            just visually appealing but also reflect your brand’s values and
            personality, making a lasting impression.
          </p>
          <br />
          <p>
            <strong>Strategic Brand Positioning</strong>
            <br />
            We work with you to define your brand’s voice, messaging, and market
            position. This ensures your brand communicates clearly, connects
            deeply with your ideal audience, and stands apart from competitors.
          </p>
          <br />
          <p>
            <strong>Professional Copywriting</strong>
            <br />
            Words matter. Our expert copywriters create clear, persuasive
            content that tells your brand’s story, highlights your unique value,
            and motivates customers to take action.
          </p>
        </div>
      );
    },
  },
  {
    description:
      "We create data-driven growth plans tailored specifically to your industry and business stage.Our strategies help you move smoothly through every step of the marketing funnel.",
    title: "Marketing Strategy & Consulting",
    src: <Brain />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>Expert Marketing Guidance</strong> <br />
            Get personalized advice and support from certified marketing
            strategists. We guide you to make smarter decisions that accelerate
            growth.
          </p>
          <br />
          <p>
            <strong>Integrated Digital Strategy</strong> <br />
            Bring together your content, SEO, PPC, and automation into one
            cohesive plan. This ensures every channel works together to deliver
            better results.
          </p>
          <br />
          <p>
            <strong>Performance Analysis & Audits</strong> <br />
            We dive deep into your marketing data to find what’s working and
            what needs fixing. Our insights help you optimize your campaigns for
            maximum impact.
          </p>
        </div>
      );
    },
  },
  {
    description:
      " We build visually appealing, user-friendly websites optimized for local search and mobile devices. Our focus is on creating sites that attract visitors and convert them into customers.",
    title: "Website Creation & Development",
    src: <Settings />,
    ctaText: "Read more",
    content: () => {
      return (
        <div>
          <p>
            <strong>Responsive Web Design</strong> <br />
            Responsive designs that adapt smoothly across desktops, tablets, and
            smartphones. Ensuring your site looks perfect on every screen size.
          </p>
          <br />
          <p>
            <strong>Landing Page Optimization</strong> <br />
            Custom landing pages crafted to maximize visitor engagement and
            boost conversion rates. Designed with clear calls-to-action to turn
            visitors into leads.
          </p>
          <br />
          <p>
            <strong>User Experience (UX) & Interface Design (UI)</strong> <br />
            Improve the user experience by creating intuitive navigation and
            seamless interaction flows. Making your website easy and enjoyable
            to use.
          </p>
          <br />
          <p>
            <strong>Technical SEO Implementation</strong> <br />
            Optimize your website for fast loading speeds, mobile-first
            performance, and rich snippets. We implement structured data and
            best SEO practices to help your site rank higher on search engines.
          </p>
        </div>
      );
    },
  },
];
