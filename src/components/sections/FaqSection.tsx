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
      question: "How long does it take to build my website?",
      answer: "Most websites are completed within 5-7 business days. We'll give you a specific timeline during your free consultation based on your project's complexity."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "Just your business information, any existing logos or photos you'd like to use, and a brief description of what you want your website to accomplish. We'll guide you through everything else."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely! Every website we build is designed to work perfectly on phones, tablets, and desktop computers. Mobile-friendly design is included in every project."
    },
    {
      question: "What happens after my website is complete?",
      answer: "You'll receive 6 months of free support for any questions or minor updates. We also provide training on how to update your content and offer ongoing maintenance plans if needed."
    },
    {
      question: "Do you really have no hidden fees?",
      answer: "That's right! The price we quote is the price you pay. No setup fees, no monthly hosting charges for the first year, no surprise add-ons. Complete transparency from start to finish."
    },
    {
      question: "What if I don't like the website?",
      answer: "We work with you until you're completely satisfied. If for any reason you're not happy with the final result, we offer a full money-back guarantee within 30 days of completion."
    }
  ]

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
                  <p className="text-gray-700 font-medium">Still have questions? Get in touch!</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <a 
                    href="mailto:hello@sharpsite.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">hello@sharpsite.com</span>
                  </a>
                  
                  <a 
                    href="tel:+15551234567"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">(555) 123-4567</span>
                  </a>
                </div>
                
                <p className="text-gray-500 text-sm mt-3">
                  We typically respond within 2 hours during business hours
                </p>
              </div>
            </div>
          </div>
          
          {/* Summary when collapsed */}
          {!isExpanded && (
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Get answers about timeline, pricing, mobile design, support, and our guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}