import { Pipe, PipeTransform, LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from "@angular/common";
import { TimezoneService } from "./timezone.service";

@Pipe({ name: 'timezone' })
export class TimezonePipe implements PipeTransform {
  constructor(
    private timezoneService: TimezoneService
  ) {}

  transform(timestamp: number | Date | undefined, format?: string, locale?: string): string {
    if(timestamp) {
      return this.timezoneService.setTimezone(timestamp, format, locale);
    }
    console.log('Date value is empty')
    return '';

  }
}
