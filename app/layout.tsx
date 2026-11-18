import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: {
    default: 'ELYSEA Aesthetic Clinic | Dr. Vrujal Mistry · Bharuch',
    template: '%s | ELYSEA Aesthetic Clinic',
  },
  description:
    'ELYSEA Aesthetic Clinic in Zadeshwar, Bharuch, Gujarat. Physician-led HydraFacial, chemical peels, acne management, laser hair reduction, and hair restoration by Dr. Vrujal Mistry.',
  openGraph: {
    title: 'ELYSEA Aesthetic Clinic | Dr. Vrujal Mistry · Bharuch',
    description:
      'Refined dermatology, trichology, skin, hair, and laser procedures at 52, Sharnam Sky, Zadeshwar, Bharuch.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELYSEA Aesthetic Clinic | Dr. Vrujal Mistry · Bharuch',
    description:
      'Refined dermatology, trichology, skin, hair, and laser procedures at 52, Sharnam Sky, Zadeshwar, Bharuch.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FFF8FA] text-[#292126] antialiased"
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
