import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ExperienceCarousel from '@/components/ExperienceCarousel';
import AppointmentCtaSection from '@/components/AppointmentCtaSection';

export const metadata: Metadata = {
  title: 'Patient Experience & Clinical Reels',
  description:
    'Watch authentic in-clinic treatment walkthroughs and patient procedure reels recorded at ELYSEA Aesthetic Clinic, Bharuch.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="label-editorial">Patient Experience</p>
          <h1 className="mt-4 max-w-3xl font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
            Transparent clinical care, documented in motion.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#777078]">
            Explore real procedure walkthroughs from ELYSEA Aesthetic Clinic—so
            you know exactly how each clinical step feels before visiting our
            Zadeshwar suite.
          </p>
        </div>
      </section>

      <section className="border-b border-[#EBC2D0] bg-[#FFF8FA] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <ExperienceCarousel />
        </div>
      </section>

      {/* Clinical Documentation Transparency */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label-editorial">Consent & Authenticity</p>
            <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
              Why we share unedited procedure footage rather than scripted quotes.
            </h2>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <p className="text-base leading-relaxed text-[#777078]">
              At ELYSEA Aesthetic Clinic, patient privacy and clinical ethics
              guide everything we publish. We only feature patient media and
              clinical transformation photos that were captured with explicit
              consent—never fabricated ratings or anonymous stock testimonials.
            </p>
            <p className="text-base leading-relaxed text-[#777078]">
              Have questions about what to expect during your HydraFacial, Black
              Peel, laser reduction, or hair restoration session? Reach out
              directly on WhatsApp or explore our documented Before & After
              cases.
            </p>
            <div className="pt-2">
              <Link
                href="/results"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A]"
              >
                <span>View Documented Before & After Results</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCtaSection />
    </>
  );
}
