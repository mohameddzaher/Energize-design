export type Lang = "ar" | "en";

/** Format an ISO date string in the given language (Gregorian calendar). */
export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "gregory",
    numberingSystem: lang === "ar" ? "arab" : "latn",
  }).format(date);
}
