// src/app/page.tsx - Updated with Header
"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { WhatsIncludedSection } from "@/components/sections/WhatsIncludedSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/ContactForm";
import { AboutUsSection } from '../components/sections/AboutUsSection';

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header onOpenContactForm={openContactForm} />

      <main>
        <HeroSection onOpenContactForm={openContactForm} />
        <ProblemSolutionSection onOpenContactForm={openContactForm} />
        <WhatsIncludedSection onOpenContactForm={openContactForm} />
        <PortfolioSection onOpenContactForm={openContactForm} />
        <AboutUsSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection onOpenContactForm={openContactForm} />
      </main>

      <Footer />

      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
}
