import {
  IconGrowth,
  IconProgressCheck,
  IconStackFront,
  IconTableColumn,
  IconTools,
} from "@tabler/icons-react";
import { Users as IconBrandTeams } from "lucide-react";
import { Funnel, IndianRupee } from "lucide-react";
import Image from "next/image";

export const features = [
  {
    name: "AI That Works 24/7",
    description:
      "Automate the boring stuff. Our AI workflows run nonstop, delivering results while you sleep.",
    icon: IconProgressCheck,
  },
  {
    name: "Speed + Precision",
    description:
      "Agile AI-powered teams that ship high-quality solutions before your competitors even wake up.",
    icon: IconBrandTeams,
  },
  {
    name: "Scale Without Stress",
    description:
      "Automation that grows with you — no bottlenecks, no breakdowns, just smooth scaling.",
    icon: IconGrowth,
  },
  {
    name: "Next-Level Tech",
    description:
      "We pack your business with the latest AI tools so you stay ahead, not catching up.",
    icon: IconTools,
  },
];

export const texts = ["AI Automation", "Digital Marketing", "Web Solutions"];

export const items = [
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

export const FAQs = [
  {
    question: "What AI automation services does AutoPixel provide?",
    answer:
      "We specialize in AI automation, intelligent digital marketing, AI-driven ad campaigns, smart sales funnels, custom web development, and seamless CRM integrations — all designed to optimize and grow your business.",
  },
  {
    question: "Can you work with startups and established businesses alike?",
    answer:
      "Yes, we partner with businesses of all sizes — from startups to global enterprises. Our AI solutions are customized to meet your unique goals and scale with your growth.",
  },
  {
    question: "How quickly can you launch an AI automation project?",
    answer:
      "Depending on project complexity, most AI-driven projects are launched within 2–4 weeks, ensuring speed, quality, and precision in every deliverable.",
  },
  {
    question: "What is the cost of your AI automation services?",
    answer:
      "Costs depend on your project’s scope and objectives. After a free consultation, we’ll provide a tailored quote to match your budget and business needs.",
  },
  {
    question: "Can I hire you for a single AI service?",
    answer:
      "Yes, you can engage us for individual services like AI funnels, ad campaigns, or automation — or opt for a scomprehensive AI-powered solution for maximum impact.",
  },
  {
    question: "Do you offer support after launching an AI project?",
    answer:
      "Absolutely. We provide ongoing support, including AI system maintenance, performance monitoring, and continuous optimization to ensure lasting success.",
  },
  {
    question: "Can I view your AI automation portfolio?",
    answer:
      "Definitely! Schedule a free discovery call, and we’ll share relevant case studies and examples of our AI-driven projects tailored to your industry.",
  },
];

export const posts = [
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

export const FEATURES = [
  {
    icon: "/automation.svg",
    title: "Workflow Automation",
    description: "Streamline operations with custom n8n workflows.",
  },
  {
    icon: "/Growth.svg",
    title: "Digital Marketing",
    description: "Data-driven campaigns to grow your business.",
  },
  {
    icon: "/Content.svg",
    title: "AI Analytics",
    description: "Gain actionable insights from your business data.",
  },
  {
    icon: "/bot.svg",
    title: "24/7 Support",
    description:
      "Round-the-clock assistance to keep your systems running smoothly.",
  },
  {
    icon: "/channel.svg",
    title: "Brand Strategy",
    description:
      "Develop a unique brand identity that stands out in the market.",
  },
  {
    icon: "/build.svg",
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines.",
  },
];
