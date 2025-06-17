// src/components/sections/AboutUsSection.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageSquare, Zap, Users, Smartphone, Check } from 'lucide-react'

export function AboutUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Opening */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About SharpSite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We get it—finding the right web developer is tough. That's why we keep things simple: 
              two developers, fair prices, and websites that actually work for your business.
            </p>
          </div>

          {/* Meet David & Ty - Simplified */}
          <Card className="mb-12 rounded-lg overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Meet David & Ty
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We're a Computer Science major and a Neuroscience/Marketing student who discovered 
                    we work great together. David handles the technical side, Ty focuses on design and 
                    customer psychology.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We started SharpSite after seeing how a simple website transformed a local bakery's 
                    business. Now we help small businesses across the country get online without the hassle.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">David:</span> Makes sure your site runs perfectly 24/7
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Ty:</span> Designs sites that turn visitors into customers
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder-david.jpg" />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">D</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder-ty.jpg" />
                        <AvatarFallback className="bg-indigo-100 text-indigo-600 font-bold">T</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-center mt-3 text-sm text-gray-600 font-medium">
                      Your web development team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Our Approach - Now Consistent with Card Format */}
          <Card className="mb-12 hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    How We Work
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No confusing jargon. No surprise fees. No middlemen. When you work with us, 
                    you talk directly to David and Ty. We'll guide you through everything and 
                    build a website that helps your business grow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Makes Us Different - Condensed */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why SharpSite Works for Small Businesses
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Direct Communication</h4>
                      <p className="text-gray-600 text-sm">
                        Work directly with your developers—no account managers or sales teams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Plain English</h4>
                      <p className="text-gray-600 text-sm">
                        We explain everything clearly. No tech talk unless you want it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Results-Focused</h4>
                      <p className="text-gray-600 text-sm">
                        Every design decision is made to help you get more customers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Mobile-Ready</h4>
                      <p className="text-gray-600 text-sm">
                        Your site will look great on phones, tablets, and computers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Simple testimonial */}
          
        </div>
      </div>
    </section>
  )
}