// src/components/sections/WhatsIncludedSection.tsx
import {
  Smartphone,
  Globe,
  Edit3,
  Mail,
  Search,
  Shield,
  HeadphonesIcon,
  DollarSign,
  RotateCcw,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface WhatsIncludedSectionProps {
  onOpenContactForm: () => void
}

export function WhatsIncludedSection({ onOpenContactForm }: WhatsIncludedSectionProps) {
  const coreFeatures = [
    { icon: Smartphone, title: 'Mobile-Friendly',   description: 'Looks great on any device' },
    { icon: Globe,      title: 'Custom Website',    description: 'Design built for you' },
    { icon: Edit3,      title: 'Easy Updates',      description: 'Change content seamlessly' },
  ]

  const addedValue = [
    { icon: Mail,           title: 'Contact Forms', description: 'Let customers reach you easily' },
    { icon: Search,         title: 'Search Engine Optimization',           description: 'Helps customers find you on Google' },
    { icon: Shield,         title: 'SSL',           description: 'Secures your site & builds visitor trust' },
    { icon: DollarSign,     title: 'Fixed Price',   description: 'No hidden fees—ever' },
    { icon: RotateCcw,      title: 'Money-Back',    description: '100% satisfaction guarantee' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What’s Included in Your Website Package
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a professional online presence
            </p>
          </header>

          {/* Core Features (highlighted) */}
          <section className="mb-12 bg-white shadow-md rounded-lg p-8 border-b-2 border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">Core Features</h3>
            <ul className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
              {coreFeatures.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col items-center text-center space-y-2">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-2">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </span>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Added Value in Concise Accordion with descriptions */}
          <section className="mb-12">
            <Accordion type="single" collapsible>
              <AccordionItem value="extras">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 w-full justify-center py-3 bg-gray-100 rounded-lg">
                  More Perks
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
  <ul className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {addedValue.map(({ icon: Icon, title, description }) => (
      <li key={title} className="flex flex-col items-center text-center space-y-1">
        <Icon className="h-5 w-5 text-green-600" />
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </li>
    ))}
  </ul>
</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Pricing & CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-1">All of this, starting at just</p>
            <p className="text-5xl font-bold text-blue-600 mb-6">$497</p>
            <Button
              size="lg"
              onClick={onOpenContactForm}
              className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Your Free Quote
            </Button>
            <p className="text-sm text-gray-500 mt-3">Free consultation • No obligation • Fast turnaround</p>
          </div>

        </div>
      </div>
    </section>
  )
}
