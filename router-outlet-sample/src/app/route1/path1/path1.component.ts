import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-path1',
  templateUrl: './path1.component.html',
  styleUrls: ['./path1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path1Component {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('snapshot', this.route);
    console.log('router', this.router.url);
  }
}
