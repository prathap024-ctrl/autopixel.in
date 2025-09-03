import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          AI Automation FAQs
        </h2>

        <div className="w-full md:max-w-3xl bg-white border-2 border-gray-900 p-6 sm:p-12 rounded-3xl shadow-lg">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What AI automation services does AutoPixel provide?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                We specialize in AI automation, intelligent digital marketing,
                AI-driven ad campaigns, smart sales funnels, custom web
                development, and seamless CRM integrations — all designed to
                optimize and grow your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can you work with startups and established businesses alike?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Yes, we partner with businesses of all sizes — from startups to
                global enterprises. Our AI solutions are customized to meet your
                unique goals and scale with your growth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How quickly can you launch an AI automation project?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Depending on project complexity, most AI-driven projects are
                launched within 2–4 weeks, ensuring speed, quality, and
                precision in every deliverable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the cost of your AI automation services?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Costs depend on your project’s scope and objectives. After a
                free consultation, we’ll provide a tailored quote to match your
                budget and business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I hire you for a single AI service?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Yes, you can engage us for individual services like AI funnels,
                ad campaigns, or automation — or opt for a comprehensive
                AI-powered solution for maximum impact.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer support after launching an AI project?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Absolutely. We provide ongoing support, including AI system
                maintenance, performance monitoring, and continuous optimization
                to ensure lasting success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I view your AI automation portfolio?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                Definitely! Schedule a free discovery call, and we’ll share
                relevant case studies and examples of our AI-driven projects
                tailored to your industry.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
