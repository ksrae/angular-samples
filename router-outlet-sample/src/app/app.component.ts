import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Route1Service } from './route1/route1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Route1Service]
})
export class AppComponent {
  title = 'router-outlet-sample';
  items = [
    { id: 1, name: 'first'},
    { id: 2, name: 'second'},
    { id: 3, name: 'third'},
    { id: 4, name: 'fourth'}
  ];

  constructor(
    private router: Router,
    private route1Service: Route1Service
  ) {
    this.route1Service.key = 'hhh';
    console.log(this.route1Service.key)
  }

  move() {
    this.router.navigate([
      {
        outlets: {
          route3: 'path3'
        }
      }
    ])
  }
}
