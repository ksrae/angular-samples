import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, inject } from '@angular/core';
import { MyLibraryService } from './my-library.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-child-library',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <p>
      child-library works!
    </p>
    <p> observable value from service</p>
    {{ key$ | async }}

    <button (click)="emitValue()">EMIT</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildLibraryComponent implements OnInit {
  myLibraryService = inject(MyLibraryService);
  key$ = this.myLibraryService.value$;

  @Input() inputValue!: string;
  @Output() childEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('library loaded');
  }

  emitValue() {
    this.childEmitter.emit('Original Value is:'+ this.inputValue);
  }
}
