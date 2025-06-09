// src/app/page.tsx
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <WhatsIncludedSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
