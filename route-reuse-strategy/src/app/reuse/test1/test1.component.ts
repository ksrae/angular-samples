import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1Component implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(`test1 open: ${this.activatedRoute.snapshot}`);
  }
}
