import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MyLibraryService } from './my-library.service';
import { AsyncPipe } from '@angular/common';
import { ChildLibraryComponent } from './child-library.component';

@Component({
  selector: 'lib-my-library',
  standalone: true,
  imports: [AsyncPipe, ChildLibraryComponent],
  template: `
    <p>
      my-library works!
    </p>
    <lib-child-library [inputValue]="originInputValue" (childEmitter)="getChildValue($event)"></lib-child-library>
    <br/>
    <br/>
    {{ 'value from child: ' + result}}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyLibraryComponent implements OnInit {
  myLibraryService = inject(MyLibraryService);
  originInputValue!: string;
  result!: string;

  @Input() set value(item: string) {
    this.originInputValue = item;
    this.myLibraryService.setValue(item);
  }

  ngOnInit(): void {
    console.log('library loaded');
  }

  getChildValue(e: any) {
    this.result = e;
  }
}
