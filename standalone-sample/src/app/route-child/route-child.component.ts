import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'route-child',
  templateUrl: './route-child.component.html',
  styleUrls: ['./route-child.component.scss'],
  imports: [
    CommonModule
  ]
})
export class RouteChildComponent {
  data = [
    1,2,3,4,5,6,7,8,9
  ];
}
