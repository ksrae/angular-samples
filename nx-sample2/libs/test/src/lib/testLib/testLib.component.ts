import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testLib.component.html',
  styleUrl: './testLib.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestLibComponent {}
