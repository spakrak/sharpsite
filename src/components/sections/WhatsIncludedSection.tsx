// src/components/sections/WhatsIncludedSection.tsx
import {
  LayoutTemplate,
  Smartphone,
  ClipboardList,
  Edit3,
  Shield,
  Clock,
  RefreshCcw,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface WhatsIncludedSectionProps {
  onOpenContactForm: () => void;
}

export function WhatsIncludedSection({
  onOpenContactForm,
}: WhatsIncludedSectionProps) {
  /* ----------------------------------
   Core $950 Package – 6 benefits
  ---------------------------------- */
  const coreFeatures = [
    {
      icon: LayoutTemplate,
      title: "5 Pages That Sell",
      description:
        "Home, services, about, contact, and one more — all written to turn visitors into callers.",
    },
    {
      icon: Smartphone,
      title: "Works on Every Phone",
      description:
        "70% of your customers are on mobile. Your site will load fast and look perfect.",
    },
    {
      icon: ClipboardList,
      title: "Contact Forms",
      description:
        "Built in contact/quote forms to land new customers and get jobs started fast.",
    },
    {
      icon: Edit3,
      title: "We Write Everything",
      description:
        "Tell us about your business. We'll write words that make people trust you and want to hire you.",
    },
    {
      icon: Shield,
      title: "Look Legit Online",
      description:
        "Professional design that makes you look established, trustworthy, and worth the money.",
    },
    {
      icon: Clock,
      title: "Live Next Week",
      description:
        "While competitors wait months, you'll be getting new customers in 5-7 days.",
    },
  ];

  /* ----------------------------------
   Optional $50/mo Care Plan
  ---------------------------------- */
  const carePlan = [
    {
      icon: Edit3,
      title: "We Update Everything",
    },
    {
      icon: Server,
      title: "We Keep It Running",
    },
    {
      icon: RefreshCcw,
      title: "We Handle All Tech",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for $950
            </h2>
            <p className="text-xl text-gray-600">
              Stop losing customers to businesses with websites. Get online
              properly.
            </p>
          </header>

          {/* Core Features Grid */}
          <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {coreFeatures.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex flex-col items-center text-center space-y-3 p-6 bg-white shadow-sm rounded-lg border hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </span>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Mini reassurance line */}
          <p className="text-lg text-gray-800 font-medium text-center mb-14">
            One price. No surprises. Everything done for you.
          </p>

          {/* Care Plan Upsell - Positioned as the Smart Choice */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-lg shadow-md max-w-3xl mx-auto mb-14">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Never Think About Your Website Again
              </h3>
              <p className="text-lg text-gray-700">
                Website Care Plan — Just $50/month
              </p>
            </div>

            <ul className="flex flex-col sm:flex-row sm:justify-center gap-6 text-gray-800 font-medium mb-6">
              {carePlan.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">{title}</span>
                </li>
              ))}
            </ul>

            <p className="text-center text-gray-700 font-medium">
              Most business owners choose this because dealing with website
              stuff is a headache.
            </p>
            <p className="text-center text-gray-600 text-sm mt-2">
              Cancel anytime. But you probably won't want to.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={onOpenContactForm}
              className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get My Website This Week
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              $950 one-time. Add care plan later if you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
