// src/components/sections/SocialProofSection.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Award, Clock } from 'lucide-react'

export function SocialProofSection() {
  const metrics = [
    {
      icon: Award,
      number: "15+",
      label: "Websites Built for Local Businesses"
    },
    {
      icon: Star,
      number: "100%",
      label: "Client Satisfaction"
    },
    {
      icon: Clock,
      number: "5 Days",
      label: "Average Delivery Time"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Business Owners Like You
            </h2>
          </div>
          
          {/* Trust Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.number}</div>
                    <p className="text-gray-600">{metric.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Featured Testimonial */}
          <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                "SharpSite made the whole process easy. My website looks amazing and 
                was ready in less than a week. I've already gotten three new customers!"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    SM
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold">Sarah Martinez</div>
                  <div className="text-gray-600 text-sm">Local Business Owner</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg">
                  Get Your Free Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}