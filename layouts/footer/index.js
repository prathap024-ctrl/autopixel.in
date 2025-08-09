"use client";

import Image from "next/image";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10 text-gray-900">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Image
            src="/main_color_logo.png"
            alt="AutoPixel Logo"
            width={150}
            height={150}
          />
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-lg">AutoPixel</span>
            <br />
            AI-Powered Marketing, Automation & Client Acquisition Systems.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="footer-title mb-2 text-base font-bold uppercase">
            Services
          </h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="link link-hover">
                AI Voice Agents
              </Link>
            </li>
            <li>
              <Link href="/" className="link link-hover">
                Multi-Channel Outreach
              </Link>
            </li>
            <li>
              <Link href="/" className="link link-hover">
                Funnels & Landing Pages
              </Link>
            </li>
            <li>
              <Link href="/" className="link link-hover">
                Automation Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title mb-2 text-base font-bold uppercase">
            Company
          </h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="link link-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link link-hover">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="link link-hover">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="link link-hover">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title mb-2 text-base font-bold uppercase">
            Legal
          </h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="link link-hover">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="link link-hover">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="link link-hover">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AutoPixel. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterLayout;
