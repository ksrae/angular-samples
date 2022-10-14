import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { MarkerComponent } from './marker/marker.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { SeriesAddComponent } from './series-add/series-add.component';
import { AxisXYComponent } from './axis/axis-xy/axis-xy.component';
import { MultixAxisComponent } from './axis/multi-xaxis/multi-xaxis.component';
import { XaxisLinktoComponent } from './axis/xaxis-linkto/xaxis-linkto.component';
import { LineDistanceComponent } from './distance/distance.component';
import { GpuBoostComponent } from './gpu-boost/gpu-boost.component';
import { PlotLinesComponent } from './plot-lines/plot-lines.component';
import { SeriesVisibleComponent } from './series-visible/series-visible.component';
import { SeriesMultiColorComponent } from './series-multi-color/series-multi-color.component';
import { XaxisLabelComponent } from './axis/xaxis-label/xaxis-label.component';
import { AxisShiftComponent } from './axis/axis-shift/axis-shift.component';
import { AxisShift2Component } from './axis/axis-shift2/axis-shift2.component';
import { CustomTooltipComponent } from './tooltip-customized/tooltip-customized.component';
import { MultiTooltipComponent } from './tooltip-multi/tooltip-multi.component';
import { OverlayblankComponent } from './overlayblank/overlayblank.component';
import { DragPointComponent } from './drag/drag-point/drag-point.component';
import { DragPointMultiDimensionComponent } from './drag/drag-point-multi-dimension/drag-point-multi-dimension.component';


@NgModule({
  declarations: [
    LineComponent,

    AxisXYComponent,
    MultixAxisComponent,
    XaxisLinktoComponent,
    XaxisLabelComponent,
    LineDistanceComponent,
    DrilldownComponent,
    GetpointComponent,
    GpuBoostComponent,
    MarkerComponent,
    PlotLinesComponent,
    SeriesAddComponent,
    SeriesVisibleComponent,
    TooltipComponent,
    CustomTooltipComponent,
    MultiTooltipComponent,
    DragPointComponent,
    DragPointMultiDimensionComponent,
    SeriesMultiColorComponent,
    AxisShiftComponent,
    AxisShift2Component,
    OverlayblankComponent,

  ],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
