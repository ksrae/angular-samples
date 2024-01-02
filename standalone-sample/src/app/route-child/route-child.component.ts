import { CommonModule } from '@angular/common';
import { Component, ViewContainerRef, inject } from '@angular/core';
import { AddComponent } from './add-component/add.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  standalone: true,
  selector: 'route-child',
  templateUrl: './route-child.component.html',
  styleUrls: ['./route-child.component.scss'],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class RouteChildComponent {
  viewContainer = inject(ViewContainerRef);

  componentRef = this.viewContainer.createComponent(AddComponent);

  data = [
    1,2,3,4,5,6,7,8,9
  ];


}
