"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamSection() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);
  const div9Ref = useRef(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.instagram />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.linkedin />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.facebook />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.telegram />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.googleSheets />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  googleDrive: (props) => (
    <Image
      src="/icons8-google-drive.svg"
      alt="Google Drive"
      width={24}
      height={24}
      {...props}
    />
  ),
  googleDocs: (props) => (
    <Image
      src="/icons8-google-docs.svg"
      alt="Google Docs"
      width={24}
      height={24}
      {...props}
    />
  ),
  notion: (props) => (
    <Image
      src="/icons8-notion.svg"
      alt="Notion"
      width={24}
      height={24}
      {...props}
    />
  ),
  openai: (props) => (
    <Image
      src="/icons8-chatgpt.svg"
      alt="OpenAI"
      width={24}
      height={24}
      {...props}
    />
  ),
  googleSheets: (props) => (
    <Image
      src="/icons8-google-sheets.svg"
      alt="Zapier"
      width={24}
      height={24}
      {...props}
    />
  ),
  whatsapp: (props) => (
    <Image
      src="/icons8-whatsapp-logo.svg"
      alt="WhatsApp"
      width={24}
      height={24}
      {...props}
    />
  ),
  telegram: (props) => (
    <Image
      src="/icons8-telegram-logo.svg"
      alt="Messenger"
      width={24}
      height={24}
      {...props}
    />
  ),
  instagram: (props) => (
    <Image
      src="/instagram.svg"
      alt="Messenger"
      width={24}
      height={24}
      {...props}
    />
  ),
  linkedin: (props) => (
    <Image
      src="/linkedin.svg"
      alt="Messenger"
      width={24}
      height={24}
      {...props}
    />
  ),
  facebook: (props) => (
    <Image
      src="/icons8-facebook-logo.svg"
      alt="Messenger"
      width={24}
      height={24}
      {...props}
    />
  ),
};
