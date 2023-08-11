import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route3Service } from '../route3/route3.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route2Component {
  constructor(
    private route3: Route3Service
  ) {
    this.route3.index += 100;
    console.log(this.route3.index);
  }
}
