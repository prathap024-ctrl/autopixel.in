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
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-10 w-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[100%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4 md:mt-0 mt-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-justify"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-justify text-xs md:text-sm lg:text-base h-40 md:h-fit pb-4 flex flex-col items-start gap-4 dark:text-neutral-400 "
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid md:grid-cols-2 grid-cols-1 mx-auto max-w-5xl w-full px-4 md:px-0 gap-4 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row border justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              {/* Render icon if src is React element, else render Image */}
              {React.isValidElement(card.src) ? (
                React.cloneElement(card.src, {
                  size: 64,
                  className:
                    "h-10 w-10 md:h-14 md:w-14 rounded-lg text-gray-900 dark:text-gray-300",
                })
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              )}
            </motion.div>
            <div className="flex gap-4">
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-justify md:text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 w-full md:w-fit text-sm rounded-full font-bold cursor-pointer hover:bg-gray-900 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
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
