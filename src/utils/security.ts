const UNSAFE_CHARS_REGEX = /[<>`]/g;

export function sanitizeText(input: string, maxLength = 200): string {
  return input.replace(UNSAFE_CHARS_REGEX, '').replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

export function sanitizeEmail(input: string): string | null {
  const value = sanitizeText(input, 254).toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? value : null;
}

export function sanitizePhone(input: string): string | null {
  const value = input.replace(/[^\d+\s()-]/g, '').trim().slice(0, 24);
  const digitCount = value.replace(/\D/g, '').length;
  return digitCount >= 7 ? value : null;
}

export function sanitizeAmount(input: string): number | null {
  const amount = Number(input);
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  return Math.round(amount);
}
