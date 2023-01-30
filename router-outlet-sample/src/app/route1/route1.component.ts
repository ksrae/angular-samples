import { ChangeDetectionStrategy, Component, Host, Self, SkipSelf } from '@angular/core';
import { Route3Service } from '../route3/route3.service';
import { Route1Service } from './route1.service';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss'],
  providers: [

  ],
  viewProviders: [Route1Service],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route1Component {
  constructor(
    private route1Service: Route1Service,
    private route3: Route3Service
  ) {

    console.log('1',this.route1Service.key);
    this.route3.index += 100;
    console.log('route3', this.route3.index);
  }
}
