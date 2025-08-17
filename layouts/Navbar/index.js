"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function NavbarLayout() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleclick = () => {
    router.push("/contact");
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Image
            src="/main_color_logo.png"
            alt="autopixel.in"
            width={150}
            height={150}
          />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <InteractiveHoverButton
              onClick={() => router.push("/contact")}
              className="border-2 border-gray-900"
            >
              Enquire Now
            </InteractiveHoverButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Image
              src="/main_color_logo.png"
              alt="autopixel.in"
              width={128}
              height={128}
            />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-gray-900"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <InteractiveHoverButton
                onClick={handleclick}
                className="w-full border-2 border-gray-900"
              >
                Enquire Now
              </InteractiveHoverButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
