import Image from "next/image";
import { features } from "@/data/landingData";

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-100 py-24 sm:py-32 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-3xl gap-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-base font-semibold">Our AI-Driven Approach</h2>
            <p className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-pretty">
              Intelligent Automation, Made Simple
            </p>
            <p className="mt-6 text-lg leading-8">
              We combine AI expertise with agile execution to deliver fast,
              effective, and scalable solutions that transform your business.
            </p>

            {/* Feature List */}
            <dl className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start gap-3">
                  <feature.icon
                    aria-hidden="true"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <dt className="font-semibold">{feature.name}</dt>
                    <dd>{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              alt="Illustration of AI Automation Dashboard"
              src="/image1.svg"
              width={500}
              height={400}
              className="w-full max-w-md lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
