import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';

@Component({
  selector: 'is-in-angular-zone',
  templateUrl: './is-in-angular-zone.component.html',
  styleUrls: ['./is-in-angular-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsInAngularZoneComponent implements OnInit {

  constructor(
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.onUnstable.emit('123123123')
    console.log(
      '////////////////////////////////',
      'NgZone.onUnstable()',

    );

    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onUnstable.emit('321321321')
    console.log(
      '////////////////////////////////',
      '2NgZone.hasPendingMacrotasks()',

    );
    });
  }
}
