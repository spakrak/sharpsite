// src/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone, TrendingUp } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  onOpenContactForm: () => void;
}

export function HeroSection({ onOpenContactForm }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 lg:pt-32 pb-12 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We Make{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              $950 Websites
            </span>{" "}
            That Get You More Calls
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast turnaround. Flat fee. Website upkeep optional.
          </p>

          <p className="text-lg text-gray-500 mb-10">
            No tech skills needed. We handle everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-3 hover:scale-105 transition-transform shadow-lg"
              onClick={onOpenContactForm}
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
