/** Numero solo cifre con prefisso internazionale, es. 393201234567 */
export function normalizeWhatsAppDigits(input: string): string {
  return input.replace(/\D/g, "");
}

export function buildWhatsAppUrl(phoneDigits: string, message: string): string {
  const digits = normalizeWhatsAppDigits(phoneDigits);
  if (!digits) return "#";
  const text = message.trim();
  const base = `https://wa.me/${digits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** Per link tel: da numero visualizzato tipo +39 320 123 4567 */
export function buildTelHref(displayPhone: string): string {
  const digits = displayPhone.replace(/\D/g, "");
  if (!digits) return "tel:";
  return `tel:+${digits}`;
}
