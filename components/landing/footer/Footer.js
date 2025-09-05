import React from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";

export function AgencyFooter() {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "AI Automation", href: "/services/ai-automation" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Performance Analytics", href: "/services/analytics" },
        { name: "Brand Strategy", href: "/services/branding" }
    ];

    const company = [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Careers", href: "/careers" }
    ];

    const resources = [
        { name: "Blog", href: "/blog" },
        { name: "Free Tools", href: "/tools" },
        { name: "ROI Calculator", href: "/calculator" },
        { name: "Industry Reports", href: "/reports" },
        { name: "Webinars", href: "/webinars" },
        { name: "Help Center", href: "/help" }
    ];

    const legal = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-neutral-200 dark:border-neutral-700">
            {/* Newsletter & CTA Section */}
            <div className="border-b border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="text-center space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                                Join 500+ growing businesses that trust Autopixel for their digital transformation journey.
                            </p>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-slate-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                />
                                <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base">
                                    Get Free Audit
                                </Button>
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                                No spam. Unsubscribe anytime. Free website audit included.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center items-center gap-6 pt-6">
                            <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                24/7 Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="col-span-2 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Image src="/main-logo.png" alt="Autopixel Logo" width={256} height={256} className="w-auto h-16" />
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                Your trusted partner for digital transformation. We combine AI-powered automation,
                                data-driven marketing, and custom development to deliver exceptional results for growing businesses.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                                <span className="w-4 h-4 mr-3">📍</span>
                                Bengaluru
                            </div>
                            <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                                <span className="w-4 h-4 mr-3">📞</span>
                                +91 8105871804
                            </div>
                            <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                                <span className="w-4 h-4 mr-3">✉️</span>
                                autopixel.in@gmail.com
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                { name: "LinkedIn", icon: "💼", href: "#" },
                                { name: "Twitter", icon: "🐦", href: "#" },
                                { name: "Instagram", icon: "📸", href: "#" },
                                { name: "YouTube", icon: "🎥", href: "#" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-neutral-100 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Services</h3>
                        <ul className="space-y-2">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Company</h3>
                        <ul className="space-y-2">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Resources</h3>
                        <ul className="space-y-2">
                            {resources.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Legal</h3>
                        <ul className="space-y-2">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
                            © {currentYear} Autopixel. All rights reserved. Crafted with ❤️ for growing businesses.
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                            <span className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                All systems operational
                            </span>
                            <span>•</span>
                            <span>99.9% Uptime</span>
                            <span>•</span>
                            <span>SOC 2 Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}