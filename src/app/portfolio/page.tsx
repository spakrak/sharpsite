// src/app/portfolio/page.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'
interface WhatsIncludedSectionProps {
  onOpenContactForm: () => void
}
export default function PortfolioPage({ onOpenContactForm }: WhatsIncludedSectionProps) {
  const projects = [
    {
      id: 1,
      title: "Bella Vista Restaurant",
      category: "Restaurant",
      description: "Modern restaurant website with online menu, reservation system, and photo gallery",
      image: "/placeholder-restaurant.jpg",
      liveUrl: "#",
      features: ["Online Menu", "Reservation System", "Photo Gallery", "Contact Forms"],
      results: {
        metric: "Online Orders",
        improvement: "40% increase",
        timeframe: "First 3 months"
      },
      completedDate: "March 2024"
    },
    {
      id: 2,
      title: "Thompson & Associates Law",
      category: "Professional Services",
      description: "Clean, professional website for law firm with client portal and case study showcase",
      image: "/placeholder-law.jpg", 
      liveUrl: "#",
      features: ["Client Portal", "Case Studies", "Attorney Profiles", "Contact Forms"],
      results: {
        metric: "Client Inquiries", 
        improvement: "3x increase",
        timeframe: "First 6 months"
      },
      completedDate: "January 2024"
    },
    {
      id: 3,
      title: "Green Thumb Garden Supply",
      category: "E-commerce",
      description: "E-commerce store for garden supplies with inventory management and customer accounts",
      image: "/placeholder-garden.jpg",
      liveUrl: "#", 
      features: ["Product Catalog", "Shopping Cart", "Customer Accounts", "Inventory Management"],
      results: {
        metric: "Online Sales",
        improvement: "Doubled revenue", 
        timeframe: "First 4 months"
      },
      completedDate: "February 2024"
    },
    {
      id: 4,
      title: "Sunrise Yoga Studio", 
      category: "Health & Wellness",
      description: "Calming website for yoga studio with class schedules and online booking",
      image: "/placeholder-yoga.jpg",
      liveUrl: "#",
      features: ["Class Schedules", "Online Booking", "Instructor Profiles", "Membership Info"],
      results: {
        metric: "Class Bookings",
        improvement: "60% increase",
        timeframe: "First 2 months"
      },
      completedDate: "April 2024"
    },
    {
      id: 5,
      title: "Alpine Construction",
      category: "Construction", 
      description: "Professional construction company website with project portfolio and quote requests",
      image: "/placeholder-construction.jpg",
      liveUrl: "#",
      features: ["Project Gallery", "Service Pages", "Quote Requests", "Testimonials"],
      results: {
        metric: "Quote Requests",
        improvement: "5x increase", 
        timeframe: "First 3 months"
      },
      completedDate: "May 2024"
    },
    {
      id: 6,
      title: "Coastal Real Estate",
      category: "Real Estate",
      description: "Real estate website with property listings and agent profiles",
      image: "/placeholder-realestate.jpg", 
      liveUrl: "#",
      features: ["Property Listings", "Agent Profiles", "Search Filters", "Contact Forms"],
      results: {
        metric: "Property Inquiries",
        improvement: "4x increase",
        timeframe: "First 3 months"  
      },
      completedDate: "March 2024"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Work
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real websites for real businesses. See how we've helped local companies 
                grow their online presence with professional, results-driven websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Project Image */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Website Screenshot</p>
                      <p className="text-xs text-gray-500">{project.title}</p>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Calendar className="h-3 w-3" />
                            {project.completedDate}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800 text-sm">Results</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        <strong>{project.results.improvement}</strong> in {project.results.metric.toLowerCase()} 
                        <span className="text-green-600"> • {project.results.timeframe}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to join our success stories?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's build a website that drives real results for your business
            </p>
            <Link href="/">
              <Button
              size="lg"
              onClick={onOpenContactForm}
              className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}