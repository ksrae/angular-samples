import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-one',
  templateUrl: './content-one.component.html',
  styleUrls: ['./content-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentOneComponent {

}
