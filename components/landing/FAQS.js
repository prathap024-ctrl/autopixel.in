import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Clock, CheckCircle, ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "How does AI automation increase business productivity and ROI?",
      answer: "Our AI automation solutions typically increase business productivity by 300-500% within the first 90 days. We automate repetitive tasks like lead qualification, email marketing, customer support, and data analysis. Clients see an average ROI of 400% by reducing manual labor costs, improving response times from hours to seconds, and eliminating human errors that cost businesses thousands monthly.",
      category: "ROI & Results"
    },
    {
      id: "item-2",
      question: "What specific AI automation services do you provide for growing businesses?",
      answer: "We offer comprehensive AI solutions including intelligent chatbots that handle 80% of customer inquiries, automated sales funnels that convert 35% higher than traditional methods, AI-powered email marketing campaigns, predictive analytics for inventory management, automated social media posting, and smart CRM integrations that track customer behavior and predict buying patterns.",
      category: "Services"
    },
    {
      id: "item-3",
      question: "How quickly can you implement AI automation and see measurable results?",
      answer: "Most AI automation projects are implemented within 2-3 weeks, with initial results visible within 7-14 days. Our fastest deployment was a chatbot system that reduced customer response time from 4 hours to 30 seconds within 48 hours of launch. Complex enterprise solutions typically take 4-6 weeks but show measurable productivity improvements during implementation.",
      category: "Timeline"
    },
    {
      id: "item-4",
      question: "What's the cost structure for AI automation services and expected payback period?",
      answer: "AI automation investments typically range from $2,500-$25,000 depending on complexity and business size. Most clients achieve full payback within 3-6 months through reduced labor costs and increased efficiency. Our starter packages begin at $2,500 and include setup, training, and 90-day optimization support. We offer flexible payment plans and performance-based pricing options.",
      category: "Pricing"
    },
    {
      id: "item-5",
      question: "Do you work with small businesses, startups, and enterprise companies?",
      answer: "Yes, we serve businesses from 5-person startups to Fortune 500 companies. Our solutions scale appropriately - startups typically start with automated lead capture and email sequences, while enterprises implement comprehensive workflow automation across multiple departments. We've helped over 300+ businesses across 15+ industries achieve measurable growth through AI automation.",
      category: "Business Size"
    },
    {
      id: "item-6",
      question: "What ongoing support and maintenance is included with AI automation systems?",
      answer: "All packages include 90 days of optimization support, monthly performance reports, and system monitoring. Our premium support includes 24/7 system monitoring, monthly strategy calls, quarterly performance reviews, and unlimited technical support. We also provide training for your team and documentation to ensure smooth operation and maximum ROI.",
      category: "Support"
    },
    {
      id: "item-7",
      question: "Can you show proven results and case studies from similar businesses?",
      answer: "Absolutely! We have detailed case studies showing a 450% ROI for an e-commerce client, 60% reduction in customer service costs for a SaaS company, and 200% increase in qualified leads for a consulting firm. During our free consultation, we'll share relevant success stories from your industry and provide a custom ROI projection for your business.",
      category: "Proof"
    },
    {
      id: "item-8",
      question: "How do you ensure AI automation integrates with existing business systems?",
      answer: "We conduct a comprehensive audit of your current systems before implementation. Our AI solutions integrate seamlessly with popular platforms like Salesforce, HubSpot, Shopify, WordPress, and 200+ other business tools. We use API connections and custom integrations to ensure data flows smoothly between systems without disrupting your current workflows.",
      category: "Integration"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500 to-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            Get Instant Answers to Your Questions
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-6xl mb-6">
            AI Automation Questions
            <span className="block text-blue-600">Answered by Experts</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about implementing AI automation in your business.
            From <strong className="text-blue-600">ROI expectations</strong> to technical implementation -
            we&apos;ve got the answers to help you make informed decisions.
          </p>

          {/* Quick Stats */}
          <div className="mt-10 flex justify-center items-center flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span><strong className="text-foreground">500+</strong> Successful Implementations</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span><strong className="text-foreground">2-3 Weeks</strong> Average Setup Time</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span><strong className="text-foreground">400%</strong> Average ROI</span>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Category Sidebar */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Question Categories
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="w-full justify-start bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Still Have Questions?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get personalized answers from our AI automation experts
                </p>
                <Link href="/consultation">
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-9">
            <Card className="bg-white/80 backdrop-blur-sm border-2 shadow-xl">
              <CardContent className="p-8 sm:p-12">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                  defaultValue="item-1"
                >
                  {faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border border-gray-200 rounded-xl px-6 data-[state=open]:bg-blue-50/30 transition-colors duration-300"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-foreground hover:text-blue-600 transition-colors">
                        <div className="flex items-start space-x-3">
                          <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-800 text-xs">
                            {faq.category}
                          </Badge>
                          <span className="flex-1">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2 text-muted-foreground leading-relaxed">
                        <div className="ml-20 pl-3 border-l-2 border-blue-200">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 mr-3 text-green-600" />
                Ready to Get Started with AI Automation?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join 500+ businesses already using our AI solutions to increase productivity and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Your AI Transformation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schema.org structured data for FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }} />
      </div>
    </section>
  );
};

export default FAQSection;