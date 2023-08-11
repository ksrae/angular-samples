import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  val = this.firstService.val;

  constructor(
    private firstService: FirstService
  ) {}
}
