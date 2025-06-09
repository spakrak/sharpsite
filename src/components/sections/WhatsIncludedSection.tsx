// src/components/sections/WhatsIncludedSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Shield, CreditCard, RotateCcw } from 'lucide-react'

export function WhatsIncludedSection() {
  const features = [
    "Professional design that works on all devices",
    "Easy-to-update content management", 
    "Contact forms and business integration",
    "SEO optimization for better visibility",
    "SSL security certificate included",
    "6 months of free support"
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Everything You Need in One Package
          </h2>
          
          <Card className="p-8 shadow-lg border-2 border-blue-100">
            <CardHeader>
              <div className="flex items-center justify-center gap-4 mb-4">
                <CardTitle className="text-2xl md:text-3xl">Complete Website Solution</CardTitle>
                <Badge variant="success" className="text-sm px-3 py-1">
                  Everything You Need
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Pricing */}
              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-2">Simple, transparent pricing</p>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    Starting at $497
                  </div>
                  <Button size="lg" className="mb-4">
                    Get Your Free Quote
                  </Button>
                </div>
              </div>
              
              {/* Trust Elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <CreditCard className="h-4 w-4 text-green-600" />
                  <span>Fixed pricing</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <RotateCcw className="h-4 w-4 text-green-600" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}