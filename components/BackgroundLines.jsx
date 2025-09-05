"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions = {},
  variant = "default",
}) => {
  return (
    <div
      className={cn(
        "relative h-[20rem] md:h-screen w-full overflow-hidden",
        variant === "agency"
          ? "bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/20"
          : "bg-white dark:bg-black",
        className
      )}
    >
      <SVG svgOptions={svgOptions} variant={variant} />
      {children}
    </div>
  );
};

const pathVariants = {
  initial: {
    strokeDashoffset: 1000,
    strokeDasharray: "50 1000",
    opacity: 0,
  },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "30 1000",
    opacity: [0, 0.8, 0.8, 0.3, 0],
  },
};

const pulseVariants = {
  initial: {
    strokeDashoffset: 800,
    strokeDasharray: "20 800",
    opacity: 0,
    filter: "blur(0px)",
  },
  animate: {
    strokeDashoffset: -800,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
    filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
  },
};

const SVG = ({ svgOptions = {}, variant = "default" }) => {
  // Enhanced paths for more dynamic design
  const paths = [
    // Central flowing paths
    "M720 450C720 450 800 420 850 380C900 340 950 300 1000 280C1050 260 1100 240 1150 200",
    "M720 450C720 450 640 420 590 380C540 340 490 300 440 280C390 260 340 240 290 200",

    // Vertical flowing lines
    "M720 450C720 450 720 350 720 300C720 250 720 200 720 150C720 100 720 50 720 0",
    "M720 450C720 450 720 550 720 600C720 650 720 700 720 750C720 800 720 850 720 900",

    // Diagonal network lines
    "M200 200C200 200 400 250 600 300C800 350 1000 400 1200 450",
    "M200 700C200 700 400 650 600 600C800 550 1000 500 1200 450",

    // Curved flowing paths
    "M100 450C100 450 300 350 500 400C700 450 900 500 1100 400C1300 300 1400 450",
    "M1340 450C1340 450 1140 350 940 400C740 450 540 500 340 400C140 300 40 450",

    // Circuit-like patterns
    "M0 300L200 300L200 200L400 200L400 400L600 400L600 100L800 100",
    "M1440 300L1240 300L1240 200L1040 200L1040 400L840 400L840 100L640 100",

    // Organic flowing curves
    "M720 0C720 0 620 100 720 200C820 300 620 400 720 500C820 600 620 700 720 800",
    "M0 450C0 450 200 350 400 450C600 550 800 350 1000 450C1200 550 1440 450",

    // Grid intersection lines
    "M360 0L360 900M720 0L720 900M1080 0L1080 900",
    "M0 225L1440 225M0 450L1440 450M0 675L1440 675",

    // Spiral patterns
    "M720 450C720 450 770 400 820 450C870 500 820 550 770 500C720 450 720 400 720 450",
    "M720 450C720 450 670 400 620 450C570 500 620 550 670 500C720 450 720 400 720 450",
  ];

  // Enhanced color schemes based on variant
  const getColors = () => {
    if (variant === "agency") {
      return [
        "#3B82F6", // Blue
        "#8B5CF6", // Purple
        "#10B981", // Emerald
        "#F59E0B", // Amber
        "#EF4444", // Red
        "#06B6D4", // Cyan
        "#8B5CF6", // Violet
        "#10B981", // Green
        "#F97316", // Orange
        "#EC4899", // Pink
        "#6366F1", // Indigo
        "#14B8A6", // Teal
        "#84CC16", // Lime
        "#F43F5E", // Rose
        "#A855F7", // Purple variant
        "#0EA5E9", // Sky
      ];
    }

    // Default colors (keeping original for backward compatibility)
    return [
      "#46A5CA",
      "#8C2F2F",
      "#4FAE4D",
      "#D6590C",
      "#811010",
      "#247AFB",
      "#A534A0",
      "#A8A438",
      "#D6590C",
      "#46A29C",
      "#670F6D",
      "#D7C200",
      "#59BBEB",
      "#504F1C",
      "#55BC54",
      "#4D3568",
      "#9F39A5",
      "#363636",
      "#860909",
      "#6A286F",
      "#604483",
    ];
  };

  const colors = getColors();
  const duration = svgOptions?.duration || 8;
  const intensity = svgOptions?.intensity || 1;

  return (
    <>
      {/* Main animated SVG */}
      <motion.svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {/* Primary animated paths */}
        {paths.map((path, idx) => (
          <motion.path
            d={path}
            stroke={colors[idx % colors.length]}
            strokeWidth={variant === "agency" ? "1.5" : "2.3"}
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: (idx * 0.3) % 5,
              repeatDelay: Math.random() * 3 + 2,
            }}
            key={`path-primary-${idx}`}
          />
        ))}

        {/* Secondary pulse effect paths */}
        {paths.slice(0, 8).map((path, idx) => (
          <motion.path
            d={path}
            stroke={colors[idx % colors.length]}
            strokeWidth={variant === "agency" ? "0.8" : "1.2"}
            strokeLinecap="round"
            fill="none"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: duration * 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: (idx * 0.5) % 8,
              repeatDelay: Math.random() * 5 + 1,
            }}
            key={`path-pulse-${idx}`}
          />
        ))}
      </motion.svg>

      {/* Overlay gradient for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/20 z-10" />

      {/* Optional grid overlay for agency variant */}
      {variant === "agency" && (
        <div className="absolute inset-0 bg-grid-slate-200/20 dark:bg-grid-slate-800/20 bg-[size:60px_60px] z-10" />
      )}
    </>
  );
};
