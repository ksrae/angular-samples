import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { MarkerComponent } from './marker/marker.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { SeriesAddComponent } from './series-add/series-add.component';
import { AxisXYComponent } from './axis/axis-xy/axis-xy.component';
import { MultixAxisComponent } from './axis/multi-xaxis/multi-xaxis.component';
import { XaxisLinktoComponent } from './axis/xaxis-linkto/xaxis-linkto.component';
import { LineDistanceComponent } from './distance/distance.component';
import { GpuBoostComponent } from './gpu-boost/gpu-boost.component';
import { MultiTooltipComponent } from './multi-tooltip/multi-tooltip.component';
import { PlotLinesComponent } from './plot-lines/plot-lines.component';
import { SeriesVisibleComponent } from './series-visible/series-visible.component';
import { DragBackgroundComponent } from './drag-background/drag-background.component';
import { SeriesMultiColorComponent } from './series-multi-color/series-multi-color.component';
import { XaxisLabelComponent } from './axis/xaxis-label/xaxis-label.component';
import { AxisShiftComponent } from './axis/axis-shift/axis-shift.component';
import { AxisShift2Component } from './axis/axis-shift2/axis-shift2.component';


@NgModule({
  declarations: [
    LineComponent,

    AxisXYComponent,
    MultixAxisComponent,
    XaxisLinktoComponent,
    XaxisLabelComponent,
    CustomTooltipComponent,
    LineDistanceComponent,
    DrilldownComponent,
    GetpointComponent,
    GpuBoostComponent,
    MarkerComponent,
    MultiTooltipComponent,
    PlotLinesComponent,
    SeriesAddComponent,
    SeriesVisibleComponent,
    TooltipComponent,
    DragBackgroundComponent,
    SeriesMultiColorComponent,
    AxisShiftComponent,
    AxisShift2Component,

  ],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
