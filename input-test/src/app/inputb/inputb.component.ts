import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inputb',
  templateUrl: './inputb.component.html',
  styleUrls: ['./inputb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputbComponent implements OnChanges {
  @Input('result') set setResult(item: any) {
    console.log('setResultB', {item});
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log({changes});
  }
}
