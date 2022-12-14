import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  selector: 'app-parent',
  template: `
  <p>Parent page</p>
  <a routerLink="./child/9">Child</a>
  <router-outlet></router-outlet>
  `
})
export class ParentComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    console.log(
      '-------------------------',
      this.activeRoute.snapshot.paramMap.get('name')
    );
  }
}
