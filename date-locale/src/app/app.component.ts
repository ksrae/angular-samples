import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { FormControl } from '@angular/forms';
import { map, first, tap } from 'rxjs';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timezone$: any;
  timezoneControl = new FormControl();
  aaa: any;
  today: any;

  constructor(
    private configService: ConfigService
    ) {}

  ngOnInit(): void {
    this.today = DateTime.now().toFormat('yyyy MMM dd hh:mm:ss ZZ');

    this.timezone$ = this.configService.config;
    this.timezoneControl.valueChanges.subscribe(value => {

      this.timezone$.pipe(
        first(),
        map((timezone: any[]) => {

          return timezone.find((tz: any) => tz.id === value);
        }),
        tap((timezone: any) => {

          this.aaa = DateTime.now()
          //.fromMillis(this.today)
          // .setLocale(value.identifier)
          // .toLocal()
          .setZone(timezone.identifier, {keepLocalTime: false})
          .toFormat('yyyy MMM dd hh:mm:ss a');

          // this.bbb = DateTime.fromMillis(this.bbb)
          // // .setLocale(value.identifier)
          // // .toLocal()
          // .setZone(timezone.identifier, {keepLocalTime: false})
          // .toFormat('yyyy MMM dd hh:mm:ss ZZ');
        })
      ).subscribe();
    });
  }
}
