'use client';

import {
  DesignSection,
  EcosystemSection,
  FinalCtaSection,
  HeroSection,
  MaintenanceSection,
  HowSection,
  ModelsSection,
  PackagingSection,
  ProblemSection,
  RoadmapSection,
  SolutionSection,
  SustainabilitySection,
  TechSection,
} from "@/components/sections/home-sections";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useI18n } from "@/components/language-provider";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection t={t} />
        <ProblemSection t={t} />
        <SolutionSection t={t} />
        <HowSection t={t} />
        <TechSection t={t} />
        <ModelsSection t={t} />
        <SustainabilitySection t={t} />
        <EcosystemSection t={t} />
        <MaintenanceSection t={t} />
        <DesignSection t={t} />
        <PackagingSection t={t} />
        <RoadmapSection t={t} />
        <FinalCtaSection t={t} />
      </main>
      <Footer />
    </div>
  );
}
