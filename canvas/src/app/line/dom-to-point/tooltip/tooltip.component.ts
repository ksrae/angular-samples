import { Renderer2, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, EventEmitter, AfterViewInit, Input, OnInit, Output, ViewContainerRef, OnDestroy } from '@angular/core';
import { TooltipPosition } from '../tooltip.interface';

@Component({
  selector: 'line-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit, AfterViewInit, OnDestroy {

  isPin = false;
  initTo!: number[];

  from!: number[];
  to!: number[];

  defaultDistance: number[] = [50,50];


  @Input() set clear(remove: boolean) {
    console.log('clear tooltip', remove);
    this.close();
  }


  /**
   * if tooltip position is over its parent width / height,
   *
   * then set tooltip position to inside of its parent.
   *
   * @memberof TooltipComponent
   */
  @Input() set position(item: TooltipPosition) {
    console.log('position', this.el.nativeElement.firstChild);
    const tooltipWidth = this.el.nativeElement.firstChild.clientWidth;
    const tooltipHeight = this.el.nativeElement.firstChild.clientHeight;

    let tox = 0;
    let toy = 0;

    this.from = item.from;

    if(item.to) {
      tox = item.to[0];
      toy = item.to[1];

    } else {
      tox = this.from[0] + this.defaultDistance[0];
      toy = this.from[1] + this.defaultDistance[1];

      if(this.from[0] + this.defaultDistance[0] + tooltipWidth >= this.el.nativeElement.parentNode.parentNode.clientWidth) {
        tox = this.from[0] - this.defaultDistance[0] - tooltipWidth;
      }
      if(this.from[1] + this.defaultDistance[1] + tooltipHeight >= this.el.nativeElement.parentNode.parentNode.clientHeight) {
        toy = this.from[1] - this.defaultDistance[1] - tooltipHeight;
      }

      this.to = [tox, toy];
      this.initTo = this.to;
    }

  }
  @Input() lineColor: string = '#000';
  @Input() lineWidth: number = 1;
  @Input() tooltip: any;
  @Output() tooltipCloseEvent = new EventEmitter<void>();
  @Output() pinEvent = new EventEmitter<boolean>();

  constructor(
    private renderer2: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    // this.drawLine();
    // console.log('parentNode', this.el.nativeElement.parentNode.parentNode.clientWidth, this.el.nativeElement.parentNode.parentNode.clientHeight);
  }

  dragging(e: any) {
    // console.log(e);
    this.to = [e.pointerPosition.x, e.pointerPosition.y];
  }
  drop(e: any) {
    console.log('drop:', {e});
  }
  pin() {
    this.isPin = !this.isPin;
    this.pinEvent.emit(this.isPin);
  }

  close() {
    this.tooltipCloseEvent.emit();

  }

  setpoint(e: any) {
    console.log(e);
  }
  ngOnDestroy() {
    console.log('destroy');
  }
}
