import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SecondService } from '../second.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FirstService],
  viewProviders: [{provide: FirstService, useClass: SecondService}]
})
export class Child1Component {
  val = this.firstService.val;

  constructor(
    private firstService: FirstService
  ) {}
}
