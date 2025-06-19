// src/components/sections/ProblemSolutionSection.tsx
import {
  Search,
  ThumbsDown,
  Hourglass,
  CheckCircle,
  Smartphone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: Search,
      title: "You’re Invisible When Customers Search",
      description:
        "No website means you don’t show up on Google — so they call someone else.",
    },
    {
      icon: ThumbsDown,
      title: "You Don’t Look Legit",
      description:
        "No website makes your business seem shady — even if you do great work.",
    },
    {
      icon: Hourglass,
      title: "Every Day You Wait, You’re Losing Jobs",
      description:
        "You’ve put it off long enough. No site = missed calls and lost money.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "5 Pages That Sell What You Do",
      description:
        "We write and build them to bring in real leads — not just fill space.",
    },
    {
      icon: Smartphone,
      title: "Looks Good on Any Phone",
      description:
        "Most customers look you up on mobile. Your site will look sharp and work fast.",
    },
    {
      icon: MapPin,
      title: "Customers Can Reach You Instantly",
      description:
        "We set up your contact form, Google Map, and domain — no tech skills needed.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem (Credibility Killers)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No website? That’s what’s costing you calls, jobs, and trust.
            </p>
          </div>

          {/* Problems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              );
            })}
          </div>

          {/* Transition Text */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-900 font-semibold mb-2">
              We fix all three problems — fast.
            </p>
            <p className="text-xl text-gray-700">
              Your site goes live in 5–7 days. One flat $950.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-3 hover:scale-105 transition-transform shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get Your $950 Site Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
