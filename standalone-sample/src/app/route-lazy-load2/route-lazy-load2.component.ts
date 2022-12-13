import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'route-lazy-load2',
  templateUrl: './route-lazy-load2.component.html',
  styleUrls: ['./route-lazy-load2.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RouteLazyLoad2Component {
  title = 'standalone-sample';
}
