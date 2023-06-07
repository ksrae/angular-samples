import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-button-demo',
  templateUrl: './custom-button-demo.component.html',
  styleUrls: ['./custom-button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomButtonDemoComponent {
  result = false;


  demo() {
    this.result = !this.result;
  }

}
