import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TempComponent {

}
