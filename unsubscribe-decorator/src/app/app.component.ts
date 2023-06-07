import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsubscribe-decorator';

  constructor(
    private route: Router
  ) {}

  close(e: any) {
    e.preventDefault();
    this.route.navigateByUrl('/');
  }
}
