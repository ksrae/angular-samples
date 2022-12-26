import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Route1Component {

}
