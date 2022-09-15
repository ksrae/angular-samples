import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { MarkerComponent } from './marker/marker.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { AddSeriesComponent } from './add-series/add-series.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';


@NgModule({
  declarations: [
    LineComponent,
    TooltipComponent,
    GetpointComponent,
    MarkerComponent,
    DrilldownComponent,
    AddSeriesComponent,
    CustomTooltipComponent
  ],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
