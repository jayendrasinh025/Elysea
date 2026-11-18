import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatClinicPhoneHref,
  hasAppointmentErrors,
  validateAppointmentForm,
} from './booking-validation';

test('validateAppointmentForm flags missing required fields and invalid phone', () => {
  const errors = validateAppointmentForm({
    name: 'A',
    phone: '1234',
    email: 'bad-email',
    treatment: '',
    preferredDate: '',
    notes: '',
  });

  assert.equal(hasAppointmentErrors(errors), true);
  assert.ok(errors.name);
  assert.ok(errors.phone);
  assert.ok(errors.email);
  assert.ok(errors.treatment);
});

test('validateAppointmentForm passes with valid name, 10-digit phone, optional blank email, and treatment', () => {
  const errors = validateAppointmentForm({
    name: 'Riya Patel',
    phone: '81411 15873',
    email: '',
    treatment: 'HydraFacial',
    preferredDate: '2026-11-24',
    notes: 'Evening slot preferred',
  });

  assert.equal(hasAppointmentErrors(errors), false);
});

test('formatClinicPhoneHref formats 10-digit Indian phone numbers cleanly', () => {
  assert.equal(formatClinicPhoneHref('8141115873'), 'tel:+918141115873');
});
