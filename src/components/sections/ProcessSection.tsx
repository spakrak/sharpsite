// src/components/sections/ProcessSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Code, Eye, Rocket } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Share your vision",
      description: "Tell us about your business and what you need from your website"
    },
    {
      number: "2", 
      icon: Code,
      title: "We design & build",
      description: "Our team creates your professional website with modern design"
    },
    {
      number: "3",
      icon: Eye,
      title: "Review together", 
      description: "We'll show you the website and make any adjustments you need"
    },
    {
      number: "4",
      icon: Rocket,
      title: "Launch & celebrate",
      description: "Your website goes live and starts working for your business"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From idea to launch in just a few easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="text-center relative">
                  <CardContent className="p-6">
                    {/* Step Number Badge */}
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-600">
                      {step.number}
                    </Badge>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                  
                  {/* Connector Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}