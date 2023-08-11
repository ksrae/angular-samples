import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-complex-child',
  templateUrl: './content-complex-child.component.html',
  styleUrls: ['./content-complex-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComplexChildComponent {

}
