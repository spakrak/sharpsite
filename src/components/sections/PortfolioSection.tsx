// src/components/sections/PortfolioSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioSectionProps {
  onOpenContactForm: () => void;
}
export function PortfolioSection({ onOpenContactForm }: PortfolioSectionProps) {
  const projects = [
    {
      title: "MAP Projects",
      category: "Energy & Infrastructure",
      mockupImage: "/map_projects_mockup.png",
      description:
        "Industrial power-project firm needed a professional, mobile-first site to win bids and showcase expertise.",
      metrics:
        "55% more qualified leads in 30 days — including two large contracts from new clients.",
      liveUrl: "https://mapprojectsllc.com",
      solutions: [
        "Lead-generating contact form",
        "Mobile-friendly specs pages",
        "Clear service showcase",
      ],
      testimonial:
        "We landed two big contracts in three weeks thanks to our new site. Couldn’t have been easier.",
      testimonialAuthor: "Michael, Project Manager",
      primaryColor: "bg-white",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sites That Look Legit and Bring in Leads
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build clean, fast websites that earn trust and drive new
              customers — especially on mobile, where most of your traffic
              starts.
            </p>
          </div>

          {/* Portfolio Items */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Screenshot Side */}
                    <div
                      className={`md:w-2/5 ${project.primaryColor} p-6 md:p-12 flex items-center justify-center`}
                    >
                      <div className="relative max-w-[300px] w-full">
                        <img
                          src={project.mockupImage}
                          alt={`${project.title} mobile website`}
                          className="w-full h-auto drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-3/5 p-8 md:p-12 space-y-6">
                      {/* Title & Category */}
                      <div className="space-y-3">
                        <Badge variant="secondary" className="mb-1">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="flex items-center text-gray-800 font-semibold space-x-2">
                        <TrendingUp className="w-6 h-6 text-blue-600 shrink-0" />

                        <span>{project.metrics}</span>
                      </div>

                      {/* Live Site Link */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-blue-600 hover:underline"
                      >
                        View Live Site →
                      </a>

                      {/* Outcome-Driven Tags */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          What we built:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-white text-blue-600 border border-blue-200 text-sm rounded-full font-medium">
                            Order forms that convert
                          </span>
                          <span className="px-3 py-1.5 bg-white text-blue-600 border border-blue-200 text-sm rounded-full font-medium">
                            Trust-building layout
                          </span>
                          <span className="px-3 py-1.5 bg-white text-blue-600 border border-blue-200 text-sm rounded-full font-medium">
                            Fast-loading on every phone
                          </span>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white border border-blue-200 rounded-lg p-6">
                        <Quote className="h-5 w-5 text-blue-600 mb-2" />
                        <p className="text-gray-700 italic text-sm mb-2">
                          "{project.testimonial}"
                        </p>
                        <p className="text-xs text-gray-600">
                          — {project.testimonialAuthor}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 mt-12">
            <CardContent className="p-8 md:p-10 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Like What You See? Let’s Build Yours Next.
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                MAP Projects boosted qualified leads by 55% in one month — and
                you can too.
              </p>
              <Button
                size="lg"
                onClick={onOpenContactForm}
                className="px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Build My Website
              </Button>
              <p className="text-sm text-gray-600">
                $950 one-time. Add full site care for $50/month — we handle
                everything.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
