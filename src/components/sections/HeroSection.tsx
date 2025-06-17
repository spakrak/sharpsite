// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button'
import { CheckCircle, Smartphone, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface HeroSectionProps {
  onOpenContactForm: () => void
}

export function HeroSection({ onOpenContactForm }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Modern Websites,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Made Simple
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional websites that work on every device. Clear process, transparent 
            pricing, reliable results for your business.
          </p>
          
          {/* Anxiety-Reducing Line */}
          <p className="text-lg text-gray-500 mb-10">
            No tech skills needed. We'll guide you through everything.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 hover:scale-105 transition-transform shadow-lg"
              onClick={onOpenContactForm}
            >
              Get Your Free Quote
            </Button>

          </div>
          
          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Mobile-friendly design</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Fully done for you</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Drives real results</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}