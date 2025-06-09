// src/components/sections/FaqSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FaqSection() {
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with SharpSite
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}