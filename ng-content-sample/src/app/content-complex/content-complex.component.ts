import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-complex',
  templateUrl: './content-complex.component.html',
  styleUrls: ['./content-complex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComplexComponent {

}
