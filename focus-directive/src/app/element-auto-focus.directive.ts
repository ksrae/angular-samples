import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[elementAutoFocus]' })
export class ElementAutoFocusDirective implements AfterViewInit {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.selectRootElement(this.element.nativeElement).focus();
    }, 0);

  }
}
