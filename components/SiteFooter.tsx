import Link from 'next/link';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '@/lib/clinic-data';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#EBC2D0] bg-[#F6DCE5]/55 text-[#292126]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand & Specialist Identity */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-editorial text-3xl tracking-[0.2em] text-[#292126]"
            >
              {CLINIC_INFO.brand}
            </Link>
            <p className="mt-3 text-xs tracking-[0.16em] uppercase text-[#A94F70]">
              Aesthetic Clinic · Bharuch
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#292126]/80">
              Physician-led dermatology, trichology, and laser aesthetics
              designed around clinical safety, natural skin harmony, and
              measurable progress.
            </p>
            <div className="mt-6 border-t border-[#EBC2D0] pt-5">
              <p className="font-editorial text-lg text-[#292126]">
                {CLINIC_INFO.doctorName}
              </p>
              <p className="mt-1 text-xs text-[#777078]">
                {CLINIC_INFO.doctorCredentials}
              </p>
              <p className="mt-1 text-xs text-[#A94F70]">
                {CLINIC_INFO.doctorSpecialties}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="label-editorial">Clinic</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#A94F70] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A94F70] transition-colors">
                  About ELYSEA
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-[#A94F70] transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#A94F70] transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#A94F70] transition-colors">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A94F70] transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Procedures */}
          <div className="md:col-span-2">
            <p className="label-editorial">Treatments</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="hover:text-[#A94F70] transition-colors"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Direct Booking */}
          <div className="md:col-span-3">
            <p className="label-editorial">Visit & Connect</p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A94F70]" />
                <address className="not-italic leading-relaxed text-[#292126]/85">
                  {CLINIC_INFO.addressLine1}
                  <br />
                  {CLINIC_INFO.addressLine2}
                  <br />
                  {CLINIC_INFO.addressLine3}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#A94F70]" />
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="font-medium tabular-nums hover:text-[#A94F70] transition-colors"
                >
                  +91 {CLINIC_INFO.phone}
                </a>
              </div>

              <p className="text-xs text-[#777078]">{CLINIC_INFO.hours}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#A94F70] px-4 py-2 text-xs font-medium tracking-wider uppercase text-white transition-colors hover:bg-[#8C3D5A]"
                >
                  WhatsApp Booking
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={CLINIC_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#A94F70]/40 bg-white/70 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#292126] transition-colors hover:border-[#A94F70]"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#EBC2D0] pt-6 text-xs text-[#777078] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.fullName}. Led by{' '}
            {CLINIC_INFO.doctorName}.
          </p>
          <p>52, Sharnam Sky, Zadeshwar, Bharuch, Gujarat – 392001</p>
        </div>
      </div>
    </footer>
  );
}
