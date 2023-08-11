import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  selector: 'app-child',
  template: `
  <p>Child page</p>
  `
})
export class ChildComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute
  ) {

  }

  // paramsInheritanceStrategy: 'emptyOnly' 인 경우,
  // params: {index: '9'}

  // paramsInheritanceStrategy: 'always' 인 경우,
  // params: {id: '1', name: 'aaa', index: '9'}
  ngOnInit(): void {
    console.log(
      '@@@@@@@@@@@@@@@@@@@@@@@@@@@',
      this.activeRoute.snapshot.paramMap.get('id'),
      this.activeRoute.snapshot.paramMap.get('index'),
      this.activeRoute.snapshot.paramMap
    );
  }
}
