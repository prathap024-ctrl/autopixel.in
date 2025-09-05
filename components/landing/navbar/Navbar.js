"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Bot,
  TrendingUp,
  Globe,
  BarChart3,
  Zap,
  Users,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Target,
  Rocket,
  Shield,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function AgencyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "AI Automation",
      description: "Streamline operations with intelligent automation",
      icon: Bot,
      href: "/develop",
      badge: "Popular",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that convert",
      icon: TrendingUp,
      href: "/develop",
      badge: "ROI Focused",
    },
    {
      title: "Web Development",
      description: "Custom websites and applications",
      icon: Globe,
      href: "/develop",
      badge: "Full Stack",
    },
    {
      title: "SEO Optimization",
      description: "Dominate search engine rankings",
      icon: Target,
      href: "/develop",
      badge: "Results Driven",
    },
    {
      title: "Performance Analytics",
      description: "Advanced tracking and insights",
      icon: BarChart3,
      href: "/develop",
      badge: "Real-time",
    },
    {
      title: "Brand Strategy",
      description: "Build a powerful brand presence",
      icon: Award,
      href: "/develop",
      badge: "Premium",
    },
  ];

  const company = [
    {
      title: "About Us",
      description: "Our story and mission",
      icon: Users,
      href: "/develop",
    },
    {
      title: "Our Team",
      description: "Meet the experts",
      icon: Star,
      href: "/develop",
    },
    {
      title: "Case Studies",
      description: "Success stories and results",
      icon: Rocket,
      href: "/develop",
    },
    {
      title: "Careers",
      description: "Join our growing team",
      icon: Zap,
      href: "/develop",
    },
  ];

  const ListItem = React.forwardRef(
    (
      { className, title, description, icon: Icon, badge, children, ...props },
      ref
    ) => {
      return (
        <>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium leading-none">
                      {title}
                    </div>
                    {badge && (
                      <Badge variant="secondary" className="text-xs px-2 py-0">
                        {badge}
                      </Badge>
                    )}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                    {description}
                  </p>
                </div>
              </div>
              {children}
            </a>
          </NavigationMenuLink>
        </>
      );
    }
  );
  ListItem.displayName = "ListItem";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <Image
                src="/main-logo.png"
                alt="Logo"
                width={256}
                height={256}
                className="w-auto h-16"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Services Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          description={service.description}
                          href={service.href}
                          icon={service.icon}
                          badge={service.badge}
                        />
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">
                            Need a custom solution?
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Let&apos;s discuss your specific needs
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Get Quote <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <div className="space-y-1">
                      {company.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          href={item.href}
                          icon={item.icon}
                        />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/develop"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/develop"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 8105871804</span>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Start Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-3/4 sm:w-[400px] px-4 overflow-y-auto"
            >
              <SheetHeader className={"sticky top-0 bg-white"}>
                <SheetTitle className="flex items-center space-x-3">
                  <Image
                    src="/main-logo.png"
                    alt="Logo"
                    width={256}
                    height={256}
                    className="w-auto h-8"
                  />
                </SheetTitle>
                <SheetDescription>Digital Growth Agency</SheetDescription>
              </SheetHeader>

              <div className="py-6 space-y-6">
                {/* Mobile Services */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Services
                  </h3>
                  <div className="space-y-2 pl-6">
                    {services.map((service) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Company */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Company
                  </h3>
                  <div className="space-y-2 pl-6">
                    {company.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Simple Links */}
                <div className="space-y-2">
                  {["Portfolio", "Blog", "Contact"].map((link) => (
                    <a
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      className="block py-2 font-medium hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="space-y-4 pt-6 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+91 8105871804</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>hello@autopixel.com</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
