'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Phone } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '@/lib/clinic-data';
import {
  hasAppointmentErrors,
  validateAppointmentForm,
  type AppointmentFormErrors,
  type AppointmentFormValues,
} from '@/lib/booking-validation';

const INITIAL_VALUES: AppointmentFormValues = {
  name: '',
  phone: '',
  email: '',
  treatment: 'HydraFacial',
  preferredDate: '',
  notes: '',
};

export default function AppointmentForm({
  defaultTreatment,
}: {
  defaultTreatment?: string;
}) {
  const [values, setValues] = useState<AppointmentFormValues>({
    ...INITIAL_VALUES,
    treatment: defaultTreatment || INITIAL_VALUES.treatment,
  });
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [submitted, setSubmitted] = useState<AppointmentFormValues | null>(null);

  const handleChange = (
    field: keyof AppointmentFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAppointmentForm(values);
    if (hasAppointmentErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(values);
  };

  if (submitted) {
    return (
      <div
        data-testid="booking-confirmation"
        className="rounded-2xl border border-[#EBC2D0] bg-white p-8 md:p-10"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#A94F70]" />
          <div>
            <p className="label-editorial">Request Prepared</p>
            <h3 className="mt-2 font-editorial text-2xl text-[#292126]">
              Thank you, {submitted.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#777078]">
              Your consultation request for{' '}
              <span className="font-medium text-[#292126]">
                {submitted.treatment}
              </span>{' '}
              ({submitted.phone}) is ready. Complete instant slot confirmation
              directly with ELYSEA Aesthetic Clinic via WhatsApp or phone.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#A94F70] px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A]"
          >
            <span>Confirm on WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#EBC2D0] px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase text-[#292126] transition-colors hover:border-[#A94F70]"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(null);
              setValues(INITIAL_VALUES);
            }}
            className="px-4 py-3 text-xs tracking-[0.1em] uppercase text-[#777078] underline underline-offset-4 hover:text-[#292126]"
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-2xl border border-[#EBC2D0] bg-white p-7 md:p-10"
    >
      <div>
        <p className="label-editorial">Consultation Request</p>
        <h3 className="mt-2 font-editorial text-2xl text-[#292126]">
          Schedule Your Visit
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-name"
            className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
          >
            Full Name *
          </label>
          <input
            id="booking-name"
            type="text"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Your full name"
            className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm text-[#292126] placeholder:text-[#777078]/70 focus:border-[#A94F70] focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-[#A94F70]" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-phone"
            className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
          >
            Mobile Number *
          </label>
          <input
            id="booking-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="10-digit mobile number"
            className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm tabular-nums text-[#292126] placeholder:text-[#777078]/70 focus:border-[#A94F70] focus:outline-none"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-[#A94F70]" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-treatment"
            className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
          >
            Treatment Focus *
          </label>
          <select
            id="booking-treatment"
            value={values.treatment}
            onChange={(e) => handleChange('treatment', e.target.value)}
            className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm text-[#292126] focus:border-[#A94F70] focus:outline-none"
          >
            {TREATMENTS.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="General Skin & Hair Consultation">
              General Skin & Hair Consultation
            </option>
          </select>
          {errors.treatment && (
            <p className="mt-1.5 text-xs text-[#A94F70]" role="alert">
              {errors.treatment}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-date"
            className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
          >
            Preferred Date
          </label>
          <input
            id="booking-date"
            type="date"
            value={values.preferredDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm text-[#292126] focus:border-[#A94F70] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="booking-email"
          className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
        >
          Email (Optional)
        </label>
        <input
          id="booking-email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="name@example.com"
          className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm text-[#292126] placeholder:text-[#777078]/70 focus:border-[#A94F70] focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-[#A94F70]" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="booking-notes"
          className="block text-xs tracking-[0.1em] uppercase text-[#292126]"
        >
          Skin or Hair Concern
        </label>
        <textarea
          id="booking-notes"
          rows={3}
          value={values.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          placeholder="Briefly share your goals or preferred time..."
          className="mt-2 w-full rounded-lg border border-[#EBC2D0] bg-[#FFF8FA] px-4 py-3 text-sm text-[#292126] placeholder:text-[#777078]/70 focus:border-[#A94F70] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#A94F70] px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-[#8C3D5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A94F70]"
        >
          Request Appointment
        </button>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase text-[#A94F70] underline underline-offset-4 hover:text-[#8C3D5A]"
        >
          <span>Or Book Instantly on WhatsApp</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </form>
  );
}
