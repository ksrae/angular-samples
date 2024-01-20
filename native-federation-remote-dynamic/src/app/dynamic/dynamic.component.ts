import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>DYNAMIC</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent {

}
