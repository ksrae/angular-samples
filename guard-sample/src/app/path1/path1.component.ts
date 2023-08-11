import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path1',
  templateUrl: './path1.component.html',
  styleUrls: ['./path1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path1Component implements OnInit {
  constructor(
  ) {}

  ngOnInit() {
    console.log('path1component');
  }
}
