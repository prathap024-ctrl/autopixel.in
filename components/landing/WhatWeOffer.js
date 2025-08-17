import { ExpandableCardSection } from "@/layouts/Spotlight";
import React from "react";

const WhatWeOffer = () => {
  return (
    <section className="py-16 md:py-24 border-b-2 bg-[#F9FAFB] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <p className="mt-4 text-[#111827] dark:text-gray-300 max-w-2xl">
            Explore our AI-powered solutions designed to optimize your business,
            drive growth, and simplify complex processes.
          </p>
        </div>

        {/* Expandable Cards */}
        <div className="w-full">
          <ExpandableCardSection />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
