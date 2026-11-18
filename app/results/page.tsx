import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import AppointmentCtaSection from '@/components/AppointmentCtaSection';
import { BEFORE_AFTER_CASES } from '@/lib/clinic-data';

export const metadata: Metadata = {
  title: 'Results | Before & After Clinical Cases',
  description:
    'Inspect authentic before and after dermatology and laser results from ELYSEA Aesthetic Clinic in Bharuch, Gujarat.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="label-editorial">Clinical Outcomes</p>
          <h1 className="mt-4 max-w-3xl font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
            Documented before & after results from ELYSEA.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#777078]">
            Drag the slider across each documented patient case to inspect
            visible clinical progress in acne recovery, Black Peel resurfacing,
            laser hair reduction, and RF skin tag removal.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8FA] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] space-y-16 px-6 md:px-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <article
              key={item.id}
              className="grid grid-cols-1 items-center gap-10 rounded-[28px] border border-[#EBC2D0] bg-white p-6 md:p-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <BeforeAfterSlider
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  beforeLabel={item.beforeLabel}
                  afterLabel={item.afterLabel}
                  title={item.title}
                />
              </div>

              <div className="lg:col-span-7 lg:pl-6">
                <p className="label-editorial">
                  Case {String(idx + 1).padStart(2, '0')} · {item.timeframe}
                </p>
                <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
                  {item.title}
                </h2>
                <p className="mt-2 text-base font-medium text-[#A94F70]">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#777078]">
                  {item.clinicalNote}
                </p>

                {/* Original Clinic Comparison Strip */}
                <div className="mt-6 flex flex-col gap-4 border-t border-[#EBC2D0] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-[#EBC2D0]">
                      <Image
                        src={item.originalCompositeSrc}
                        alt={`${item.title} original clinic comparison record`}
                        fill
                        sizes="64px"
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-[#777078]">
                      Original clinical record · @elysea.aesthetics
                    </p>
                  </div>

                  <Link
                    href={`/treatments/${item.treatmentSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
                  >
                    <span>View Procedure</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AppointmentCtaSection />
    </>
  );
}
