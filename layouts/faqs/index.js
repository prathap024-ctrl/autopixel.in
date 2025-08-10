import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-black h-fit py-24 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-12">
          AI Automation FAQs
        </h2>

        <div className="w-full md:max-w-3/4 bg-white p-4 md:p-12 text-gray-900 rounded-3xl">
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
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We specialize in AI automation, intelligent digital marketing,
                  AI-driven ad campaigns, smart sales funnels, custom web
                  development, and seamless CRM integrations — all designed to
                  optimize and grow your business.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can you work with startups and established businesses alike?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes, we partner with businesses of all sizes — from startups
                  to global enterprises. Our AI solutions are customized to meet
                  your unique goals and scale with your growth.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How quickly can you launch an AI automation project?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Depending on project complexity, most AI-driven projects are
                  launched within 2–4 weeks, ensuring speed, quality, and
                  precision in every deliverable.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the cost of your AI automation services?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Costs depend on your project’s scope and objectives. After a
                  free consultation, we’ll provide a tailored quote to match
                  your budget and business needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I hire you for a single AI service?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes, you can engage us for individual services like AI
                  funnels, ad campaigns, or automation — or opt for a
                  comprehensive AI-powered solution for maximum impact.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer support after launching an AI project?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. We provide ongoing support, including AI system
                  maintenance, performance monitoring, and continuous
                  optimization to ensure lasting success.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I view your AI automation portfolio?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Definitely! Schedule a free discovery call, and we’ll share
                  relevant case studies and examples of our AI-driven projects
                  tailored to your industry.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
