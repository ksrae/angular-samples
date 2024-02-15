import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FocusLastDirective } from './input-scroll.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    FocusLastDirective
  ],
  template: `<input type="text" appFocusLast  [formControl]="fm">`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-scroll';
  fm = new FormControl('1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm');
}
