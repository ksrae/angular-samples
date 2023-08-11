import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'content-conditional',
  templateUrl: './content-conditional.component.html',
  styleUrls: ['./content-conditional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentConditionalComponent {

}
