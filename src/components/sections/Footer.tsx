// src/components/sections/Footer.tsx
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand & Tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Sharpsite</h3>
              <p className="text-gray-300 text-sm">
                Look Legit. Get More Calls.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="mailto:sharpsiteus@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>sharpsiteus@gmail.com</span>
              </a>
              <a
                href="tel:+14127154869"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(412) 715-4869</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Sharpsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}