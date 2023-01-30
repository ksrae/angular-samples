import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Host } from '@angular/core';
import { Route1Service } from '../route1.service';

@Component({
  selector: 'app-path1',
  templateUrl: './path1.component.html',
  styleUrls: ['./path1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path1Component {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private route1Service: Route1Service
  ) {
    console.log('snapshot', this.route.snapshot);
    console.log('router', this.router.url);
    console.log('2', this.route1Service.key);

  }
}
