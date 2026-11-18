import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import AppointmentForm from '@/components/AppointmentForm';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import {
  BEFORE_AFTER_CASES,
  CLINIC_INFO,
  TREATMENTS,
} from '@/lib/clinic-data';

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) {
    return { title: 'Treatment Not Found' };
  }
  return {
    title: `${treatment.title} | ${treatment.category}`,
    description: `${treatment.shortDesc} Performed at ELYSEA Aesthetic Clinic, Bharuch by Dr. Vrujal Mistry.`,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) {
    notFound();
  }

  const relatedResult = treatment.relatedResultSlug
    ? BEFORE_AFTER_CASES.find((c) => c.slug === treatment.relatedResultSlug)
    : undefined;

  const otherTreatments = TREATMENTS.filter((t) => t.slug !== treatment.slug).slice(
    0,
    4
  );

  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#777078] hover:text-[#A94F70] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Treatments</span>
          </Link>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="label-editorial">{treatment.category}</p>
              <h1 className="mt-3 font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
                {treatment.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#777078] sm:text-lg">
                {treatment.overview}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#EBC2D0] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#A94F70]">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#292126]">
                    {treatment.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#A94F70]">
                    Recommended Plan
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#292126]">
                    {treatment.sessions}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#A94F70]">
                    Recovery
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#292126]">
                    {treatment.downtime}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A94F70] px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A]"
                >
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#EBC2D0] bg-white px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-[#292126] transition-colors hover:border-[#A94F70]"
                >
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[28px] border border-[#EBC2D0] bg-[#F6DCE5]">
                {treatment.visualType === 'video' ? (
                  <video
                    src={treatment.mediaSrc}
                    poster={treatment.posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={treatment.mediaSrc}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Steps & Suitability */}
      <section className="border-b border-[#EBC2D0] bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-editorial">Step-by-Step Protocol</p>
            <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
              How your session unfolds
            </h2>
            <div className="mt-8 divide-y divide-[#EBC2D0] border-t border-b border-[#EBC2D0]">
              {treatment.protocolSteps.map((step) => (
                <div
                  key={step.step}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12"
                >
                  <div className="sm:col-span-2 font-editorial text-2xl tabular-nums text-[#A94F70]">
                    {step.step}
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-editorial text-xl text-[#292126]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#777078]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="label-editorial">Clinical Suitability</p>
            <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
              Recommended for
            </h2>
            <ul className="mt-8 space-y-4">
              {treatment.idealFor.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-[#F6DCE5] pb-4 text-sm leading-relaxed text-[#292126]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A94F70]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-[#EBC2D0] bg-[#FFF8FA] p-6">
              <p className="label-editorial">Supervised By</p>
              <p className="mt-2 font-editorial text-xl text-[#292126]">
                {CLINIC_INFO.doctorName}
              </p>
              <p className="mt-1 text-xs text-[#777078]">
                {CLINIC_INFO.doctorCredentials}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Real Before & After Comparison if available */}
      {relatedResult && (
        <section className="border-b border-[#EBC2D0] bg-[#FFF8FA] py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <BeforeAfterSlider
                beforeSrc={relatedResult.beforeSrc}
                afterSrc={relatedResult.afterSrc}
                beforeLabel={relatedResult.beforeLabel}
                afterLabel={relatedResult.afterLabel}
                title={relatedResult.title}
              />
            </div>
            <div className="lg:col-span-7">
              <p className="label-editorial">Documented Clinic Case</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
                {relatedResult.title} · {relatedResult.timeframe}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#777078]">
                {relatedResult.clinicalNote}
              </p>
              <div className="mt-6">
                <Link
                  href="/results"
                  className="text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] underline underline-offset-4 hover:text-[#8C3D5A]"
                >
                  Inspect All Clinic Before & After Cases
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Embedded Booking Form + Related Treatments */}
      <section className="bg-[#F6DCE5]/45 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AppointmentForm defaultTreatment={treatment.title} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="label-editorial">Explore More</p>
              <h2 className="mt-2 font-editorial text-2xl text-[#292126]">
                Complementary Treatments
              </h2>
            </div>
            <div className="divide-y divide-[#EBC2D0] border-t border-b border-[#EBC2D0]">
              {otherTreatments.map((other) => (
                <Link
                  key={other.slug}
                  href={`/treatments/${other.slug}`}
                  className="flex items-center justify-between py-4 hover:text-[#A94F70] transition-colors"
                >
                  <div>
                    <p className="font-editorial text-lg text-[#292126]">
                      {other.title}
                    </p>
                    <p className="text-xs text-[#777078]">
                      {other.category} · {other.duration}
                    </p>
                  </div>
                  <span className="text-xs tracking-[0.12em] uppercase text-[#A94F70]">
                    View
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
