import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function AppointmentCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#EBC2D0] bg-gradient-to-br from-[#F6DCE5] via-[#FFF8FA] to-[#EBC2D0]/65">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="label-editorial">Private Clinical Consultation</p>
            <h2 className="mt-4 font-editorial text-3xl leading-[1.16] text-[#292126] sm:text-5xl text-balance">
              Begin your personalised skin and hair protocol at ELYSEA.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#777078]">
              Consult directly with {CLINIC_INFO.doctorName} at our Zadeshwar,
              Bharuch clinic for evidence-led skin treatments, trichology care,
              and calibrated laser procedures.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-start gap-4 md:items-end">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A94F70] px-7 py-4 text-xs font-medium tracking-[0.14em] uppercase text-white transition-colors hover:bg-[#8C3D5A] sm:w-auto"
            >
              <span>Book via WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 font-medium tabular-nums text-[#292126] hover:text-[#A94F70] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#A94F70]" />
                <span>+91 {CLINIC_INFO.phone}</span>
              </a>
              <span aria-hidden="true" className="text-[#EBC2D0]">
                ·
              </span>
              <Link
                href="/contact"
                className="font-medium tracking-[0.08em] uppercase text-[#A94F70] underline underline-offset-4 hover:text-[#8C3D5A]"
              >
                Clinic Map & Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
