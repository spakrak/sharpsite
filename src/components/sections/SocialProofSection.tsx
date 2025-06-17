// src/components/sections/SocialProofSection.tsx
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight, Star, Award, Clock } from 'lucide-react'

interface SocialProofSectionProps {
  onOpenContactForm: () => void
}

export function SocialProofSection({ onOpenContactForm }: SocialProofSectionProps) {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(false)

  /* ------------------------------------------------------------------ */
  const testimonials = [
    {
      name: 'Sarah Martinez',
      business: 'Sweet Dreams Bakery',
      content: "SharpSite made the whole process easy. My site looks amazing and was done in under a week. I’ve already gotten three new customers!",
      initials: 'SM',
    },
    {
      name: 'Mike Johnson',
      business: "Johnson's Auto Repair",
      content: "Finally, developers who speak my language! Booking appointments is so simple now and my customers love it.",
      initials: 'MJ',
    },
    {
      name: 'Lisa Chen',
      business: 'Wellness Studio LC',
      content: "David and Ty were fantastic. Quick replies, easy edits, and the whole process felt super smooth. Highly recommend.",
      initials: 'LC',
    },
    {
      name: 'Robert Thompson',
      business: 'Thompson Construction',
      content: "I was skeptical at first, but it turned out great. Fair pricing, great communication, and more calls since launch.",
      initials: 'RT',
    },
  ]

  const metrics = [
    { icon: Award, number: '15+', label: 'Websites Built for Local Businesses' },
    { icon: Star,  number: '100%', label: 'Client Satisfaction' },
    { icon: Clock, number: '5 Days', label: 'Average Delivery Time' },
  ]

  /* ------------------------------------------------------------------ */
  const slideTo = (idx: number) => {
    setFade(true)
    setTimeout(() => {
      setCurrent(idx)
      setFade(false)
    }, 150)
  }

  const next = () => slideTo((current + 1) % testimonials.length)
  const prev = () => slideTo((current - 1 + testimonials.length) % testimonials.length)

  /* ------------------------------------------------------------------ */
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Trusted by Business Owners Like You
        </h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map(({ icon: Icon, number, label }) => (
            <Card key={label} className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
                <p className="text-gray-600">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <div
                className={`flex justify-center mb-4 transition-opacity duration-300 ${
                  fade ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative min-h-[120px] md:min-h-[100px] mb-6">
                <blockquote
                  className={`text-lg md:text-xl text-gray-700 text-center leading-relaxed transition-opacity duration-300 ${
                    fade ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  “{testimonials[current].content}”
                </blockquote>
              </div>

              {/* Name + Biz: use min-height to avoid shift */}
              <div
                className={`flex items-center justify-center gap-3 mb-6 min-h-[88px] transition-opacity duration-300 ${
                  fade ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-semibold">
                    {testimonials[current].initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 leading-tight whitespace-nowrap">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-600 leading-tight whitespace-nowrap">
                    {testimonials[current].business}
                  </p>
                </div>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-center gap-4">
                <button onClick={prev} aria-label="Previous" className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => slideTo(i)}
                      className={`w-2 h-2 rounded-full ${i === current ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button size="lg" className="px-8 py-3" onClick={onOpenContactForm}>
              Get Your Free Quote
            </Button>
            <p className="text-sm text-gray-600 mt-3">Join these happy business owners</p>
          </div>
        </div>
      </div>
    </section>
  )
}
