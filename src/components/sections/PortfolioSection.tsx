// src/components/sections/PortfolioSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Quote, Smartphone } from 'lucide-react'

export function PortfolioSection() {
  const projects = [
    {
      title: "Sweet Dreams Bakery",
      category: "Food & Beverage",
      mockupImage: "/site_1_mobile.png",
      description: "Local bakery needed an online presence to showcase their custom cakes and enable online ordering. We built a mouth-watering mobile-first site with integrated order forms.",
      solutions: ["Online ordering", "Photo galleries", "Mobile-optimized"],
      testimonial: "Our online orders tripled in the first month. David and Ty made everything so easy!",
      testimonialAuthor: "Sarah Martinez, Owner",
      primaryColor: "bg-white",
      accentColor: "text-pink-600",
      borderColor: "border-pink-200"
    },
    {
      title: "Johnson's Auto Repair",
      category: "Automotive",
      mockupImage: "/site_1_mobile.png",
      description: "Family-owned auto shop wanted to build trust and streamline appointment booking. We created a professional site that showcases their expertise and makes scheduling simple.",
      solutions: ["Appointment booking", "Service descriptions", "Trust indicators"],
      testimonial: "Customers tell us they chose us because our website made them feel confident. Best investment we've made.",
      testimonialAuthor: "Mike Johnson, Owner",
      primaryColor: "bg-white",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      title: "Coastal Dental Studio",
      category: "Healthcare",
      mockupImage: "/site_1_mobile.png",
      description: "This modern dental clinic wanted a sleek online presence to attract new patients and highlight their cosmetic services. We built a clean site with service overviews and simple booking tools.",
      solutions: ["Service listings", "Contact form", "Modern visuals"],
      testimonial: "New patients often mention the site when they book — it’s made a real difference.",
      testimonialAuthor: "Dr. Ava Simmons, Lead Dentist",
      primaryColor: "bg-white",
      accentColor: "text-cyan-600",
      borderColor: "border-cyan-200"
    },
    {
      title: "Sage & Sprout Interiors",
      category: "Home & Decor",
      mockupImage: "/site_1_mobile.png",
      description: "An interior designer needed a site to showcase her portfolio and attract new clients. We created a minimal, stylish site with visual galleries and a lead form.",
      solutions: ["Portfolio gallery", "Client inquiry form", "Minimalist design"],
      testimonial: "My new website finally reflects the quality of my work — I love sending it to potential clients.",
      testimonialAuthor: "Nina Patel, Founder",
      primaryColor: "bg-white",
      accentColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Websites for Real Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every site we build looks perfect on phones—because that's where your customers are.
            </p>
          </div>

          {/* Portfolio Items */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Screenshot Side */}
                    <div className={`md:w-2/5 ${project.primaryColor} p-4 md:p-10 flex items-center justify-center`}>
                      <div className="relative max-w-[300px] w-full">
                        <img 
                          src={project.mockupImage} 
                          alt={`${project.title} mobile website`}
                          className="w-full h-auto drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-3/5 p-6 md:p-10 space-y-4">
                      {/* Title & Category */}
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Tags */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">What we built:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.solutions.map((solution, idx) => (
                            <span 
                              key={idx}
                              className={`px-3 py-1.5 ${project.primaryColor} ${project.accentColor} ${project.borderColor} border text-sm rounded-full font-medium`}
                            >
                              {solution}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className={`${project.primaryColor} ${project.borderColor} border rounded-lg p-3`}>
                        <Quote className={`h-4 w-4 ${project.accentColor} mb-1`} />
                        <p className="text-gray-700 italic text-sm mb-1">
                          "{project.testimonial}"
                        </p>
                        <p className="text-xs text-gray-600">
                          — {project.testimonialAuthor}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            ))}
          </div>

                   {/* Stats Section (moved above CTA) */}
            <div className="mt-16">
              <div className="flex justify-center gap-12 flex-wrap text-center">
                {[
                  { value: '15+', label: 'Websites Built', color: 'text-blue-600' },
                  { value: '100%', label: 'Client Satisfaction', color: 'text-green-600' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className={`text-4xl font-extrabold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-700 text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 mt-8">
            <CardContent className="p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Get Your Business Online?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Join these successful businesses. We'll build you a website that looks amazing 
                on every device and brings in more customers.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Website
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}