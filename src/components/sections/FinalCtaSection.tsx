// src/components/sections/FinalCtaSection.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FinalCtaSectionProps {
  onOpenContactForm: () => void;
}

export function FinalCtaSection({ onOpenContactForm }: FinalCtaSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 sm:p-10 text-center bg-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Your Website Could Be Live This Week
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Show up on Google. Look legit. Get more calls — fast, for just $950.
          </p>

          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 py-4"
            onClick={onOpenContactForm}
          >
            Get My Site Started
          </Button>
        </Card>
      </div>
    </section>
  );
}
