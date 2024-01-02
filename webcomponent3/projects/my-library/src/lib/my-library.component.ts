import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-my-library',
  standalone: true,
  imports: [],
  template: `
    <p>
      my-library works!
    </p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyLibraryComponent implements OnInit {
  ngOnInit(): void {
    console.log('library loaded')
  }
}
