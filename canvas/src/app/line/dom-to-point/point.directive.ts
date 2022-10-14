import { BehaviorSubject } from 'rxjs';
import { Directive, ElementRef, Input, Renderer2, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { TooltipPosition } from './tooltip.interface';

@Directive({
  selector: '[point]'
})
export class PointDirective implements AfterViewInit {

  // isClose$ = new BehaviorSubject<boolean>(false);

  @Input() set position(item: TooltipPosition) {
    this.drawLine();
    this.prevFrom = item.from;
  }

  @Input() lineColor: string = '#000';
  @Input() lineWidth: number = 1;
  // @Input() set clear(item: boolean) {
  //   console.log('clear', item);
  //   // this.drawLine(true);
  //   this.isClose$.next(item);
  // }
  @Output() pointEmitter = new EventEmitter<any>();


  prevFrom!: number[];
  prevTo!: number[];



  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';

 }

 // https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect

 ngAfterViewInit(): void {
  this.createCanvas();


 }

  private createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('height', '2000');
    canvas.setAttribute('width', '2000');
    canvas.style.cssText = 'position:fixed;'

    // console.log('parentNode', this.el.nativeElement.parentNode, 'firstChild', this.el.nativeElement.parentNode.firstChild);
    this.renderer.insertBefore(this.el.nativeElement.parentNode, canvas, this.el.nativeElement.parentNode.firstChild);

    this.drawLine();
  }

  private drawLine() {
    const canvas = this.el.nativeElement.parentNode.firstChild;
    const parentElPoint = this.el.nativeElement.parentNode.getBoundingClientRect();
    const elPoint = this.el.nativeElement.getBoundingClientRect();

    if(!canvas.getContext) {
      return ;
    }
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const left = elPoint.left - parentElPoint.left;
    const top = elPoint.top - parentElPoint.top;
    const right = elPoint.right - parentElPoint.left;
    const bottom = elPoint.bottom - parentElPoint.top;

    const distanceLeftTop = this.distance(this.prevFrom, [left, top]);
    const distanceRightTop = this.distance(this.prevFrom, [right, top]);
    const distanceLeftBottom = this.distance(this.prevFrom, [left, bottom]);
    const distanceRightBottom = this.distance(this.prevFrom, [right, bottom]);

    const distance = [distanceLeftTop, distanceRightTop, distanceLeftBottom, distanceRightBottom];
    const point = distance.reduce((prev, cur) => {
      return prev.distance < cur.distance ? prev : cur;
    })

    if(!point) return ;

    // remove
    const x = Math.min(this.prevFrom[0], this.prevTo ? this.prevTo[0] : point.x);
    const y = Math.min(this.prevFrom[1], this.prevTo ? this.prevTo[1] : point.y);
    const w = Math.abs(this.prevFrom[0] - (this.prevTo ? this.prevTo[0]: point.x));
    const h = Math.abs(this.prevFrom[1] - (this.prevTo ? this.prevTo[1]: point.y));

    ctx.clearRect(x-1,y-1,w+2,h+2); // 잔상제거

    // console.log(this.prevTo ? 'this.prevTo[0]' : 'point.x');
    // console.log({x},{y},{w},{h});


    // if(!clearOnly) {
      ctx.strokeStyle = this.lineColor;
      ctx.lineWidth = this.lineWidth;

      // draw line
      ctx?.beginPath();

      // ctx?.moveTo(elPoint.left - parentElPoint.left, elPoint.top - parentElPoint.top);
      ctx?.moveTo(point.x, point.y);
      ctx?.lineTo(this.prevFrom[0],this.prevFrom[1]);
      ctx?.stroke();
      ctx?.closePath();

      this.prevTo = [point.x, point.y];
    // }



  }

  private distance(from: number[], to: number[]) {
    let x = to[0] - from[0];
    let y = to[1] - from[1];

    return {x: to[0], y: to[1], distance: Math.sqrt((x * x) + (y * y))};
  }

}
