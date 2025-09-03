import { AnimatedBeamSection } from "@/layouts/automation";

export default function BentoFeatures() {
  return (
    <section className="py-12 md:py-24 flex flex-col items-center px-4 bg-gray-900">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-center text-pretty text-white mb-4 md:mb-6">
        AI Solutions to Fuel Your Business Growth
      </h2>

      {/* Subheading / Info */}
      <p className="max-w-3xl text-center text-white dark:text-gray-300 text-lg md:text-xl mb-8 md:mb-12">
        Empower your business with intelligent automation and data-driven tools.
        From optimizing workflows to enhancing customer engagement, our
        solutions are designed to save time, boost efficiency, and deliver
        measurable results.
      </p>

      {/* Optional BentoGrid placeholder */}
      {/* 
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
      */}

      {/* Animated Beam Section */}
      <div className="w-full max-w-6xl">
        <AnimatedBeamSection />
      </div>

      {/* Optional CTA / Info below */}
      <p className="mt-8 text-center text-white dark:text-gray-300 text-sm md:text-base max-w-2xl">
        Discover how our AI solutions can help streamline your operations and
        drive smarter business decisions. Transform challenges into growth
        opportunities.
      </p>
    </section>
  );
}
