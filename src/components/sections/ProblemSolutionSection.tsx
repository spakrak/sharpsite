// src/components/sections/ProblemSolutionSection.tsx
import {
  EyeOff,
  ThumbsDown,
  Hourglass,
  MapPin,
  ShieldCheck,
  Rocket,
  ArrowDown,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: EyeOff,
      title: 'Invisible Online',
      description: 'Customers can’t find you online — and choose someone else who does.',
    },
    {
      icon: ThumbsDown,
      title: 'Lost Credibility',
      description: 'Without a website, your business looks outdated or untrustworthy.',
    },
    {
      icon: Hourglass,
      title: 'Stuck Without a Site',
      description: 'You’ve put it off for months — and it’s quietly costing you new customers.',
    },
  ]

  const benefits = [
    {
      icon: MapPin,
      title: 'Get Found Easily',
      description: 'Bring in more customers from local search.',
      fear: 'Show up when they search — not your competitors.',
    },
    {
      icon: ShieldCheck,
      title: 'Instant Credibility',
      description: 'Make the right impression at first glance.',
      fear: 'Build trust from the moment they land on your site.',
    },
    {
      icon: Rocket,
      title: 'Simple, Quick Launch',
      description: 'We handle the details and get your site live in days.',
      fear: 'No more delays or confusion holding you back.',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Emotional Hook */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Website Is Costing You Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day without a professional website, potential customers are choosing your competitors instead.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 border-gray-200 bg-white relative"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">{problem.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Connecting Bridge */}
          <div className="text-center mb-4">
            <p className="text-lg text-gray-700 font-medium">
              That’s why we built SharpSite — to eliminate every one of these problems.
            </p>
          </div>

          {/* Gentle Transition */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 text-gray-600">
              <div className="w-16 h-px bg-gray-300"></div>
              <ArrowDown className="h-5 w-5 text-blue-600" />
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
          </div>

          {/* Solution Statement */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Handle Everything So You Don’t Have To
            </h3>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Professional websites with a straightforward process, transparent pricing,
              and reliable results — without the headaches.
            </p>

            {/* Fear-Solving Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{benefit.description}</p>
                    <p className="text-blue-700 text-xs font-medium italic">
                      {benefit.fear}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
