import { ChangeDetectionStrategy, Component, Directive, Host } from '@angular/core';
import { Route1Service } from '../route1.service';

@Component({
  selector: 'cmp',
  template: `
    cmp
  `,
})
export class DIComponent {}

@Directive({
  selector: "[host-di]"
})
export class HostDI {
 constructor(@Host() cmp: DIComponent) {
   console.log({cmp});
 }
}


@Component({
  selector: 'app-route-child',
  templateUrl: './route-child.component.html',
  styleUrls: ['./route-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteChildComponent {
  constructor(
    @Host() private route1Service: Route1Service
  ) {
    console.log('3', this.route1Service.key);
  }
}
