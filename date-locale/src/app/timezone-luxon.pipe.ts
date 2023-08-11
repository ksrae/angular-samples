import { Pipe, PipeTransform, LOCALE_ID, Inject } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({ name: 'timezoneLuxon', pure: false })
export class TimezoneLuxonPipe implements PipeTransform {
  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {}

  transform(timestamp: number, format?: string, locale?: string, timezone?: string): string {
    locale = locale ?? this.locale;
    // console.log(DateTime.fromMillis(timestamp));
    format = format ?? 'ccc';

    return DateTime.fromMillis(timestamp)
    .setLocale(locale)
    .toLocal()
    .setZone(timezone, {keepLocalTime: false})
    .toFormat(format);
    // .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }
}
