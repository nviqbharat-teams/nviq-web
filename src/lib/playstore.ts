/**
 * Utility functions for Google Play Store Install Referrer and Deep Linking
 */

export const DEFAULT_APP_ID = "com.nviqbharat.nviq_partner";

export interface InviteReferrerParams {
  token?: string | null;
  mobile?: string | null;
  caseId?: string | null;
  [key: string]: string | null | undefined;
}

/**
 * Generates the Google Play Store internal / closed testing opt-in URL.
 * Testers must accept the invite via this link before they can download the app from Google Play.
 * e.g., https://play.google.com/apps/testing/com.nviqbharat.nviq_partner
 */
export function getPlayStoreTestingUrl(appId: string = DEFAULT_APP_ID): string {
  return `https://play.google.com/apps/testing/${encodeURIComponent(appId)}`;
}

/**
 * Builds the raw referrer query string from the invite parameters.
 * e.g., "token=abc&mobile=9876543210&caseId=123"
 */
export function buildReferrerString(params: InviteReferrerParams): string {
  const searchParams = new URLSearchParams();

  if (params.token) searchParams.set("token", params.token);
  if (params.mobile) searchParams.set("mobile", params.mobile);
  if (params.caseId) searchParams.set("caseId", params.caseId);

  // Add any additional non-empty params
  Object.entries(params).forEach(([key, value]) => {
    if (!["token", "mobile", "caseId"].includes(key) && value) {
      searchParams.set(key, value);
    }
  });

  return searchParams.toString();
}

/**
 * Generates the full Google Play Store URL with the URL-encoded referrer parameter.
 * Google Play Install Referrer requires the referrer value itself to be URL-encoded.
 */
export function getPlayStoreUrl(
  params: InviteReferrerParams,
  appId: string = DEFAULT_APP_ID
): string {
  const referrerString = buildReferrerString(params);

  if (!referrerString) {
    return `https://play.google.com/store/apps/details?id=${encodeURIComponent(appId)}&hl=en`;
  }

  // Google Play expects: ...?id=<PACKAGE_NAME>&referrer=<ENCODED_PARAMS>&hl=en
  return `https://play.google.com/store/apps/details?id=${encodeURIComponent(
    appId
  )}&referrer=${encodeURIComponent(referrerString)}&hl=en`;
}