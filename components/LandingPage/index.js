import React from "react";
import Hero from "../landing/Hero";
import Features from "../landing/Features";
import WhatWeOffer from "../landing/WhatWeOffer";
import WhyChooseUs from "../landing/WhyChooseUs";
import BentoFeatures from "../landing/automateFeature";
import CallToAction from "../landing/callToAction";
import Blog from "../landing/Blog";
import FAQSection from "../landing/FAQS";
import ContactForm from "@/layouts/contact";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <WhatWeOffer />
      <WhyChooseUs />
      <BentoFeatures />
      <CallToAction />
      <Blog />
      <FAQSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
