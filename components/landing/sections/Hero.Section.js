import React from "react";
import { BackgroundLines } from "@/components/BackgroundLines";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@headlessui/react";

const services = [
    "Digital Marketing",
    "Web Development",
    "AI Automation",
    "SEO Optimization",
    "Performance Analytics",
    "Brand Strategy"
];

export function HeroSection() {
    return (
        <BackgroundLines
            variant="agency"
            className="flex items-center bg-white justify-center w-full h-auto flex-col mt-16 md:mt-20"
            svgOptions={{ duration: 10, intensity: 1.2 }}
        >
            <div className="max-w-5xl mx-auto text-center relative z-20">
                {/* Trust Badge */}
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-2 sm:mb-4 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="hidden xs:inline">Trusted by 500+ Growing Businesses</span>
                    <span className="xs:hidden">500+ Happy Clients</span>
                </div>

                {/* Main Headline - SEO Optimized */}
                <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-400 text-2xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-sans px-2 py-2 sm:py-4 lg:py-6 font-bold tracking-tight leading-tight">
                    <span className="block sm:inline">Autopixel - Your Growth Partner for</span>
                    <br className="block" />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                        <WordRotate words={services} className="inline" duration={3000} />
                    </span>
                </h1>

                {/* SEO-Friendly Description */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed px-2 sm:px-0">
                        Transform your business with our comprehensive digital solutions. We specialize in
                        <strong className="text-blue-600 dark:text-blue-400"> AI-powered automation</strong>,
                        <strong className="text-emerald-600 dark:text-emerald-400"> data-driven marketing</strong>, and
                        <strong className="text-purple-600 dark:text-purple-400"> custom web development </strong>
                        that delivers measurable results.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 px-2 sm:px-0">
                        From increasing your online visibility through expert SEO strategies to building
                        conversion-optimized websites and implementing intelligent automation systems -
                        we&apos;re your one-stop solution for digital growth.
                    </p>
                </div>

                {/* Key Benefits - SEO Keywords */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                    {[
                        { icon: "🚀", text: "300% ROI Increase", desc: "Average client growth" },
                        { icon: "⚡", text: "24/7 AI Support", desc: "Automated assistance" },
                        { icon: "📈", text: "98% Success Rate", desc: "Project completion" },
                        { icon: "🔥", text: "48 Hours", desc: "Average setup time" }
                    ].map((benefit, index) => (
                        <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-200">
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{benefit.icon}</div>
                            <div className="font-bold text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm lg:text-base">{benefit.text}</div>
                            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{benefit.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-10 px-4 sm:px-0">
                    <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                        <span className="hidden sm:inline">Start Your Digital Transformation</span>
                        <span className="sm:hidden">Get Started Today</span>
                        <span className="ml-2">→</span>
                    </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                    <div className="flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2"></span>
                        Free Strategy Consultation
                    </div>
                    <div className="flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2"></span>
                        Setup Within 48 Hours
                    </div>
                </div>
            </div>
        </BackgroundLines>
    );
}