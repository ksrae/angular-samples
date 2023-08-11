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
  timezone!: any;
  isDSTOn!: boolean;
  selectedTimezone: any;
  aaa: any;

  result: any;
  toggleDST = false;

  today: any;

  constructor(
    private configService: ConfigService
    ) {}

  ngOnInit(): void {
    this.timezone$ = this.configService.config;
    this.timezoneControl.setValue(DateTime.local().zoneName);

    this.today = DateTime.now().toFormat('yyyy MMM dd hh:mm:ss a');
    this.setTimezone(this.timezoneControl.value);

    this.timezoneControl.valueChanges.subscribe((value: any) => {
      this.selectedTimezone = value;
      this.setTimezone(value);
    });
  }

  setTimezone(value: any) {
    this.timezone = DateTime.now()
    //.fromMillis(this.today)
    // .setLocale(value.identifier)
    // .toLocal()
    .setZone(value, {keepLocalTime: false});
    this.isDSTOn = this.timezone.isInDST ? true : false;
    this.toggleDST = this.isDSTOn;

    this.aaa = this.timezone.toFormat('yyyy MMM dd hh:mm:ss a');
    this.result = this.aaa;

    console.log(this.timezone);

    // this.withDST = this.timezone.toFormat('yyyy MMM dd hh:mm:ss a');
    // if(this.timezone.isInDST) {
    //   this.noDST = this.timezone.minus({hours: 1}).toFormat('yyyy MMM dd hh:mm:ss a');
    // } else {
    //   this.noDST = this.withDST;
    // }

  }
  setDST() {
    this.toggleDST = !this.toggleDST;
    // this.withDST = this.timezone.toFormat('yyyy MMM dd hh:mm:ss a');
    // this.noDST = this.timezone.minus({hours: 1}).toFormat('yyyy MMM dd hh:mm:ss a');

    const tz = this.toggleDST ? this.timezone: this.timezone.minus({hours: 1});
    this.result = tz.toFormat('yyyy MMM dd hh:mm:ss a');

  }
}
// 서버에 저장할 때는 title, isDSTOn
