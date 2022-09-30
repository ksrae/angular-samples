import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from "@angular/core";

@Directive({
  selector: '[point]'
})
export class PointDirective implements AfterViewInit {
  @Input() from!: Array<number>;
  @Input() to!: Array<number>;
  @Input() lineColor: string = '#000';
  @Input() lineWidth: number = 1

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';

 }

 ngAfterViewInit(): void {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('height', '2000');
  canvas.setAttribute('width', '2000');
  canvas.style.cssText = 'position:fixed;'

  console.log(this.el);
  // this.renderer.appendChild(this.el.nativeElement , canvas);
  this.renderer.insertBefore(this.el.nativeElement.parentNode, canvas, this.el.nativeElement.parentNode.firstChild);
  // this.renderer.insertBefore(this.el.nativeElement.parentNode, canvas, this.el.nativeElement);
  this.drawLine(canvas);
 }
  private drawLine(canvas: HTMLCanvasElement) {
    console.log('el', this.el, this.el.nativeElement.getBoundingClientRect());

    if(!canvas.getContext) {
      return ;
    }

    const elPoint = this.el.nativeElement.getBoundingClientRect();
    console.log('from:', this.from, 'to:', this.to);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    ctx.strokeStyle = this.lineColor;
    ctx.lineWidth = this.lineWidth;

    ctx?.beginPath();
    ctx?.moveTo(this.from[0], this.from[1]);
    ctx?.lineTo(500, 300);
    ctx?.stroke();
  }


  // @HostListener('click', ['$event']) elementClick(e) {
  //   // e안에는 event객체가 들어온다.
  //   // this는 directive 객체를 지칭.
  //   alert(e.srcElement.innerHTML)
  // }

}
