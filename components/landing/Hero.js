import { FlipWords } from "@/components/ui/flip-words";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { texts } from "@/data/landingData";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const handleClick = () => router.push("/contact");

  return (
    <section className="relative w-full h-screen border-t-2 border-b-2 bg-transparent flex items-center">
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {/* Heading */}
        <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          <span className="block text-3xl sm:text-4xl mb-2">
            Unlock Smarter Growth with AI
          </span>
          <FlipWords words={texts} />
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-[#E5E7EB] text-lg sm:text-xl leading-relaxed">
          Transform your business processes with powerful n8n automation and
          data-driven digital marketing strategies that deliver measurable
          results.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <InteractiveHoverButton
            onClick={handleClick}
            aria-label="Start your automation journey"
            className="border-2 border-gray-900"
          >
            Start Your Automation Journey
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
