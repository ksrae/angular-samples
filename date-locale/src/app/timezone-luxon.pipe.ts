import { Pipe, PipeTransform, LOCALE_ID, Inject } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({ name: 'timezoneLuxon', pure: false })
export class TimezoneLuxonPipe implements PipeTransform {
  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {}

  transform(timestamp: number, format?: string, timezone?: string, automaticDST: boolean = false, locale?: string): string {
    locale = locale ?? this.locale;
    // console.log(DateTime.fromMillis(timestamp));
    format = format ?? 'yyyy MMM dd hh:mm:ss a';
    let datetime = DateTime.fromMillis(timestamp);
    datetime = !automaticDST && datetime.isInDST ? datetime.minus({hour: 1}) : datetime;

    return datetime
    .setLocale(locale)
    .toLocal()
    .setZone(timezone, {keepLocalTime: false})
    .toFormat(format);
    // .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }
}
