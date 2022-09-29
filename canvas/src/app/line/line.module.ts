import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { DomToPointComponent } from './dom-to-point/dom-to-point.component';
import { PointDirective } from './dom-to-point/point.directive';


@NgModule({
  declarations: [
    LineComponent,
    DomToPointComponent,
    PointDirective
  ],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
