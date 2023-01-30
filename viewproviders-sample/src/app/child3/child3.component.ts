import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThirdService } from '../third.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{provide: FirstService, useClass: ThirdService}]
})
export class Child3Component {
  val = this.firstService.val;

  constructor(
    private firstService: FirstService
  ) {}
}
