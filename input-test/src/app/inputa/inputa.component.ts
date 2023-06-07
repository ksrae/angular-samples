import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputa',
  templateUrl: './inputa.component.html',
  styleUrls: ['./inputa.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputaComponent {
  @Input('result') set setResult(item: any) {
    console.log('setResultA', {item});
  }
}
