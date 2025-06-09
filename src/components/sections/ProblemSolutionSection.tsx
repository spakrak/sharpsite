// src/components/sections/ProblemSolutionSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Settings, DollarSign } from 'lucide-react'

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Outdated Design",
      description: "Looks unprofessional on mobile devices and drives customers away"
    },
    {
      icon: Settings,
      title: "Complicated Setup", 
      description: "Too complex to manage and update without technical knowledge"
    },
    {
      icon: DollarSign,
      title: "Hidden Costs",
      description: "Unexpected fees and charges that blow your budget"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              return (
                <Card key={index} className="text-center border-red-100 bg-red-50/50">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-red-800">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{problem.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Solution Statement */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We deliver modern, professional websites with a straightforward process and transparent pricing
              </h2>
              <p className="text-xl text-gray-600">
                No surprises, no complications, just results you can trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}