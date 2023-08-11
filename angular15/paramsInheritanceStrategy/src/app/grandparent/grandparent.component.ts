import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  selector: 'app-grandparent',
  template: `
  <p>GrandParent page</p>
  <a routerLink="./parent/aaa">Parent</a>
  <router-outlet></router-outlet>

  `
})
export class GrandparentComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    console.log(
      '=====================',
      this.activeRoute.snapshot.paramMap.get('id')
    );
  }
}
