"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import useStore from "@/store/zustand";
import { LoaderTwo } from "@/components/ui/loader";
import { useEffect } from "react";
import FloatingDock from "@/layouts/mobilemenu";
import LandingPage from "@/components/LandingPage";
import HeroGeometric from "@/components/theme/HeroBackground";

export default function Home() {
  const loading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLoading]);
  //const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;
  //const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

  return (
    <div>
      <ScrollProgress />
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center bg-blue-400 backdrop-blur-2xl">
          <LoaderTwo />
        </div>
      ) : (
        <>
          <HeroGeometric />
          <LandingPage />
          <FloatingDock />
          {/*<VapiWidget apiKey={apiKey} assistantId={assistantId} />*/}
        </>
      )}
    </div>
  );
}
