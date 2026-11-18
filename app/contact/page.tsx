import type { Metadata } from 'next';
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import AppointmentForm from '@/components/AppointmentForm';
import { CLINIC_INFO } from '@/lib/clinic-data';

export const metadata: Metadata = {
  title: 'Contact & Appointment Booking',
  description:
    'Visit ELYSEA Aesthetic Clinic at 52, Sharnam Sky, Zadeshwar, Bharuch, Gujarat 392001. Call +91 8141115873 or book via WhatsApp with Dr. Vrujal Mistry.',
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="label-editorial">Visit & Book</p>
          <h1 className="mt-4 max-w-3xl font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
            Consult with {CLINIC_INFO.doctorName} in Bharuch.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#777078]">
            Schedule an in-clinic evaluation at ELYSEA Aesthetic Clinic, call
            our front desk directly, or message us on WhatsApp for rapid slot
            confirmation.
          </p>
        </div>
      </section>

      {/* Contact Details + Booking Form */}
      <section className="border-b border-[#EBC2D0] bg-[#FFF8FA] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12">
          {/* Clinic Info Column */}
          <div className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-[#EBC2D0] bg-white p-8">
              <p className="label-editorial">Clinic Directory</p>
              <h2 className="mt-2 font-editorial text-2xl text-[#292126]">
                {CLINIC_INFO.fullName}
              </h2>
              <p className="mt-1 text-sm font-medium text-[#A94F70]">
                {CLINIC_INFO.doctorName}
              </p>
              <p className="text-xs text-[#777078]">
                {CLINIC_INFO.doctorCredentials}
              </p>

              <div className="mt-7 space-y-5 border-t border-[#EBC2D0] pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A94F70]" />
                  <address className="not-italic leading-relaxed text-[#292126]">
                    {CLINIC_INFO.addressLine1}
                    <br />
                    {CLINIC_INFO.addressLine2}
                    <br />
                    {CLINIC_INFO.addressLine3}
                  </address>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#A94F70]" />
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="font-medium tabular-nums text-[#292126] hover:text-[#A94F70] transition-colors"
                  >
                    +91 {CLINIC_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#A94F70]" />
                  <span className="text-[#777078]">{CLINIC_INFO.hours}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A94F70] px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A]"
                >
                  <span>WhatsApp Booking</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#EBC2D0] bg-[#FFF8FA] px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-[#292126] transition-colors hover:border-[#A94F70]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#A94F70]" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Form Column */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Embedded Google Map + Get Directions */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-editorial">Location</p>
              <h2 className="mt-3 font-editorial text-3xl text-[#292126]">
                52, Sharnam Sky, Zadeshwar, Bharuch
              </h2>
            </div>

            <a
              href={CLINIC_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#A94F70] px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A]"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-[#EBC2D0] bg-[#F6DCE5]">
            <iframe
              title="ELYSEA Aesthetic Clinic Location Map — 52, Sharnam Sky, Zadeshwar, Bharuch"
              src={CLINIC_INFO.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 md:h-[460px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
