"use client";

import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Target, Star, Shield, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Card className="relative isolate overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
          <CardContent className="px-6 py-16 sm:px-12 md:py-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-20">

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-12 opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl -rotate-12 opacity-20 animate-pulse"></div>

            {/* Text Section */}
            <div className="max-w-xl mx-auto text-center lg:mx-0 lg:text-left flex flex-col justify-center relative z-10">

              {/* Trust Badge */}
              <Badge variant="secondary" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200 text-blue-800 mb-6 mx-auto lg:mx-0 w-fit px-4 py-2">
                <Zap className="w-4 h-4" />
                <span>Trusted by 500+ Growing Businesses</span>
              </Badge>

              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-5xl lg:text-6xl leading-tight">
                Transform Your Business with
                <span className="block text-blue-600">AI Automation</span>
              </h2>

              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Stop wasting time on repetitive tasks. Our AI-powered automation solutions help businesses
                <strong className="text-blue-600"> increase productivity by 400%</strong>, reduce operational costs,
                and scale efficiently without hiring additional staff.
              </p>

              {/* Benefits Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="flex items-center space-x-2 p-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-800">98% Accuracy Rate</span>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50/50">
                  <CardContent className="flex items-center space-x-2 p-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-800">ROI in 30 Days</span>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50">
                  <CardContent className="flex items-center space-x-2 p-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-800">24/7 Operation</span>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/consultation" passHref>
                  <InteractiveHoverButton className="group text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Free AI Audit
                  </InteractiveHoverButton>
                </Link>

                <Link href="/case-studies" passHref>
                  <Button variant="outline" size="lg" className="text-base font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300">
                    View Success Stories
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-1 font-medium">4.9/5 Rating</span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Shield className="w-3 h-3 mr-1" />
                  No Setup Fees
                </Badge>
                <div className="h-4 w-px bg-border"></div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Money-Back Guarantee
                </Badge>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative mt-16 lg:mt-0 flex justify-center lg:justify-end">

              {/* Floating Stats Cards */}
              <Card className="absolute -top-8 -left-4 shadow-xl animate-float z-20 bg-white/95 backdrop-blur-sm border-2">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">400%</div>
                  <div className="text-sm text-muted-foreground">Productivity Boost</div>
                </CardContent>
              </Card>

              <Card className="absolute top-16 -right-6 shadow-xl animate-float delay-500 z-20 bg-white/95 backdrop-blur-sm border-2">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">30</div>
                  <div className="text-sm text-muted-foreground">Days to ROI</div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-6 left-8 shadow-xl animate-float delay-1000 z-20 bg-white/95 backdrop-blur-sm border-2">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Automation</div>
                </CardContent>
              </Card>

              {/* Main Image with Enhanced Styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                <Card className="relative z-10 border-4 border-white shadow-2xl overflow-hidden rounded-2xl">
                  <Image
                    alt="AI Business Automation Dashboard - Streamline workflows, automate processes, and boost productivity with intelligent automation tools"
                    src="/automation.jpg"
                    width={700}
                    height={500}
                    className="w-full h-auto max-w-lg lg:max-w-xl"
                    priority
                  />
                </Card>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-30 scale-110 z-0"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Business Automation Services",
            "description": "Professional AI automation solutions to increase business productivity by 400%, reduce costs, and streamline operations.",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Process Automation"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;