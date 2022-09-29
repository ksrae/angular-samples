import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-to-point',
  templateUrl: './dom-to-point.component.html',
  styleUrls: ['./dom-to-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomToPointComponent implements OnInit, AfterContentInit, AfterViewInit {
  // @ViewChild('canvas') public canvas!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    // this.drawLine();
  }

  // drawLine() {
  //   if(!this.canvas?.nativeElement || !this.canvas?.nativeElement?.getContext) {
  //     return ;
  //   }

  //   const ctx = this.canvas?.nativeElement?.getContext("2d");

  //   ctx.strokeStyle = 'red';
  //   ctx.lineWidth = 3;

  //   ctx.beginPath();
  //   ctx.moveTo(0,0);
  //   ctx.lineTo(500, 500);
  //   ctx.stroke();
  // }

}
