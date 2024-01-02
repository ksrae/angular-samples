import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
  <p>tab1 works!</p>
  <a [routerLink]="['/', {outlets: {popupType: ['popup']}}]" >Popup by tab1</a>
  `,
  styleUrl: './tab1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1Component {

}
