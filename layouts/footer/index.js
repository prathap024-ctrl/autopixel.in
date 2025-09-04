"use client";

import Image from "next/image";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Image
            src="/main_color_logo.png"
            alt="AutoPixel Logo"
            width={150}
            height={150}
            className="h-auto w-auto bg-white rounded-full"
          />
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-lg">AutoPixel</span>
            <br />
            AI-Powered Marketing, Automation & Client Acquisition Systems.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-base font-bold uppercase mb-3">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className=" transition-colors">
                AI Voice Agents
              </Link>
            </li>
            <li>
              <Link href="/" className=" transition-colors">
                Multi-Channel Outreach
              </Link>
            </li>
            <li>
              <Link href="/" className=" transition-colors">
                Funnels & Landing Pages
              </Link>
            </li>
            <li>
              <Link href="/" className=" transition-colors">
                Automation Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-base font-bold uppercase mb-3">Company</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className=" transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className=" transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className=" transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-base font-bold uppercase mb-3">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/terms"
                className=" transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className=" transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className=" transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} AutoPixel. All rights reserved.
      </div>

      {/* Background Logo */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/main_color_logo.png"
          alt="AutoPixel Logo"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </footer>
  );
};

export default FooterLayout;
