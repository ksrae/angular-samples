import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-multi-child',
  templateUrl: './content-multi-child.component.html',
  styleUrls: ['./content-multi-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentMultiChildComponent {

}
