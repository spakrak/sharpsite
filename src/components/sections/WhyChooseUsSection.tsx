// src/components/sections/WhyChooseUsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Users, Smartphone, DollarSign, MessageCircle } from 'lucide-react'

export function WhyChooseUsSection() {
  const differentiators = [
    {
      icon: Users,
      title: "Done-For-You Service",
      description: "Sit back while we handle everything from design to launch"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Design", 
      description: "Your website works perfectly on phones, tablets, and computers"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, fixed rates with no hidden fees or surprises"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Work directly with your developers, not through middlemen"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Meet the Team */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose SharpSite?
            </h2>
            
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto mb-12 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Meet David & Ty</h3>
              <div className="flex justify-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-david.jpg" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">DT</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-ty.jpg" />
                  <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">TY</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-gray-600">
                Your dedicated web developers with 10+ years of experience building websites for local businesses
              </p>
            </div>
          </div>
          
          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
