// src/components/ContactForm.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  // Lock scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          message: "",
        });
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Let’s Get Started</CardTitle>
              <p className="mt-2 text-gray-600">
                Fill this out — we’ll reach out within one business day.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Thank you!</h3>
              <p className="mb-4 text-gray-600">
                We’ll be in touch shortly to kick things off.
              </p>
              <Badge variant="success">Form submitted</Badge>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium">Name *</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Business */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Business Name *
                </label>
                <input
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Anything else? (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything that will help us prepare."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
