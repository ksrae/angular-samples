import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router-outlet-sample';

  constructor(
    private router: Router
  ) {}

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
