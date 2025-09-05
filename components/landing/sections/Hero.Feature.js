"use client";

import { InfiniteMovingCards } from "@/components/infinityCards";
import { Button } from "@headlessui/react";
import React from "react";

export function HeroFeature() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-200/40 dark:bg-grid-slate-800/40" />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                {/* Hero Text Section */}
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        Trusted by 500+ Growing Businesses
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6 leading-tight">
                        Scale Your Business with
                        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            AI-Powered Solutions
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Transform your digital presence with cutting-edge AI automation, data-driven marketing strategies, and enterprise-grade web development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Start Your Transformation
                        </Button>
                        <Button className="px-8 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                            View Case Studies
                        </Button>
                    </div>
                </div>

                {/* Features Carousel */}
                <div className="w-full flex justify-center">
                    <div className="max-w-7xl">
                        <InfiniteMovingCards items={features} direction="right" speed="slow" />
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent" />
        </div>
    );
}

const features = [
    {
        title: "AI Automation",
        description: "Streamline your business operations with intelligent automation that handles repetitive tasks, manages customer inquiries, and optimizes workflows. Our AI solutions reduce operational costs by up to 60% while improving accuracy and response times.",
        category: "Premium",
        metric1: "60%",
        metricLabel1: "Cost Reduction",
        metric2: "24/7",
        metricLabel2: "Availability"
    },
    {
        title: "Digital Marketing",
        description: "Drive explosive growth with data-driven marketing campaigns that target the right audience at the perfect moment. Our proven strategies have generated over $50M in revenue for our clients across various industries.",
        category: "Growth",
        metric1: "300%",
        metricLabel1: "ROI Increase",
        metric2: "2.5x",
        metricLabel2: "Lead Growth"
    },
    {
        title: "Web Development",
        description: "Build lightning-fast, conversion-optimized websites and applications that scale with your business. Our full-stack development approach ensures seamless user experiences across all devices and platforms.",
        category: "Technical",
        metric1: "99.9%",
        metricLabel1: "Uptime",
        metric2: "3x",
        metricLabel2: "Faster Load"
    },
    {
        title: "SEO Optimization",
        description: "Dominate search rankings with our comprehensive SEO strategies that combine technical excellence with content mastery. We've helped businesses achieve first-page rankings for high-competition keywords.",
        category: "Growth",
        metric1: "450%",
        metricLabel1: "Traffic Boost",
        metric2: "#1",
        metricLabel2: "Rankings"
    },
    {
        title: "Performance Analytics",
        description: "Make data-driven decisions with our advanced analytics dashboard that tracks every metric that matters. Get real-time insights into customer behavior, campaign performance, and business growth opportunities.",
        category: "Intelligence",
        metric1: "95%",
        metricLabel1: "Accuracy",
        metric2: "Real-time",
        metricLabel2: "Insights"
    },
    {
        title: "Lead Generation",
        description: "Transform your sales pipeline with our proven lead generation system that attracts, nurtures, and converts high-quality prospects. Our clients typically see a 400% increase in qualified leads within 90 days.",
        category: "Sales",
        metric1: "400%",
        metricLabel1: "More Leads",
        metric2: "90",
        metricLabel2: "Days Setup"
    }
];