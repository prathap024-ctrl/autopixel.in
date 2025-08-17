import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-blue-100 border-b-2 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-3xl bg-white border-2 border-gray-900 px-6 py-12 shadow-2xl sm:px-12 md:py-16 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:px-16">
          {/* Text Section */}
          <div className="max-w-lg mx-auto text-center lg:mx-0 lg:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Supercharge Your Business with AI Automation
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Ready to automate processes, optimize funnels, and scale smarter?
              Our AI-driven solutions deliver measurable results with no fluff —
              just impact.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="/" passHref>
                <InteractiveHoverButton className="text-sm font-semibold">
                  Discuss Now
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <Image
              alt="AI Automation Workflow"
              src="/build.svg"
              width={700}
              height={500}
              className="w-full h-auto max-w-md lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
