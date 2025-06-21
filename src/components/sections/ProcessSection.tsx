import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Code, Eye, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Quick Business Call",
      description:
        "Tell Ty about your work in a 5-minute chat—no forms or tech jargon.",
    },
    {
      number: "2",
      icon: Code,
      title: "We Build in 7 Days",
      description:
        "We craft a mobile-ready, professional site—usually live in one week.",
    },
    {
      number: "3",
      icon: Eye,
      title: "You Approve & Tweak",
      description:
        "Ty walks you through the site and handles any final revisions. Once approved, your site is ready to go — no strings attached.",
    },
    {
      number: "4",
      icon: Rocket,
      title: "Go Live & Relax",
      description:
        "Your site goes live instantly with ongoing updates, backups, and support included.",
      highlight: true, // Marks this as the final, Care Plan exclusive step
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Launch Process
            </h2>
            <p className="text-xl text-gray-600">
              From idea to live site—no tech headaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = step.highlight;

              return (
                <Card
                  key={index}
                  className={`text-center relative ${
                    isLast ? "border-2 border-indigo-600 shadow-lg" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-600">
                      {step.number}
                    </Badge>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>

                    {/* Care Plan Badge - Moved to bottom */}
                    {isLast && (
                      <div className="mt-4 pt-3 border-t border-indigo-200">
                        <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                          Care Plan Exclusive
                        </span>
                      </div>
                    )}
                  </CardContent>

                  {/* Connector Line */}
                  
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
