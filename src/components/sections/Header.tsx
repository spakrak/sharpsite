// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenContactForm: () => void;
}

export function Header({ onOpenContactForm }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Sharpsite_logo.svg"
              alt="SharpSite"
              width={140}
              height={42}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
