import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import ContinuousVideoCarousel from '@/components/ContinuousVideoCarousel';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ExperienceCarousel from '@/components/ExperienceCarousel';
import AppointmentCtaSection from '@/components/AppointmentCtaSection';
import GsapReveal from '@/components/GsapReveal';
import {
  BEFORE_AFTER_CASES,
  CLINIC_INFO,
  TREATMENTS,
} from '@/lib/clinic-data';

export default function HomePage() {
  const featuredTreatments = [
    TREATMENTS.find((t) => t.slug === 'hydrafacial')!,
    TREATMENTS.find((t) => t.slug === 'laser-hair-reduction')!,
    TREATMENTS.find((t) => t.slug === 'prp-gfc')!,
  ];

  return (
    <>
      {/* 1. FULL-SCREEN EDITORIAL HERO */}
      <section className="relative overflow-hidden border-b border-[#EBC2D0]/80 bg-gradient-to-b from-[#FFF8FA] via-[#FFF8FA] to-[#F6DCE5]/45">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 lg:pr-6">
            <p className="label-editorial">
              Zadeshwar, Bharuch · Skin · Hair · Laser
            </p>
            <h1 className="mt-5 font-editorial text-[clamp(2.5rem,4.5vw,4.35rem)] leading-[1.08] tracking-[-0.015em] text-[#292126] text-balance">
              Clinical precision, expressed in quiet luxury.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#777078] sm:text-lg">
              ELYSEA Aesthetic Clinic unites physician-led dermatology,
              trichology, and calibrated laser care—crafted for natural clarity
              and lasting skin health under {CLINIC_INFO.doctorName}.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A94F70] px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A94F70]"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#EBC2D0] bg-white px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-[#292126] transition-colors hover:border-[#A94F70] hover:text-[#A94F70]"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EBC2D0] pt-6 text-xs text-[#777078]">
              <span>52, Sharnam Sky, Zadeshwar</span>
              <span aria-hidden="true" className="hidden sm:inline text-[#EBC2D0]">
                ·
              </span>
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 font-medium tabular-nums text-[#292126] hover:text-[#A94F70] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#A94F70]" />
                <span>+91 {CLINIC_INFO.phone}</span>
              </a>
              <span aria-hidden="true" className="hidden sm:inline text-[#EBC2D0]">
                ·
              </span>
              <span>Mon–Sat · 10 AM – 7 PM</span>
            </div>
          </div>

          {/* Cinematic Treatment Footage Composition (No Doctor Portrait) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 items-stretch gap-4 sm:gap-5">
              <div className="col-span-7 overflow-hidden rounded-[26px] border border-[#EBC2D0] bg-[#F6DCE5]">
                <div className="relative h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] w-full">
                  <video
                    src="/videos/hydrafacial-infusion.mp4"
                    poster="/videos/hydrafacial-infusion.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#292126]/75 to-transparent"
                  />
                  <p className="pointer-events-none absolute bottom-4 left-4 right-4 text-[11px] tracking-[0.14em] uppercase text-[#FFF8FA]">
                    In-Clinic HydraFacial Infusion
                  </p>
                </div>
              </div>

              <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
                <div className="flex-1 overflow-hidden rounded-[22px] border border-[#EBC2D0] bg-[#F6DCE5]">
                  <div className="relative h-full min-h-[190px] w-full">
                    <video
                      src="/videos/led-phototherapy.mp4"
                      poster="/videos/led-phototherapy.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-[22px] border border-[#EBC2D0] bg-white p-5">
                  <p className="label-editorial">Physician-Led</p>
                  <p className="mt-2 font-editorial text-lg leading-snug text-[#292126]">
                    {CLINIC_INFO.doctorName}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#777078]">
                    Cosmetologist & Trichologist · Aesthetic Physician
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS CURVED TREATMENT VIDEO CAROUSEL */}
      <section
        id="treatment-showcase"
        className="border-b border-[#EBC2D0]/80 bg-[#FFF8FA] py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-editorial">Live Clinical Reels</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126] sm:text-5xl text-balance">
                Treatments in motion
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#777078]">
              Unfiltered procedure footage from ELYSEA—drag horizontally to
              browse our HydraFacial protocols, RF precision removals, LED
              phototherapy, and treatment suite.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <ContinuousVideoCarousel />
        </div>
      </section>

      {/* 3. ABOUT ELYSEA */}
      <section className="border-b border-[#EBC2D0]/80 bg-white py-20 md:py-28">
        <GsapReveal className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-[#EBC2D0] bg-[#F6DCE5]">
              <Image
                src="/images/clinic-interior.jpg"
                alt="ELYSEA Aesthetic Clinic private treatment suite"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <p className="label-editorial">About ELYSEA</p>
            <h2 className="mt-4 font-editorial text-3xl leading-tight text-[#292126] sm:text-4xl text-balance">
              A calm, clinical sanctuary built around your skin’s biology.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#777078]">
              Situated at Sharnam Sky in Zadeshwar, Bharuch, ELYSEA Aesthetic
              Clinic brings together medical dermatology, trichology, and
              modern aesthetic technology without rushed salon routines. Every
              skin and scalp concern begins with a direct physician diagnosis.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#777078]">
              From 4-step clinical HydraFacials and active acne management to
              diode laser hair reduction and GFC hair restoration, each plan is
              individually calibrated for Indian skin tones and comfort.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#EBC2D0] pt-6">
              <div>
                <p className="font-editorial text-2xl tabular-nums text-[#A94F70]">
                  9
                </p>
                <p className="mt-1 text-xs text-[#777078]">
                  Core clinical modalities
                </p>
              </div>
              <div>
                <p className="font-editorial text-2xl tabular-nums text-[#A94F70]">
                  45 min
                </p>
                <p className="mt-1 text-xs text-[#777078]">
                  Signature HydraFacial protocol
                </p>
              </div>
              <div>
                <p className="font-editorial text-2xl tabular-nums text-[#A94F70]">
                  1:1
                </p>
                <p className="mt-1 text-xs text-[#777078]">
                  Direct physician consultation
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
              >
                <span>Read Our Philosophy</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </GsapReveal>
      </section>

      {/* 4. MEET YOUR SPECIALIST (TYPOGRAPHIC MONOGRAPH — NO DOCTOR PHOTO) */}
      <section className="border-b border-[#EBC2D0]/80 bg-gradient-to-br from-[#F6DCE5]/60 via-[#FFF8FA] to-[#FFF8FA] py-20 md:py-28">
        <GsapReveal className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label-editorial">Meet Your Specialist</p>
              <h2 className="mt-4 font-editorial text-4xl text-[#292126] sm:text-5xl">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="mt-3 text-base font-medium tracking-[0.04em] text-[#A94F70]">
                Cosmetologist & Trichologist · Aesthetic Physician
              </p>
              <p className="mt-2 text-xs tracking-[0.18em] uppercase text-[#777078]">
                {CLINIC_INFO.doctorSpecialties}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#292126]/85">
                {CLINIC_INFO.doctorName} leads every diagnostic consultation and
                clinical procedure at ELYSEA Aesthetic Clinic. Her practice
                prioritizes barrier preservation, evidence-based acne and
                pigmentation control, safe diode laser parameters for Indian skin
                phototypes, and structured trichology protocols for hair density.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#EBC2D0] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs tracking-[0.14em] uppercase text-[#A94F70]">
                    Skin Treatment
                  </p>
                  <p className="mt-2 text-sm text-[#777078]">
                    HydraFacial, chemical peels, acne protocols & brightening.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.14em] uppercase text-[#A94F70]">
                    Hair Treatment
                  </p>
                  <p className="mt-2 text-sm text-[#777078]">
                    Trichoscopy, PRP, GFC & scalp mesotherapy.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.14em] uppercase text-[#A94F70]">
                    Laser Procedures
                  </p>
                  <p className="mt-2 text-sm text-[#777078]">
                    Face & body diode laser hair reduction & RF refinement.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] border border-[#EBC2D0] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/pigmentation-serum.jpg"
                    alt="Clinical dermatological formulations at ELYSEA Aesthetic Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-[#EBC2D0] p-6">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-[#A94F70]">
                    Clinical Credentials
                  </p>
                  <p className="mt-2 font-editorial text-xl text-[#292126]">
                    Thoughtful, measured aesthetic medicine.
                  </p>
                  <p className="mt-2 text-sm text-[#777078]">
                    Every procedure is tailored after evaluating skin sensitivity,
                    medical history, and long-term maintenance goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GsapReveal>
      </section>

      {/* 5. TREATMENT CATEGORIES */}
      <section className="border-b border-[#EBC2D0]/80 bg-[#FFF8FA] py-20 md:py-28">
        <GsapReveal className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-editorial">Clinical Disciplines</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126] sm:text-5xl text-balance">
                Curated skin, hair & laser treatments
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
            >
              <span>View All 9 Treatments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 3 Featured Spotlight Modalities */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredTreatments.map((item) => (
              <Link
                key={item.slug}
                href={`/treatments/${item.slug}`}
                className="group block space-y-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#EBC2D0] bg-[#F6DCE5]">
                  {item.visualType === 'video' ? (
                    <video
                      src={item.mediaSrc}
                      poster={item.posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Image
                      src={item.mediaSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#A94F70]">
                    {item.category} · {item.duration}
                  </p>
                  <h3 className="mt-1.5 font-editorial text-2xl text-[#292126] group-hover:text-[#A94F70] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#777078]">
                    {item.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Complete 9-Treatment Editorial Index */}
          <div className="mt-16 border-t border-[#EBC2D0]">
            {TREATMENTS.map((treatment, index) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="group grid grid-cols-1 items-center gap-4 border-b border-[#EBC2D0] py-5 transition-colors hover:bg-[#F6DCE5]/35 sm:grid-cols-12 sm:px-3"
              >
                <div className="sm:col-span-1 text-xs tabular-nums text-[#A94F70]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="sm:col-span-4 font-editorial text-xl text-[#292126] group-hover:text-[#A94F70] transition-colors">
                  {treatment.title}
                </div>
                <div className="sm:col-span-3 text-xs tracking-[0.12em] uppercase text-[#777078]">
                  {treatment.category}
                </div>
                <div className="sm:col-span-3 text-xs text-[#777078]">
                  {treatment.duration} · {treatment.downtime}
                </div>
                <div className="sm:col-span-1 flex justify-end text-[#A94F70]">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* 6. BEFORE & AFTER RESULTS */}
      <section className="border-b border-[#EBC2D0]/80 bg-white py-20 md:py-28">
        <GsapReveal className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-editorial">Clinical Documentation</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126] sm:text-5xl text-balance">
                Before & after transformations
              </h2>
            </div>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
            >
              <span>View Full Case Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {BEFORE_AFTER_CASES.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 items-center gap-6 rounded-[24px] border border-[#EBC2D0] bg-[#FFF8FA] p-6 sm:grid-cols-12"
              >
                <div className="sm:col-span-6">
                  <BeforeAfterSlider
                    beforeSrc={item.beforeSrc}
                    afterSrc={item.afterSrc}
                    beforeLabel={item.beforeLabel}
                    afterLabel={item.afterLabel}
                    title={item.title}
                  />
                </div>
                <div className="sm:col-span-6 space-y-3">
                  <p className="label-editorial">{item.timeframe}</p>
                  <h3 className="font-editorial text-2xl text-[#292126]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#777078]">
                    {item.clinicalNote}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/treatments/${item.treatmentSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-[#A94F70] hover:text-[#8C3D5A]"
                    >
                      <span>Treatment Protocol</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GsapReveal>
      </section>

      {/* 7. PATIENT EXPERIENCE / VIDEO TESTIMONIALS */}
      <section className="bg-[#FFF8FA] py-20 md:py-28">
        <GsapReveal className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-editorial">Patient Experience</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126] sm:text-5xl text-balance">
                Inside the treatment experience
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
            >
              <span>All Experience Reels</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <ExperienceCarousel />
          </div>
        </GsapReveal>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <AppointmentCtaSection />
    </>
  );
}
