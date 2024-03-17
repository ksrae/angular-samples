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
    }, 0);
  }

  // isBlur = false;
  // @HostListener('blur')
  // onBlur() {
  //   const inputElement: HTMLInputElement = this.el.nativeElement;
  //   setTimeout(() => {
  //     inputElement.focus();
  //     if(!this.isBlur) {
  //       inputElement.blur();
  //       this.isBlur = true;
  //       let len = inputElement.value.length;
  //       inputElement.setSelectionRange(len, len);
  //     } else {
  //       this.isBlur = false;
  //     }
  //   }, 0);
  // }
}
