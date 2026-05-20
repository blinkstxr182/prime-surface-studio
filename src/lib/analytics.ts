// Google Ads conversion send_to value — from Google Ads → Conversions → Contact action.
// Override via NEXT_PUBLIC_GADS_CONVERSION_LABEL if you change conversion actions.
const DEFAULT_CONVERSION_LABEL = "AW-18103141318/io6OCKT9qa0cEMaHoLhD";

export function fireGoogleAdsConversion() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;

  const sendTo =
    process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? DEFAULT_CONVERSION_LABEL;

  w.gtag("event", "conversion", { send_to: sendTo });
}
