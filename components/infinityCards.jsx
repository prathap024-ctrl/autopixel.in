"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  TrendingUp,
  Globe,
  Zap,
  Target,
  Code,
  BarChart3,
  Rocket,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };

  const getFeatureIcon = (title) => {
    const iconMap = {
      "AI Automation": Bot,
      "Digital Marketing": TrendingUp,
      "Web Development": Globe,
      "SEO Optimization": Target,
      "Performance Analytics": BarChart3,
      "Lead Generation": Rocket,
      "Brand Strategy": Sparkles,
      "Security Solutions": Shield,
    };

    const IconComponent = iconMap[title] || Zap;
    return <IconComponent className="w-6 h-6" />;
  };

  const getGradientClass = (title) => {
    const gradients = {
      "AI Automation": "from-blue-500 to-cyan-500",
      "Digital Marketing": "from-emerald-500 to-green-500",
      "Web Development": "from-purple-500 to-pink-500",
      "SEO Optimization": "from-orange-500 to-red-500",
      "Performance Analytics": "from-indigo-500 to-purple-500",
      "Lead Generation": "from-rose-500 to-pink-500",
      "Brand Strategy": "from-amber-500 to-orange-500",
      "Security Solutions": "from-slate-500 to-gray-500",
    };

    return gradients[title] || "from-blue-500 to-purple-500";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((feature, idx) => (
          <li
            className="group relative w-[340px] max-w-full shrink-0 rounded-2xl border border-border bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 md:w-[380px] overflow-hidden"
            key={`${feature.title}-${idx}`}
          >
            {/* Animated Background Gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500",
                getGradientClass(feature.title)
              )}
            />

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300" />
              <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-500" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={cn(
                    "p-3 rounded-xl bg-gradient-to-br text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300",
                    getGradientClass(feature.title)
                  )}
                >
                  {getFeatureIcon(feature.title)}
                </div>
                <Badge
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm"
                >
                  {feature.category || "Premium"}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                {feature.description}
              </p>

              {/* Metrics */}
              <div className="flex items-center justify-between mb-6 p-3 rounded-lg bg-muted/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {feature.metric1}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.metricLabel1}
                  </div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {feature.metric2}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.metricLabel2}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
