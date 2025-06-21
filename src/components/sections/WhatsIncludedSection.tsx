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
  Wrench,
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
        "70 % of your customers are on mobile. Your site will load fast and look perfect.",
    },
    {
      icon: ClipboardList,
      title: "Contact Forms",
      description:
        "Built-in quote forms that land new customers and get jobs started fast.",
    },
    {
      icon: Edit3,
      title: "We Write Everything",
      description:
        "Tell us about your business. We'll write copy that makes people trust you and pick up the phone.",
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
        "Competitors wait months. You'll be getting new customers in 5–7 days.",
    },
  ];

  /* ----------------------------------
     $50/mo Site Care Plan - Compact Icons
  ---------------------------------- */
  const carePlanIcons = [
    { icon: RefreshCcw, title: "Text Us Edits — We Do the Rest" }, // “Don't lift a finger” vibe
    { icon: Server, title: "No Hosting, Domain, or Tech Headaches" }, // Emphasizes invisible tech burden
    { icon: Wrench, title: "Fast Fixes if Anything Breaks" }, // Punchy, specific, not vague "support"
  ];
  

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for&nbsp;$950
            </h2>
            <p className="text-xl text-gray-600">
              Stop losing customers to businesses with websites. Get online
              properly.
            </p>
          </header>

          {/* Core Features Grid */}
          <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

          {/* Care Plan Callout - Moved Above Features */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-center text-lg text-gray-800 font-bold mb-4">
              Hate tech struggles? Most clients add the Care Plan because they
              don’t want to mess with hosting, edits, or fixing things when they
              break.
            </p>

            <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="pt-2">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Site Care Plan — $50/month
                  </h3>
                  <p className="text-gray-700 font-medium">
                    You own your site. We keep it running.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-6">
                  {carePlanIcons.map(({ icon: Icon, title }) => (
                    <div
                      key={title}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-2">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={onOpenContactForm}
              className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Build My Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
