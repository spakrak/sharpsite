// src/components/sections/PortfolioSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export function PortfolioSection() {
  const projects = [
    {
      title: "Local Restaurant Website",
      category: "Restaurant",
      description: "Modern, mobile-friendly site with online menu and reservation system",
      result: "40% increase in online orders",
      image: "/placeholder-restaurant.jpg"
    },
    {
      title: "Professional Services Firm", 
      category: "Professional Services",
      description: "Clean, professional design with client portal and contact forms",
      result: "3x more client inquiries",
      image: "/placeholder-services.jpg"
    },
    {
      title: "Simple E-commerce Store",
      category: "E-commerce",
      description: "Easy-to-manage online store with secure payment processing",
      result: "Doubled online sales in 3 months",
      image: "/placeholder-ecommerce.jpg"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Websites, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped local businesses succeed online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm">Website Screenshot</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-800 font-medium text-sm">{project.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <ExternalLink className="h-4 w-4 mr-2" />
              View More Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}