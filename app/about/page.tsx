import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import AppointmentCtaSection from '@/components/AppointmentCtaSection';
import { CLINIC_INFO } from '@/lib/clinic-data';

export const metadata: Metadata = {
  title: 'About ELYSEA & Dr. Vrujal Mistry',
  description:
    'Learn about ELYSEA Aesthetic Clinic in Zadeshwar, Bharuch and Dr. Vrujal Mistry—Cosmetologist, Trichologist & Aesthetic Physician.',
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="label-editorial">About the Clinic</p>
          <h1 className="mt-4 max-w-3xl font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
            Medical dermatology and calm aesthetic artistry in Bharuch.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#777078] sm:text-lg">
            ELYSEA Aesthetic Clinic was founded in Zadeshwar, Bharuch to offer
            transparent, physician-supervised skin, hair, and laser care free
            from exaggerated promises or generic salon packages.
          </p>
        </div>
      </section>

      {/* Clinic Space & Visuals */}
      <section className="border-b border-[#EBC2D0] bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#EBC2D0] bg-[#F6DCE5]">
              <Image
                src="/images/clinic-interior.jpg"
                alt="ELYSEA Aesthetic Clinic treatment suite"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border border-[#EBC2D0] bg-[#F6DCE5]">
              <video
                src="/videos/clinic-sanctuary.mp4"
                poster="/videos/clinic-sanctuary.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[9/12] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-[#777078]">
              ELYSEA Aesthetic Clinic reception, curated dermatological shelves,
              and private clinical entrance at Sharnam Sky.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Dr. Vrujal Mistry — Typography & Credentials Only (Zero Portrait) */}
      <section className="border-b border-[#EBC2D0] bg-[#FFF8FA] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="label-editorial">Clinical Leadership</p>
              <h2 className="mt-4 font-editorial text-4xl text-[#292126]">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="mt-3 text-base font-medium text-[#A94F70]">
                Cosmetologist & Trichologist
              </p>
              <p className="mt-1 text-base text-[#292126]">Aesthetic Physician</p>
              <p className="mt-4 text-xs tracking-[0.16em] uppercase text-[#777078]">
                {CLINIC_INFO.doctorSpecialties}
              </p>

              <div className="mt-8 border-t border-[#EBC2D0] pt-6 text-sm text-[#777078]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A94F70]" />
                  <span>{CLINIC_INFO.fullAddress}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div className="border-t border-[#EBC2D0] pt-6">
                <h3 className="font-editorial text-2xl text-[#292126]">
                  01. Diagnostic-First Skin Protocols
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#777078]">
                  Every skin concern—whether active acne, melasma, textural
                  scarring, or barrier dehydration—is assessed individually
                  before selecting clinical peels, HydraFacial stages, or home
                  formulations.
                </p>
              </div>

              <div className="border-t border-[#EBC2D0] pt-6">
                <h3 className="font-editorial text-2xl text-[#292126]">
                  02. Specialized Trichology & Hair Restoration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#777078]">
                  Hair fall evaluations address scalp health, follicle
                  miniaturisation, and nutritional support alongside sterile PRP,
                  GFC, and targeted mesotherapy sessions.
                </p>
              </div>

              <div className="border-t border-[#EBC2D0] pt-6">
                <h3 className="font-editorial text-2xl text-[#292126]">
                  03. Precision Laser & RF Safety
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#777078]">
                  Laser hair reduction parameters and radiofrequency skin tag
                  removals are calibrated carefully for Fitzpatrick III–V Indian
                  skin types to protect surrounding tissue and minimize downtime.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A94F70] px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A]"
                >
                  <span>Explore All Treatments</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCtaSection />
    </>
  );
}
