// src/components/sections/FinalCtaSection.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Shield, MessageCircle } from 'lucide-react'
interface FinalCtaSectionProps {
  onOpenContactForm: () => void
}

export function FinalCtaSection({ onOpenContactForm }: FinalCtaSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's build your professional website together. 
            No tech skills needed. No pressure. Just a quick chat.
          </p>
        
            <Button 
              size="lg" 
              className="text-lg px-12 py-4"
              onClick={onOpenContactForm}
            >
              Get Your Free Quote
            </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm">No obligation</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
