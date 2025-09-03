// app/about/page.tsx (Next.js 13+)
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About AutoPixel | Automation & Digital Outreach for Start-Ups',
  description:
    'AutoPixel helps early-stage companies scale with no-code automation, AI outreach funnels and growth systems that deliver ROI in under 48 h. 100 % satisfaction record.',
  openGraph: {
    title: 'About AutoPixel – Automation & Digital Outreach Experts',
    description:
      'Meet the team that moves fast, thinks forward and turns tech into traction for ambitious founders.',
    url: 'https://autopixel.io/about',
    siteName: 'AutoPixel',
    images: [{ url: 'https://autopixel.io/og-about.jpg', width: 1200, height: 630 }],
  },
};

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We tie every automation to a KPI. If it can’t be measured, it can’t be improved.',
  },
  {
    icon: Users,
    title: 'Founder-First',
    description:
      'Your runway is sacred. We act like co-founders, not vendors—transparent, agile, invested.',
  },
  {
    icon: Zap,
    title: 'Speed & Iterate',
    description:
      'Ship in days, not quarters. Real-world data beats slide-deck assumptions every time.',
  },
  {
    icon: Award,
    title: 'Craft Excellence',
    description:
      'Battle-tested playbooks, peer-reviewed code and pixel-perfect UX—no shortcuts.',
  },
];

const stats = [
  { label: 'Revenue-Focused Workflows Built', value: '120+' },
  { label: 'Start-Ups Scaled', value: '30+' },
  { label: 'Median Time-to-Value', value: '48 h' },
  { label: 'Client Retention Rate', value: '100 %' },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AutoPixel',
            url: 'https://autopixel.io',
            logo: 'https://autopixel.io/logo.png',
            sameAs: ['https://twitter.com/autopixel_io'],
            foundingDate: '2023',
            founders: [{ '@type': 'Person', name: 'TBD' }],
            description:
              'AutoPixel designs no-code automation and AI-powered outreach systems that help start-ups acquire customers faster.',
          }),
        }}
      />

      <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -z-10 left-1/2 -translate-x-1/2 transform-gpu blur-3xl opacity-30"
        >
          <div className="aspect-[1440/480] w-[80rem] bg-gradient-to-tr from-white/20 to-white/0" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Hero text */}
          <header className="mx-auto max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              We turn tech into traction for early-stage start-ups
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              AutoPixel is a boutique growth-engineering studio that builds
              no-code automation, AI outreach funnels and data-driven marketing
              systems—so founders can focus on product, not pipelines.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="#values">
                <InteractiveHoverButton className="bg-white text-gray-900 border-white border-2">
                  Our values
                </InteractiveHoverButton>
              </Link>
              <Link href="/contact">
                <InteractiveHoverButton className="bg-white text-gray-900 border-white border-2 hover:bg-white/10">
                  Book a strategy call
                </InteractiveHoverButton>
              </Link>
            </div>
          </header>

          {/* Stats */}
          <section aria-labelledby="stats-heading" className="mx-auto mt-20 max-w-5xl">
            <h2 id="stats-heading" className="sr-only">
              Quick facts
            </h2>
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <dt className="order-last mt-2 text-sm text-blue-100">{label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Values */}
          <section id="values" aria-labelledby="values-heading" className="mt-32 scroll-mt-20">
            <div className="text-center">
              <h2 id="values-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Engineering principles that scale
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                These four values keep every automation project fast, frictionless and
                ROI-positive.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="relative rounded-2xl border-white/10 bg-white/90 shadow-lg backdrop-blur transition hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mx-auto mt-32 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to automate your growth?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Book a free 30-minute audit. We’ll map your current funnel and show you
              three automations that can add 20 % more qualified leads within 30 days.
            </p>
            <Link href="/contact">
              <InteractiveHoverButton className="mt-8 bg-white text-gray-900 border-white border-2">
                Claim your free audit
              </InteractiveHoverButton>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}