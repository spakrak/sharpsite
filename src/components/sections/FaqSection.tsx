// src/components/sections/FaqSection.tsx
"use client"

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react'

export function FaqSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const faqs = [
    {
      question: "What happens if the site breaks?",
      answer:
        "If you're not on the care plan, you're on your own. That means Googling fixes, and wasting hours trying to figure out backend settings — while your site’s down and you're missing calls. With the care plan, we fix issues fast so your site stays online and you can stay focused on running your business, not troubleshooting tech. Most clients stay on for exactly that reason.",
    },
    {
      question: "Can I update it myself later?",
      answer:
        "You could — but most business owners don’t want to mess with website tools. That’s exactly why the care plan exists: you send us what you want changed, and we handle it.",
    },
    {
      question: "How do you know what to write about my business?",
      answer:
        "We don’t need content from you — we just ask a few questions, then write everything ourselves. No writing, no formatting, no hassle.",
    },
    {
      question:
        "Why should I choose you over my cousin or freelancer on Facebook?",
      answer:
        "Because we’re not just building you a site — we’re building your credibility. We make sure your business looks professional, shows up on Google, and brings in real calls. Cheap websites often break, load slow, or vanish when you need help. Ours are built to work — and we stick around to keep them working.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "Yes — we replace it completely. Most of our clients come to us with an old or broken site. We handle the switch, domain, and setup — no extra cost, no effort on your end.",
    },
    {
      question: "Will I show up on Google?",
      answer:
        "Yes — your site is optimized to show up locally, and we connect it to your Google Business listing. That’s how customers find you without paying for ads.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center justify-center gap-3 mb-4 md:flex-row md:items-center">
              <HelpCircle className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Questions? We've Got Answers
              </h2>
            </div>
            
            {/* Expandable Trigger */}
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 px-6 py-3"
            >
              <span className="font-medium">
                {isExpanded ? 'Hide' : 'View'} Frequently Asked Questions
              </span>
              <ChevronDown 
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </Button>
          </div>
          
          {/* Expandable FAQ Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gray-50 rounded-lg px-4 border-0"
                  >
                    <AccordionTrigger className="text-left font-medium text-base py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* Contact Info within FAQ */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="text-gray-700 font-medium">Still have questions? We're here to help!</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <a 
                    href="mailto:sharpsiteus@gmail.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">sharpsiteus@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+15551234567"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">(412) 715-4869</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary when collapsed */}
          {!isExpanded && (
            <div className="text-center mt-6">
            </div>
          )}
        </div>
      </div>
    </section>
  )
}