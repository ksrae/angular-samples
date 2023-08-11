import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-one-child',
  templateUrl: './content-one-child.component.html',
  styleUrls: ['./content-one-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentOneChildComponent {

}
