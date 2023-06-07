import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDemoComponent {
  @Input() key!: string;
  @Input() value!: string;
  @Input() disabled!: boolean;
}
