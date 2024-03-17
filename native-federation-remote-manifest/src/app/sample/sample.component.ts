import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule],
  template: `<p>REMOTE SAMPLE</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {

}
