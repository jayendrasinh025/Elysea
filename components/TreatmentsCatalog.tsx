'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TREATMENTS,
  type TreatmentCategory,
  type TreatmentItem,
} from '@/lib/clinic-data';

const FILTER_OPTIONS: ('All' | TreatmentCategory)[] = [
  'All',
  'Skin & Medifacials',
  'Laser & Peels',
  'Hair Restoration',
];

export default function TreatmentsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TreatmentCategory>('All');

  const filtered =
    selectedCategory === 'All'
      ? TREATMENTS
      : TREATMENTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Functional Segmented Filter Bar */}
      <div
        role="tablist"
        aria-label="Filter treatments by clinical discipline"
        className="flex flex-wrap items-center gap-2 border-b border-[#EBC2D0] pb-6"
      >
        {FILTER_OPTIONS.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium tracking-[0.08em] uppercase whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-[#A94F70] text-white'
                  : 'border border-[#EBC2D0] bg-white text-[#292126] hover:border-[#A94F70] hover:text-[#A94F70]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Editorial Asymmetric Rows — avoiding repetitive identical card templates */}
      <div className="divide-y divide-[#EBC2D0]">
        {filtered.map((treatment: TreatmentItem, idx: number) => {
          const isEven = idx % 2 === 0;
          return (
            <article
              key={treatment.slug}
              className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-12 md:gap-12"
            >
              {/* Visual Treatment Media */}
              <div
                className={`md:col-span-5 ${
                  isEven ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[#EBC2D0] bg-[#F6DCE5]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {treatment.visualType === 'video' ? (
                      <video
                        src={treatment.mediaSrc}
                        poster={treatment.posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <Image
                        src={treatment.mediaSrc}
                        alt={treatment.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        referrerPolicy="no-referrer"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                </Link>
              </div>

              {/* Editorial Detail Column */}
              <div
                className={`md:col-span-7 ${
                  isEven ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <p className="label-editorial">
                  {String(idx + 1).padStart(2, '0')} · {treatment.category}
                </p>
                <h2 className="mt-3 font-editorial text-3xl text-[#292126] md:text-4xl">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="hover:text-[#A94F70] transition-colors"
                  >
                    {treatment.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#777078]">
                  {treatment.overview}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#EBC2D0]/80 pt-5 text-xs text-[#292126]">
                  <span>
                    <strong className="font-medium text-[#A94F70]">Duration:</strong>{' '}
                    {treatment.duration}
                  </span>
                  <span aria-hidden="true" className="text-[#EBC2D0]">
                    ·
                  </span>
                  <span>
                    <strong className="font-medium text-[#A94F70]">Downtime:</strong>{' '}
                    {treatment.downtime}
                  </span>
                </div>

                <div className="mt-7">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#A94F70] hover:text-[#8C3D5A] transition-colors"
                  >
                    <span>Explore Protocol & Suitability</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
