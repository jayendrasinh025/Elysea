'use client';

import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={CLINIC_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book appointment via WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#A94F70] px-4 py-2.5 text-xs font-medium tracking-[0.08em] uppercase text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:bg-[#8C3D5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A94F70]"
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
