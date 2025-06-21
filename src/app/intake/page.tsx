// src/app/intake/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Client Intake | SharpSite",
  description: "Tell us about your business so we can build your website.",
};

const FORM_URL = "https://formspree.io/f/manjbved";

export default function IntakePage() {
  return (
    <>
      {/* ----- Header with logo linked to home ----- */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16">
              <Image
                src="/Sharpsite_logo.svg"
                alt="SharpSite"
                width={140}
                height={42}
                className="h-8 w-auto"
                priority
              />
          </div>
        </div>
      </header>

      {/* ----- Main form section ----- */}
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-3xl py-12 px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-gray-900">
              Let's Build Your Website
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us the essentials about your business. Skip anything you're
              unsure about—we'll cover it during our quick strategy call.
            </p>
          </div>

          <form
            method="POST"
            action={FORM_URL}
            encType="multipart/form-data"
            className="space-y-8"
          >
            {/* Section 1: Contact Info */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                1. Contact Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input name="full_name" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <Input name="business_name" required className="w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method *
                  </label>
                  <RadioGroup name="preferred_contact" className="flex gap-6">
                    {["call", "text", "email"].map((method) => (
                      <div key={method} className="flex items-center gap-2">
                        <RadioGroupItem id={method} value={method} required />
                        <label htmlFor={method} className="text-sm capitalize">
                          {method}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </section>

            {/* Section 2: Business Details */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                2. About Your Business
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What do you do? (one sentence) *
                  </label>
                  <Textarea
                    name="one_sentence_pitch"
                    placeholder='e.g., "We install and service HVAC systems in Dallas."'
                    required
                    className="w-full min-h-[80px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Areas
                  </label>
                  <Input
                    name="service_area"
                    placeholder="Cities, counties, or regions you serve"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Top Services
                  </label>
                  <Textarea
                    name="top_services"
                    placeholder="List your main services (one per line)"
                    className="w-full min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Typical Customer
                  </label>
                  <Input
                    name="typical_customer"
                    placeholder="e.g., Homeowners, property managers, small businesses"
                    className="w-full"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Uploads & Existing Assets */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                3. Assets & Materials
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Your Logo
                    </label>
                    <Input
                      name="logo"
                      type="file"
                      accept=".jpg,.jpeg,.png,.svg,.pdf"
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Optional • JPG, PNG, SVG, or PDF
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio Photos
                    </label>
                    <Input
                      name="photos"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      multiple
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Optional • Select multiple files • JPG or PNG
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What do you already have?
                  </label>
                  <div className="space-y-2">
                    {[
                      "Domain name",
                      "Existing website",
                      "Facebook/Instagram page",
                      "Google Business profile",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox name="existing_assets" value={label} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Share Any Links
                  </label>
                  <Textarea
                    name="links"
                    placeholder="Website, social media profiles, Google Business, etc."
                    className="w-full min-h-[80px]"
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Site Structure */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                4. Website Structure
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Which pages/sections do you need?
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      "Home page",
                      "Services",
                      "About Us",
                      "Portfolio / Gallery",
                      "Testimonials",
                      "Contact / Quote Form",
                      "FAQ",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox name="site_sections" value={label} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Anything else we should know?
                  </label>
                  <Textarea
                    name="anything_else"
                    placeholder="Special requests, questions, or additional information..."
                    className="w-full min-h-[100px]"
                  />
                </div>
              </div>
            </section>

            <div className="pt-4 text-center">
              <Button type="submit" size="lg" className="px-8">
                Submit Form →
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                We'll review your information and reach out within 24 hours
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* ----- Footer ----- */}
      <Footer />
    </>
  );
}
