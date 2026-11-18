'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/clinic-data';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/results', label: 'Results' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#EBC2D0]/80 bg-[#FFF8FA]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 py-4 md:px-10">
        {/* Zone 1: Single-element wordmark */}
        <Link
          href="/"
          className="font-editorial text-2xl tracking-[0.22em] text-[#292126] whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
        >
          {CLINIC_INFO.brand}
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-7 text-[13px] tracking-[0.06em] text-[#292126]"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#A94F70] font-medium'
                    : 'text-[#292126]/80 hover:text-[#A94F70]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#A94F70]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#A94F70] px-5 py-2.5 text-xs font-medium tracking-[0.08em] uppercase text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#8C3D5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A94F70]"
          >
            Book Appointment
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EBC2D0] text-[#292126] transition-colors hover:bg-[#F6DCE5] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#EBC2D0] bg-[#FFF8FA] px-6 py-6 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-editorial text-lg text-[#292126] py-1 border-b border-[#F6DCE5]"
            >
              Home
            </Link>
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-editorial text-lg py-1 border-b border-[#F6DCE5] ${
                    isActive ? 'text-[#A94F70]' : 'text-[#292126]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#A94F70] px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase text-white"
              >
                Book on WhatsApp
              </a>
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[#A94F70] px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase text-[#A94F70]"
              >
                Call {CLINIC_INFO.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
