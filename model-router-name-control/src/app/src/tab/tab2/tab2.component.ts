import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
  <p>tab2 works!</p>
  <a [routerLink]="['/', {outlets: {popupType: ['popup']}}]" >Popup by tab2</a>
  `,
  styleUrl: './tab2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab2Component { }
