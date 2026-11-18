import type { Metadata } from 'next';
import TreatmentsCatalog from '@/components/TreatmentsCatalog';
import AppointmentCtaSection from '@/components/AppointmentCtaSection';

export const metadata: Metadata = {
  title: 'Treatments | Skin, Hair & Laser Procedures',
  description:
    'Explore HydraFacial, chemical peels, acne management, pigmentation care, laser hair reduction, hair fall treatment, PRP/GFC, and mesotherapy at ELYSEA Aesthetic Clinic.',
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="border-b border-[#EBC2D0] bg-gradient-to-b from-[#FFF8FA] to-[#F6DCE5]/45 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="label-editorial">Clinical Menu</p>
          <h1 className="mt-4 max-w-3xl font-editorial text-4xl leading-tight text-[#292126] sm:text-5xl text-balance">
            Skin, hair & laser treatments calibrated for measurable clarity.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#777078]">
            Select a clinical discipline below or open any procedure to review
            session durations, protocol steps, and suitability guidance.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8FA] py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <TreatmentsCatalog />
        </div>
      </section>

      <AppointmentCtaSection />
    </>
  );
}
