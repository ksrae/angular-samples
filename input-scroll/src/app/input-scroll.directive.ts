import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
  selector: '[appFocusLast]',
  standalone: true
})
export class FocusLastDirective {
  el = inject(ElementRef);


  @HostListener('focus')
  onFocus() {
    const inputElement: HTMLInputElement = this.el.nativeElement;
    setTimeout(() => {
      inputElement.blur();
      inputElement.focus();
      let len = inputElement.value.length;
      inputElement.setSelectionRange(len, len);
    });
  }
}
