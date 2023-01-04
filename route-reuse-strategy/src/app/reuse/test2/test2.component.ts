import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2Component implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(`test2 open: ${this.activatedRoute.snapshot}`);
  }

}
