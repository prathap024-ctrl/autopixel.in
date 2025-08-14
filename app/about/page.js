import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

const links = [
  { name: "Who We Are", href: "#" },
  { name: "What We Do", href: "#" },
  { name: "Our Mission", href: "#" },
  { name: "Get in Touch", href: "#" },
];

const stats = [
  { name: "Projects Launched", value: "10+" },
  { name: "Core Team Members", value: "3" },
  { name: "Avg. Turnaround Time", value: "48 hrs" },
  { name: "Client Satisfaction", value: "100%" },
];

export default function AboutPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] py-24 sm:py-32">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading + Intro */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Work with us
          </h2>
          <p className="mt-8 text-lg text-gray-300 sm:text-xl leading-relaxed">
            AutoPixel was founded with a clear goal: to help startups and small
            businesses grow through smart automation and effective digital
            outreach. While we&apos;re early in our journey, our focus is
            razor-sharp and our systems are battle-tested. If you&apos;re
            looking for a hands-on team that moves fast and thinks forward —
            you&apos;re in the right place.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <InteractiveHoverButton className="border-2 border-white text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300">
                  {link.name}
                </InteractiveHoverButton>
              </Link>
            ))}
          </div>

          {/* Stats Section (Optional) */}
          {/*
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-gray-400">{stat.name}</dt>
                <dd className="text-4xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
          */}
        </div>
      </div>
    </section>
  );
}
