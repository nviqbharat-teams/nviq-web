// Single source for the sales number (calls + WhatsApp). Change it here only.
export const SALES_PHONE_E164 = "+919257038711";
export const SALES_PHONE_DISPLAY = "+91 92570 38711";
export const SALES_TEL_HREF = `tel:${SALES_PHONE_E164}`;
const SALES_WA_NUMBER = "919257038711";

export function whatsappHref(message: string): string {
  return `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Support line (existing customers / after-sales). Shown only in footer, About and Contact.
export const SUPPORT_PHONE_E164 = "+919257038712";
export const SUPPORT_PHONE_DISPLAY = "+91 92570 38712";
export const SUPPORT_TEL_HREF = `tel:${SUPPORT_PHONE_E164}`;
