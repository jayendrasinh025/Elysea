export interface AppointmentFormValues {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  notes: string;
}

export type AppointmentFormErrors = Partial<Record<keyof AppointmentFormValues, string>>;

export function validateAppointmentForm(values: AppointmentFormValues): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  const trimmedName = values.name.trim();
  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name.';
  }

  const digitsOnly = values.phone.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 13) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  const trimmedEmail = values.email.trim();
  if (trimmedEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address or leave blank.';
  }

  if (!values.treatment.trim()) {
    errors.treatment = 'Please select a treatment or consultation area.';
  }

  return errors;
}

export function hasAppointmentErrors(errors: AppointmentFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function formatClinicPhoneHref(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `tel:+91${digits}`;
  }
  return `tel:+${digits}`;
}
