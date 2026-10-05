import type { Period } from "@/content/profile";
import { htmlLang, type Locale } from "@/i18n/config";

function toDate(yearMonth: string): Date {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1));
}

function formatMonth(yearMonth: string, locale: Locale): string {
  return new Intl.DateTimeFormat(htmlLang[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(toDate(yearMonth))
    .replace(" de ", " ")
    .replace(".", "");
}

export function formatPeriod(
  period: Period,
  locale: Locale,
  presentLabel: string
): string {
  const end = period.end ? formatMonth(period.end, locale) : presentLabel;
  return `${formatMonth(period.start, locale)} – ${end}`;
}
