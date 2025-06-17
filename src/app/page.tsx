// src/app/page.tsx
"use client"

import { useState } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection'
import { WhatsIncludedSection } from '@/components/sections/WhatsIncludedSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { Footer } from '@/components/sections/Footer'
import { ContactForm } from '@/components/ContactForm'
import { AboutUsSection } from '@/components/sections/AboutUsSection'

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const openContactForm = () => setIsContactFormOpen(true)
  const closeContactForm = () => setIsContactFormOpen(false)

  return (
    <main className="min-h-screen">
      <HeroSection onOpenContactForm={openContactForm} />
      <ProblemSolutionSection />
      <WhatsIncludedSection onOpenContactForm={openContactForm} />
      <ProcessSection />
      <PortfolioSection />
      <AboutUsSection />
      <FaqSection />
      <FinalCtaSection onOpenContactForm={openContactForm} />
      <Footer />
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={closeContactForm} 
      />
    </main>
  )
}