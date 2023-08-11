import { Injectable, LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";

@Injectable({providedIn: 'root'})
export class TimezoneService {
  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {}

  setTimezone(timestamp: number | Date, format?: string, locale?: string): string {
    locale = locale ?? this.locale;
    format = format ?? 'medium';
    return formatDate(timestamp, format, locale);
    // return new Intl.DateTimeFormat(this.locale).format(timestamp);
  }
}
