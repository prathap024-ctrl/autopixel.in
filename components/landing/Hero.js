import { FlipWords } from "@/components/ui/flip-words";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { texts } from "@/data/landingData";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const handleClick = () => router.push("/contact");

  return (
    <section className="relative w-full h-screen bg-transparent flex items-center">
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {/* Heading with SEO-optimized content */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          <span className="block text-3xl sm:text-4xl mb-2">
            AI-Powered Business Automation & Digital Marketing Solutions
          </span>
          <FlipWords words={texts} />
        </h1>

        {/* Enhanced subheading with benefits and keywords */}
        <p className="mt-6 text-[#E5E7EB] text-lg sm:text-xl leading-relaxed">
          Streamline operations and boost revenue with custom n8n workflow automation,
          AI-driven marketing campaigns, and data analytics that increase efficiency by up to 80%
          while reducing operational costs.
        </p>

        {/* Value proposition with social proof hint */}
        <p className="mt-4 text-[#D1D5DB] text-base sm:text-lg">
          Join 500+ businesses already scaling with our proven automation frameworks
          and performance-driven marketing strategies.
        </p>

        {/* Enhanced CTA with urgency and benefit */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <InteractiveHoverButton
            onClick={handleClick}
            aria-label="Get free automation consultation and custom strategy"
            className="border-2 border-white"
          >
            Get Your Free Automation Strategy
          </InteractiveHoverButton>

          {/* Secondary micro-CTA */}
          <p className="text-[#9CA3AF] text-sm">
            Free consultation • No commitment • 30-day ROI guarantee
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex justify-center items-center gap-6 text-[#9CA3AF] text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No Setup Fees
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            24/7 Support
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            ROI Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}