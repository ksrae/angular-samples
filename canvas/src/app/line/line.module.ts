import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { DomToPointComponent } from './dom-to-point/dom-to-point.component';
import { PointDirective } from './dom-to-point/point.directive';
import { SharedModule } from '../shared.module';
import { TooltipComponent } from './dom-to-point/tooltip/tooltip.component';
import { TooltipContainerComponent } from './dom-to-point/tooltip-container/tooltip-container.component';


@NgModule({
  declarations: [
    LineComponent,
    DomToPointComponent,
    PointDirective,
    TooltipComponent,
    TooltipContainerComponent
  ],
  imports: [
    CommonModule,
    LineRoutingModule,
    SharedModule
  ]
})
export class LineModule { }
